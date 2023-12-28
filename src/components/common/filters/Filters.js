import { useState } from "react";
import { FiltersContainer, FiltersList } from "./filters.styled";
import { useSearchParams } from "react-router-dom";
import brands from "../../../assets/carBrands.json";
import prices from "../../../assets/carPrices.json";
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
          parameter={"brand"}
          title={"Car brand"}
          dropdownDefault={"Select a brand"}
        />

        <FilterDropdown
          options={prices}
          localFilters={localFilters}
          setLocalFilters={setLocalFilters}
          parameter={"price"}
          title={"Price/ 1 hour"}
          dropdownDefault={"To $"}
        />

        <Button variant="search" onClick={handleSearchClick}>
          Search
        </Button>
      </FiltersList>
    </FiltersContainer>
  );
};

export default Filters;
