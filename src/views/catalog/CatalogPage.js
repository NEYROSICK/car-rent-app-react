import { useSelector } from "react-redux";
import AdvertList from "../../components/catalog/advertList/AdvertList";
import Filters from "../../components/common/filters/Filters";
import { getFilters } from "../../redux/selectors";
import { Main, Section } from "./catalogPage.styled";
import FilteredList from "../../components/catalog/filteredList/FilteredList";
import Container from "../../components/common/container/Container";

const CatalogPage = () => {
  const filters = useSelector(getFilters);
  const isFiltersSet = Object.values(filters).some((option) => option);

  return (
    <Main>
      <Section>
        <Container>
          <Filters />
          {!isFiltersSet ? <AdvertList /> : <FilteredList />}
        </Container>
      </Section>
    </Main>
  );
};

export default CatalogPage;
