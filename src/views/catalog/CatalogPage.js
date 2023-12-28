import AdvertList from "../../components/catalog/advertList/AdvertList";
import Filters from "../../components/common/filters/Filters";
import { Main, Section } from "./catalogPage.styled";
import FilteredList from "../../components/catalog/filteredList/FilteredList";
import Container from "../../components/common/container/Container";
import { useSearchParams } from "react-router-dom";

const CatalogPage = () => {
  const [searchParams] = useSearchParams();
  const params = Object.fromEntries(searchParams);
  const areFiltersSet = Object.values(params).some((option) => option);

  return (
    <Main>
      <Section>
        <Container>
          <h2 className="visually-hidden">Car advertisement catalog</h2>
          <Filters />
          {!areFiltersSet ? <AdvertList /> : <FilteredList params={params} />}
        </Container>
      </Section>
    </Main>
  );
};

export default CatalogPage;
