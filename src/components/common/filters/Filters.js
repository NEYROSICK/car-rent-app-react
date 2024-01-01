import { useState } from "react";
import { ButtonContainer, FiltersContainer, FiltersList } from "./filters.styled";
import { useSearchParams } from "react-router-dom";
import brands from "../../../assets/carBrands.json";
import prices from "../../../assets/carPrices.json";
import Button from "../button/Button";
import FilterDropdown from "../filterDropdown/FilterDropdown";
import { deepEqual } from "../../../helpers/deepEqual";
import FilterInputs from "../filterInputs/FilterInputs";
import IconClose from "../icons/IconClose";

const Filters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = Object.fromEntries(searchParams);
  const areParamsSet = Object.values(params).some((option) => option);
  const [localFilters, setLocalFilters] = useState(areParamsSet ? params : {});

  const areLocalFiltersSet = Object.values(localFilters).some((option) => option);
  const whetherFiltersChanged = !deepEqual(localFilters, params);

  const handleSearchClick = () => {
    if (whetherFiltersChanged) {
      setSearchParams(localFilters);
    }
  };

  const handleCloseClick = () => {
    setLocalFilters({});
    setSearchParams({});
  };

  return (
    <FiltersContainer areLocalFiltersSet={areLocalFiltersSet}>
      <FiltersList>
        <FilterDropdown
          options={brands}
          localFilters={localFilters}
          setLocalFilters={setLocalFilters}
          parameter={"brand"}
          title={"Car brand"}
          dropdownDefault={"Select a brand"}
          areParamsSet={areParamsSet}
          areLocalFiltersSet={areLocalFiltersSet}
        />

        <FilterDropdown
          options={prices}
          localFilters={localFilters}
          setLocalFilters={setLocalFilters}
          parameter={"price"}
          title={"Price/ 1 hour"}
          dropdownDefault={"To $"}
          areParamsSet={areParamsSet}
          areLocalFiltersSet={areLocalFiltersSet}
        />

        <FilterInputs localFilters={localFilters} setLocalFilters={setLocalFilters} />
        <ButtonContainer>
          <Button variant="search" onClick={handleSearchClick}>
            Search
          </Button>
          <Button
            variant="close"
            onClick={handleCloseClick}
            areLocalFiltersSet={areLocalFiltersSet}
          >
            <IconClose />
          </Button>
        </ButtonContainer>
      </FiltersList>
    </FiltersContainer>
  );
};

export default Filters;
