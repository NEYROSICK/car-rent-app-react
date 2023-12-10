import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdverts } from "../../redux/operations";
import AdvertList from "../../components/catalog/advertList/AdvertList";
import { getIsLoading } from "../../redux/selectors";

const CatalogPage = (props) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return <main>{isLoading ? <></> : <AdvertList />}</main>;
};

export default CatalogPage;
