import { useDispatch, useSelector } from "react-redux";
import AdvertList from "../../components/catalog/advertList/AdvertList";
import Filters from "../../components/common/filters/Filters";
import { getIsLoading } from "../../redux/selectors";
import { Main, Section } from "./catalogPage.styled";
import Loader from "../../components/common/loader/Loader";
import { useEffect } from "react";
import { fetchAdverts } from "../../redux/operations";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  return (
    <Main>
      <Section>
        <Filters />
        <AdvertList />
      </Section>
    </Main>
  );
};

export default CatalogPage;
