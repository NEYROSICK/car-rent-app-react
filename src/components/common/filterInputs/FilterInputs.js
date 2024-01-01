import PropTypes from "prop-types";
import Input from "./input/Input";
import { FilterInputContainer, Title } from "./filterInputs.styled";

const FilterInputs = ({ localFilters, setLocalFilters }) => {
  return (
    <div>
      <Title>Сar mileage / km</Title>
      <FilterInputContainer>
        <Input
          type="text"
          name="from"
          autoComplete="off"
          localFilters={localFilters}
          setLocalFilters={setLocalFilters}
        />

        <Input
          type="text"
          name="to"
          autoComplete="off"
          localFilters={localFilters}
          setLocalFilters={setLocalFilters}
        />
      </FilterInputContainer>
    </div>
  );
};

FilterInputs.propTypes = {
  localFilters: PropTypes.object.isRequired,
  setLocalFilters: PropTypes.func.isRequired,
};

export default FilterInputs;
