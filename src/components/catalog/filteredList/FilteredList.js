import { useDispatch, useSelector } from "react-redux";
import { getAdverts, getFilters, getGeneralCount, getIsLoading } from "../../../redux/selectors";
import Card from "../../common/card/Card";
import { CardList, BtnPagination } from "../advertList/advertList.styled";
import { useEffect, useState } from "react";
import { setAdverts } from "../../../redux/slices/advertSlice";
import { fetchAdverts } from "../../../redux/operations";
import Loader from "../../common/loader/Loader";

const FilteredList = () => {
  const adverts = useSelector(getAdverts);
  const isLoading = useSelector(getIsLoading);
  const generalCount = useSelector(getGeneralCount);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const brand = useSelector(getFilters).brand;
  const [filteredAdverts, setFilteredAdverts] = useState(null);

  useEffect(() => {
    dispatch(fetchAdverts({}));

    return () => {
      dispatch(setAdverts([]));
    };
  }, [dispatch]);

  useEffect(() => {
    const filterAdverts = () => {
      return adverts.filter(({ make }) => make.toLowerCase() === brand.toLowerCase());
    };

    setFilteredAdverts(filterAdverts());
  }, [adverts, brand]);

  const handleClick = () => {
    setPage(page + 1);
  };

  if (filteredAdverts) {
    return (
      <>
        {Boolean(!filteredAdverts.length && !isLoading) && (
          <p>Sorry, there are no matches for your request :(</p>
        )}

        {Boolean(filteredAdverts.length) && (
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
