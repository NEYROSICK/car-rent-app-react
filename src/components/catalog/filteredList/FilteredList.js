import { useDispatch, useSelector } from "react-redux";
import { getAdverts, getIsLoading } from "../../../redux/selectors";
import Card from "../../common/card/Card";
import { CardList } from "../advertList/advertList.styled";
import { useEffect, useState } from "react";
import { setAdverts } from "../../../redux/slices/advertSlice";
import { fetchAdverts } from "../../../redux/operations";
import Loader from "../../common/loader/Loader";
import { Message } from "./filteredList.styled";
import IconKeys from "../../common/icons/IconKeys";
import Button from "../../common/button/Button";

const FilteredList = ({ params }) => {
  const LIMIT = 12;
  const adverts = useSelector(getAdverts);
  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();
  const [filteredAdverts, setFilteredAdverts] = useState([]);
  const [limitedAdverts, setLimitedAdverts] = useState([]);
  const [skip, setSkip] = useState(LIMIT);
  const { brand, price, from, to } = params;
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
      return adverts
        .filter(({ make }) => !brand || make.toLowerCase() === brand.toLowerCase())
        .filter(({ rentalPrice }) => !price || rentalPrice.split("$").join("") <= Number(price))
        .filter(({ mileage }) => !from || mileage >= Number(from))
        .filter(({ mileage }) => !to || mileage <= Number(to));
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

          {filteredLength > LIMIT && limitedLength < filteredLength && (
            <Button variant="pagination" onClick={handleClick}>
              Load more
            </Button>
          )}
        </>
      )}

      {isLoading && <Loader variant="initialization" size={90} />}
    </>
  );
};

export default FilteredList;
