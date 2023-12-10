import React, { useEffect } from "react";
import Container from "../../components/common/container/Container";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdverts } from "../../redux/operations";
import AdvertList from "../../components/catalogue/advertList/AdvertList";
import { getIsLoading } from "../../redux/selectors";

const CatalogPage = (props) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return (
    <section>
      <Container>
        <h1>Catalog</h1>
        {isLoading ? <></> : <AdvertList />}
      </Container>
    </section>
  );
};

export default CatalogPage;
