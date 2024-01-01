import { useDispatch, useSelector } from "react-redux";
import { getAdverts, getGeneralCount, getIsLoading } from "../../../redux/selectors";
import Card from "../../common/card/Card";
import { CardList } from "./advertList.styled";
import { useEffect, useState } from "react";
import { setAdverts } from "../../../redux/slices/advertSlice";
import { fetchAdverts, getAdvertCount } from "../../../redux/operations";
import Loader from "../../common/loader/Loader";
import { useSearchParams } from "react-router-dom";
import Button from "../../common/button/Button";

const AdvertList = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(getAdverts);
  const isLoading = useSelector(getIsLoading);
  const generalCount = useSelector(getGeneralCount);
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const limit = 12;

  useEffect(() => {
    if (!searchParams.get("brand")) {
      dispatch(fetchAdverts({ page, limit }));
    }
  }, [dispatch, page, searchParams]);

  useEffect(() => {
    dispatch(getAdvertCount());

    return () => {
      dispatch(setAdverts([]));
    };
  }, [dispatch]);

  const handleClick = () => {
    setPage(page + 1);
  };

  return (
    <>
      {!adverts.length && <Loader variant="initialization" size={90} />}

      {Boolean(adverts.length) && (
        <CardList>
          {adverts.map((advert) => (
            <Card item={advert} key={advert.id} />
          ))}
        </CardList>
      )}

      {adverts.length < generalCount && !isLoading && (
        <Button variant="pagination" onClick={handleClick}>
          Load more
        </Button>
      )}

      {Boolean(adverts.length) && isLoading && <Loader variant="pagination" size={90} />}
    </>
  );
};

export default AdvertList;
