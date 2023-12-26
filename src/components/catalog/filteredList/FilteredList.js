import { useDispatch, useSelector } from "react-redux";
import { getAdverts, getFilters, getGeneralCount, getIsLoading } from "../../../redux/selectors";
import Card from "../../common/card/Card";
import { ListSection, CardList, BtnPagination } from "../advertList/advertList.styled";
import { useEffect, useState } from "react";
import { setAdverts } from "../../../redux/slices/advertSlice";
import { fetchAdverts } from "../../../redux/operations";
import Loader from "../../common/loader/Loader";

const FilteredList = () => {
  let adverts = useSelector(getAdverts);
  const isLoading = useSelector(getIsLoading);
  const generalCount = useSelector(getGeneralCount);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const brand = useSelector(getFilters).brand;

  useEffect(() => {
    dispatch(fetchAdverts({}));

    return () => {
      dispatch(setAdverts([]));
    };
  }, [dispatch]);

  const handleClick = () => {
    setPage(page + 1);
  };

  const filterAdverts = () => {
    return adverts.filter(({ make }) => make.toLowerCase() === brand.toLowerCase());
  };

  adverts = filterAdverts();

  if (!adverts.length) {
    return <Loader variant="initialization" size={90} />;
  } else {
    return (
      <>
        <ListSection>
          <h2 className="visually-hidden">Car advertisement list</h2>
          <CardList>
            {adverts.map((advert) => (
              <Card item={advert} key={advert.id} />
            ))}
          </CardList>
        </ListSection>
        {adverts.length < generalCount && (
          <>
            {isLoading ? (
              <Loader variant="pagination" size={90} />
            ) : (
              <BtnPagination onClick={handleClick}>Load more</BtnPagination>
            )}
          </>
        )}
      </>
    );
  }
};

export default FilteredList;
