import { useState } from "react";
import { FiltersContainer, FiltersList } from "./filters.styled";
import { useSearchParams } from "react-router-dom";
import brands from "../../../assets/carBrands.json";
import prices from "../../../assets/carPrices.json";
import Button from "../button/Button";
import FilterDropdown from "../filterDropdown/FilterDropdown";
import { deepEqual } from "../../../helpers/deepEqual";
import FilterInputs from "../filterInputs/FilterInputs";

const Filters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [localFilters, setLocalFilters] = useState({});

  const params = Object.fromEntries(searchParams);
  const areParamsSet = Object.values(params).some((option) => option);

  const whetherFiltersChanged = !deepEqual(localFilters, params);
  console.log(localFilters);
  const handleSearchClick = () => {
    if (whetherFiltersChanged) {
      setSearchParams(localFilters);
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

        <FilterInputs localFilters={localFilters} setLocalFilters={setLocalFilters} />

        <Button variant="search" onClick={handleSearchClick}>
          Search
        </Button>
      </FiltersList>
    </FiltersContainer>
  );
};

export default Filters;
