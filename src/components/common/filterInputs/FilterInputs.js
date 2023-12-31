import PropTypes from "prop-types";
import Input from "./input/Input";
import { FilterInputContainer, Title } from "./filterInputs.styled";

const FilterInputs = ({ setLocalFilters }) => {
  return (
    <div>
      <Title>Сar mileage / km</Title>
      <FilterInputContainer>
        <Input type="text" name="from" autoComplete="off" setLocalFilters={setLocalFilters} />
        <Input type="text" name="to" autoComplete="off" setLocalFilters={setLocalFilters} />
      </FilterInputContainer>
    </div>
  );
};

FilterInputs.propTypes = {
  setLocalFilters: PropTypes.func.isRequired,
};

export default FilterInputs;
