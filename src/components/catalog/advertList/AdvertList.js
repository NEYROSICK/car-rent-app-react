import { useDispatch, useSelector } from "react-redux";
import {
  getAdverts,
  getGeneralCount,
  getIsFirstFetch,
  getIsLoading,
} from "../../../redux/selectors";
import Container from "../../common/container/Container";
import Card from "../../common/card/Card";
import { ListSection, CardList, BtnPagination } from "./advertList.styled";
import { useEffect, useState } from "react";
import { setAdverts } from "../../../redux/slices/advertSlice";
import { fetchAdverts, fetchAdvertsAll } from "../../../redux/operations";
import Loader from "../../common/loader/Loader";

const AdvertList = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(getAdverts);
  const isLoading = useSelector(getIsLoading);
  const isFirstFetch = useSelector(getIsFirstFetch);
  const generalCount = useSelector(getGeneralCount);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchAdverts({ page }));
  }, [dispatch, page]);

  useEffect(() => {
    dispatch(fetchAdvertsAll());

    return () => {
      dispatch(setAdverts([]));
    };
  }, [dispatch]);

  const handleClick = () => {
    setPage(page + 1);
  };

  console.log(generalCount, adverts.length);

  if (isFirstFetch) {
    return <Loader variant="initialization" size={90} />;
  } else {
    return (
      <>
        <ListSection>
          <Container>
            <h2 className="visually-hidden">Car advertisement list</h2>
            <CardList>
              {adverts.map((advert) => (
                <Card item={advert} key={advert.id} />
              ))}
            </CardList>
          </Container>
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

export default AdvertList;
