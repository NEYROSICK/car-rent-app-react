import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdverts, getFavorites, getIsLoading } from "../../../redux/selectors";
import Card from "../../common/card/Card";
import { BtnPagination, CardList, Message } from "./favoriteList.styled";
import { fetchAdverts } from "../../../redux/operations";
import { setAdverts } from "../../../redux/slices/advertSlice";
import Loader from "../../common/loader/Loader";
import IconKeys from "../../common/icons/IconKeys";

const FavoriteList = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(getFavorites);
  const adverts = useSelector(getAdverts);
  const isLoading = useSelector(getIsLoading);
  const [favoriteAdverts, setFavoriteAdverts] = useState([]);
  const [limitedAdverts, setLimitedAdverts] = useState([]);
  const [page, setPage] = useState(1);
  const [skip, setSkip] = useState(12);
  const { length: advertsLength } = favoriteAdverts;
  const { length: limitedAdvertsLength } = limitedAdverts;

  useEffect(() => {
    dispatch(fetchAdverts({}));

    return () => {
      dispatch(setAdverts([]));
    };
  }, [dispatch]);

  useEffect(() => {
    setFavoriteAdverts(adverts.filter((advert) => favorites.includes(advert.id)));
  }, [favorites, adverts]);

  useEffect(() => {
    setLimitedAdverts(favoriteAdverts.slice(0, skip));
  }, [favoriteAdverts, skip]);

  useEffect(() => {
    setSkip(page * 12);
  }, [page]);

  console.log(limitedAdverts);

  return (
    <>
      {Boolean(!limitedAdvertsLength && !isLoading) && (
        <Message>
          <IconKeys />
          There are no favorite adverts. Try to add some ;)
        </Message>
      )}

      {Boolean(limitedAdvertsLength) && (
        <>
          <CardList>
            {limitedAdverts.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </CardList>

          {advertsLength > 12 && limitedAdvertsLength < advertsLength && (
            <BtnPagination onClick={() => setPage(page + 1)}>Load more</BtnPagination>
          )}
        </>
      )}

      {isLoading && <Loader variant="initialization" size={90} />}
    </>
  );
};

export default FavoriteList;
