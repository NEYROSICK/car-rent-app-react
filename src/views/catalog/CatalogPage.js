import { useSelector } from "react-redux";
import AdvertList from "../../components/catalog/advertList/AdvertList";
import Filters from "../../components/common/filters/Filters";
import { getFilters } from "../../redux/selectors";
import { Main, Section } from "./catalogPage.styled";
import FilteredList from "../../components/catalog/filteredList/FilteredList";

const CatalogPage = () => {
  const filters = useSelector(getFilters);
  const isFiltersSet = Object.values(filters).some((option) => option);

  return (
    <Main>
      <Section>
        <Filters />
        {!isFiltersSet ? <AdvertList /> : <FilteredList />}
        {/* <AdvertList /> */}
      </Section>
    </Main>
  );
};

export default CatalogPage;
