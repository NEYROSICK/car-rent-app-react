import PropTypes from "prop-types";
import { FilterInput, FilterInputBlock, FilterInputContainer, Title } from "./filterInputs.styled";
import debounce from "lodash.debounce";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const FilterInputs = ({ localFilters, setLocalFilters }) => {
  // const [inputState, setInputState] = useState({});
  const [searchParams] = useSearchParams();
  const fromParamValue = searchParams.get("from");
  const toParamValue = searchParams.get("to");

  useEffect(() => {
    if (fromParamValue && typeof Number(fromParamValue) === "number") {
      setLocalFilters((prevLocalFilters) => ({
        ...prevLocalFilters,
        from: fromParamValue,
      }));
    } else if (fromParamValue && typeof Number(fromParamValue) !== "number") {
      setLocalFilters((prevLocalFilters) => {
        const { from, ...rest } = prevLocalFilters;
        return rest;
      });
    }

    if (toParamValue && typeof Number(toParamValue) === "number") {
      setLocalFilters((prevLocalFilters) => ({
        ...prevLocalFilters,
        to: toParamValue,
      }));
    } else if (toParamValue && typeof Number(toParamValue) !== "number") {
      setLocalFilters((prevLocalFilters) => {
        const { to, ...rest } = prevLocalFilters;
        return rest;
      });
    }
  }, [fromParamValue, toParamValue, setLocalFilters]);

  // const handleLocalFiltersChange = (name, value) => {
  //   setLocalFilters((prevLocalFilters) => ({
  //     ...prevLocalFilters,
  //     [name]: value,
  //   }));
  // };

  // const debouncedChange = debounce(handleLocalFiltersChange, 300);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    // console.log(!!Number(value));
    // if (!!Number(value) && typeof Number(value) === "number") {
    // setInputState({ [name]: value });
    // debouncedChange(name, value);
    if (value && isStringOnlyNumbers(value.split(" ").join(""))) {
      setLocalFilters((prevLocalFilters) => ({
        ...prevLocalFilters,
        [name]: value.split(" ").join(""),
      }));
    }

    if (!value) {
      setLocalFilters((prevLocalFilters) => {
        const { [name]: paramName, ...rest } = prevLocalFilters;
        return rest;
      });
    }

    // }
  };

  // console.log(inputState);

  function formatNumberWithSpaces(number) {
    // if (typeof number !== "number") {
    //   return "Invalid input. Please provide a number.";
    // }
    if (number) {
      // const numberString = number.split(" ").join("");
      const formattedNumber = number.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      return formattedNumber;
    }
  }

  function isStringOnlyNumbers(inputString) {
    return /^\d+$/.test(inputString);
  }

  return (
    <div>
      <Title>Сar mileage / km</Title>
      <FilterInputContainer>
        <FilterInputBlock>
          <span>From:</span>
          <FilterInput
            type="text"
            value={formatNumberWithSpaces(localFilters.from) ?? ""}
            name="from"
            onChange={handleFilterChange}
          />
        </FilterInputBlock>
        <FilterInputBlock>
          <span>To:</span>
          <FilterInput
            type="text"
            value={formatNumberWithSpaces(localFilters.to) ?? ""}
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
