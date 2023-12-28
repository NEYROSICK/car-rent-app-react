import { useState } from "react";
import { FiltersContainer, FiltersList } from "./filters.styled";
import { useSearchParams } from "react-router-dom";
import brands from "../../../assets/carBrands.json";
import prices from "../../../assets/carPrices.json";
import Button from "../button/Button";
import FilterDropdown from "../filterDropdown/FilterDropdown";
import { deepEqual } from "../../../helpers/deepEqual";

const Filters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [localFilters, setLocalFilters] = useState({});

  console.log(localFilters);

  const params = Object.fromEntries(searchParams);
  const areFiltersSet = Object.values(localFilters).some((option) => option);
  const areParamsSet = Object.values(params).some((option) => option);

  const whetherFiltersChanged = !deepEqual(
    localFilters.brand
      ? { ...localFilters, brand: localFilters.brand.toLowerCase() }
      : localFilters,
    params
  );

  const handleSearchClick = () => {
    if (areFiltersSet && whetherFiltersChanged) {
      setSearchParams(localFilters);
      console.clear();
      console.table({ areFiltersSet, whetherFiltersChanged });
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
          areParamsSet={areParamsSet}
        />

        <FilterDropdown
          options={prices}
          localFilters={localFilters}
          setLocalFilters={setLocalFilters}
          parameter={"price"}
          title={"Price/ 1 hour"}
          dropdownDefault={"To $"}
          areParamsSet={areParamsSet}
        />

        <Button variant="search" onClick={handleSearchClick}>
          Search
        </Button>
      </FiltersList>
    </FiltersContainer>
  );
};

export default Filters;
