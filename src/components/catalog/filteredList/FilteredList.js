import { useDispatch, useSelector } from "react-redux";
import { getAdverts, getGeneralCount, getIsLoading } from "../../../redux/selectors";
import Card from "../../common/card/Card";
import { CardList, BtnPagination } from "../advertList/advertList.styled";
import { useEffect, useState } from "react";
import { setAdverts } from "../../../redux/slices/advertSlice";
import { fetchAdverts } from "../../../redux/operations";
import Loader from "../../common/loader/Loader";

const FilteredList = ({ params }) => {
  const adverts = useSelector(getAdverts);
  const isLoading = useSelector(getIsLoading);
  const generalCount = useSelector(getGeneralCount);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const [filteredAdverts, setFilteredAdverts] = useState(null);
  const { brand, price, mileage } = params;

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
      if (mileage) {
        filteredList = filteredList.filter("...smth");
      }

      return filteredList;
    };

    setFilteredAdverts(filterAdverts());
  }, [adverts, brand, mileage, price]);

  const handleClick = () => {
    setPage(page + 1);
  };

  if (filteredAdverts) {
    return (
      <>
        {!filteredAdverts.length && !isLoading && (
          <p>Sorry, there are no matches for your request :(</p>
        )}

        {!!filteredAdverts.length && (
          <>
            <CardList>
              {filteredAdverts.map((advert) => (
                <Card item={advert} key={advert.id} />
              ))}
            </CardList>
            {filteredAdverts.length < generalCount && (
              <>
                {isLoading ? (
                  <Loader variant="pagination" size={90} />
                ) : (
                  <BtnPagination onClick={handleClick}>Load more</BtnPagination>
                )}
              </>
            )}
          </>
        )}

        {isLoading && <Loader variant="initialization" size={90} />}
      </>
    );
  }
};

export default FilteredList;
