import PropTypes from "prop-types";
import { FilterInput, FilterInputBlock, FilterInputContainer, Title } from "./filterInputs.styled";
import debounce from "lodash.debounce";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const FilterInputs = ({ localFilters, setLocalFilters }) => {
  // const [searchParams] = useSearchParams();
  // const searchParamValue = searchParams.get(parameter);

  // useEffect(() => {
  //   if (searchParamValue && typeof searchParamValue === 'number') {
  //     setLocalFilters((prevLocalFilters) => ({
  //       ...prevLocalFilters,
  //       [parameter]: { [name]: value },
  //     }));
  //   }
  // },[])

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setLocalFilters((prevLocalFilters) => ({
      ...prevLocalFilters,
      [name]: value,
    }));
  };

  const debouncedChange = debounce(handleFilterChange, 300);

  return (
    <div>
      <Title>Сar mileage / km</Title>
      <FilterInputContainer>
        <FilterInputBlock>
          <span>From</span>
          <FilterInput
            type="number"
            value={localFilters.from ?? ""}
            name="from"
            onChange={handleFilterChange}
          />
        </FilterInputBlock>
        <FilterInputBlock>
          <span>To</span>
          <FilterInput
            type="number"
            value={localFilters.to ?? ""}
            name="to"
            onChange={handleFilterChange}
          />
        </FilterInputBlock>
      </FilterInputContainer>
    </div>
  );
};

FilterInputs.propTypes = {
  localFilters: PropTypes.object.isRequired,
  setLocalFilters: PropTypes.func.isRequired,
};

export default FilterInputs;
