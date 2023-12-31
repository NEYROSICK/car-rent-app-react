import { useDispatch, useSelector } from "react-redux";
import { getAdverts, getGeneralCount, getIsLoading } from "../../../redux/selectors";
import Card from "../../common/card/Card";
import { CardList, BtnPagination } from "../advertList/advertList.styled";
import { useEffect, useState } from "react";
import { setAdverts } from "../../../redux/slices/advertSlice";
import { fetchAdverts } from "../../../redux/operations";
import Loader from "../../common/loader/Loader";
import { Message } from "./filteredList.styled";
import IconKeys from "../../common/icons/IconKeys";

const FilteredList = ({ params }) => {
  const LIMIT = 12;
  const adverts = useSelector(getAdverts);
  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();
  const [filteredAdverts, setFilteredAdverts] = useState([]);
  const [limitedAdverts, setLimitedAdverts] = useState([]);
  const { brand, price, from, to } = params;
  const [skip, setSkip] = useState(LIMIT);
  const filteredLength = filteredAdverts.length;
  const limitedLength = limitedAdverts.length;

  useEffect(() => {
    dispatch(fetchAdverts({}));

    return () => {
      dispatch(setAdverts([]));
    };
  }, [dispatch]);

  useEffect(() => {
    const filterAdverts = () => {
      let filteredList = adverts;

      if (brand) {
        filteredList = filteredList.filter(({ make }) => {
          return make.toLowerCase() === brand.toLowerCase();
        });
      }

      if (price) {
        filteredList = filteredList.filter(
          ({ rentalPrice }) => rentalPrice.split("$").join("") <= Number(price)
        );
      }

      if (from) {
        filteredList = filteredList.filter(({ mileage }) => mileage >= Number(from));
      }

      if (to) {
        filteredList = filteredList.filter(({ mileage }) => mileage <= Number(to));
      }

      return filteredList;
    };

    setFilteredAdverts(filterAdverts());
    setSkip(LIMIT);
  }, [adverts, brand, price, from, to]);

  useEffect(() => {
    setLimitedAdverts(filteredAdverts.slice(0, skip));
  }, [filteredAdverts, skip]);

  const handleClick = () => {
    setSkip(skip + LIMIT);
  };

  return (
    <>
      {Boolean(!limitedLength) && !isLoading && (
        <Message>
          <IconKeys />
          Sorry, there are no matches for your request :(
        </Message>
      )}

      {Boolean(limitedLength) && (
        <>
          <CardList>
            {limitedAdverts.map((advert) => (
              <Card item={advert} key={advert.id} />
            ))}
          </CardList>

          {filteredLength > 12 && limitedLength < filteredLength && (
            <BtnPagination onClick={handleClick}>Load more</BtnPagination>
          )}
        </>
      )}

      {isLoading && <Loader variant="initialization" size={90} />}
    </>
  );
};

export default FilteredList;
