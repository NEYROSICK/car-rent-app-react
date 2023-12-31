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
  const limit = 12;
  const [skip, setSkip] = useState(limit);
  const { length: favoriteAdvertsLength } = favoriteAdverts;
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

  const handleClick = () => {
    setSkip(skip + limit);
  };

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

          {favoriteAdvertsLength > limit && limitedAdvertsLength < favoriteAdvertsLength && (
            <BtnPagination onClick={handleClick}>Load more</BtnPagination>
          )}
        </>
      )}

      {isLoading && <Loader variant="favorites" size={90} isFiltersShown={favorites.length} />}
    </>
  );
};

export default FavoriteList;
