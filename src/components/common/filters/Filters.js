import { useState } from "react";
import { FiltersContainer, FiltersList } from "./filters.styled";
import { useSearchParams } from "react-router-dom";
import brands from "../../../assets/carBrands.json";
import Button from "../button/Button";
import FilterDropdown from "../filterDropdown/FilterDropdown";

const Filters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [localFilters, setLocalFilters] = useState({ brand: null, price: null, mileage: null });

  const handleSearchClick = () => {
    if (localFilters.brand && searchParams.get("brand") !== localFilters.brand.toLowerCase()) {
      setSearchParams({ brand: localFilters.brand.toLowerCase() });
    }
  };

  return (
    <FiltersContainer>
      <FiltersList>
        <FilterDropdown
          options={brands}
          localFilters={localFilters}
          setLocalFilters={setLocalFilters}
          param={"brand"}
        />

        <Button variant="search" onClick={handleSearchClick}>
          Search
        </Button>
      </FiltersList>
    </FiltersContainer>
  );
};

export default Filters;
