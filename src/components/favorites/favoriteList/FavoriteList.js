import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavoriteAdverts, getFavorites, getIsFavoritesLoading } from "../../../redux/selectors";
import Card from "../../common/card/Card";
import { CardList, Message } from "./favoriteList.styled";
import { fetchAdvertsAll } from "../../../redux/operations";
import Loader from "../../common/loader/Loader";
import IconKeys from "../../common/icons/IconKeys";
import { useSearchParams } from "react-router-dom";
import { setFavorites } from "../../../redux/slices/favoriteSlice";
import Button from "../../common/button/Button";

const FavoriteList = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(getFavorites);
  const adverts = useSelector(getFavoriteAdverts);
  const isLoading = useSelector(getIsFavoritesLoading);
  const [favoriteAdverts, setFavoriteAdverts] = useState([]);
  const [filteredAdverts, setFilteredAdverts] = useState([]);
  const [limitedAdverts, setLimitedAdverts] = useState([]);
  const LIMIT = 12;
  const [skip, setSkip] = useState(LIMIT);
  const [searchParams] = useSearchParams();
  const params = Object.fromEntries(searchParams);
  const areFiltersSet = Object.values(params).some((option) => option);
  const { brand, price, from, to } = params;
  const [isAdvertsFound, setIsAdvertsFound] = useState(true);
  const [areFavoriteAdsSet, setAreFavoriteAdsSet] = useState(true);

  useEffect(() => {
    dispatch(fetchAdvertsAll());

    return () => {
      dispatch(setFavorites([]));
    };
  }, [dispatch]);

  useEffect(() => {
    setFavoriteAdverts(adverts.filter((advert) => favorites.includes(advert.id)));
    if (favorites.length) {
      setAreFavoriteAdsSet(true);
    } else {
      setAreFavoriteAdsSet(false);
    }
  }, [favorites, adverts]);

  useEffect(() => {
    const filterAdverts = () => {
      return favoriteAdverts
        .filter(({ make }) => !brand || make.toLowerCase() === brand.toLowerCase())
        .filter(({ rentalPrice }) => !price || rentalPrice.split("$").join("") <= Number(price))
        .filter(({ mileage }) => !from || mileage >= Number(from))
        .filter(({ mileage }) => !to || mileage <= Number(to));
    };

    setFilteredAdverts(filterAdverts());
    setSkip(LIMIT);
  }, [favoriteAdverts, brand, price, from, to]);

  useEffect(() => {
    if (!areFiltersSet) {
      setLimitedAdverts(favoriteAdverts.slice(0, skip));
    } else {
      setLimitedAdverts(filteredAdverts.slice(0, skip));
    }
  }, [favoriteAdverts, filteredAdverts, skip, areFiltersSet]);

  useEffect(() => {
    if (!limitedAdverts.length) {
      setTimeout(() => {
        setIsAdvertsFound(false);
      }, 300);
    }
  }, [limitedAdverts]);

  const handleClick = () => {
    setSkip(skip + LIMIT);
  };

  return (
    <>
      {Boolean(limitedAdverts.length) && (
        <>
          <CardList>
            {limitedAdverts.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </CardList>
        </>
      )}

      {!areFiltersSet &&
        favoriteAdverts.length > LIMIT &&
        limitedAdverts.length < favoriteAdverts.length &&
        Boolean(limitedAdverts.length) && (
          <Button variant="pagination" onClick={handleClick}>
            Load more
          </Button>
        )}

      {areFiltersSet &&
        favoriteAdverts.length > LIMIT &&
        limitedAdverts.length < favoriteAdverts.length &&
        limitedAdverts.length === LIMIT && (
          <Button variant="pagination" onClick={handleClick}>
            Load more
          </Button>
        )}

      {Boolean(!isLoading && !limitedAdverts.length && !isAdvertsFound) && (
        <Message areFavoriteAdsSet={areFavoriteAdsSet}>
          <IconKeys />
          Sorry, there are no favorite adverts or matches for your request :(
        </Message>
      )}

      {isLoading && !limitedAdverts.length && (
        <Loader variant="favorites" size={90} isFiltersShown={favorites.length} />
      )}
    </>
  );
};

export default FavoriteList;
