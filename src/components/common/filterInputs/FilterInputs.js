import PropTypes from "prop-types";
import { FilterInput, FilterInputBlock, FilterInputContainer, Title } from "./filterInputs.styled";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useDebounce from "../../../hooks/useDebounce";
// import { useDebounce } from "use-debounce";

const FilterInputs = ({ localFilters, setLocalFilters }) => {
  const [inputFromValue, setInputFromValue] = useState("");
  const [inputToValue, setInputToValue] = useState("");
  const [searchParams] = useSearchParams();
  const fromParamValue = searchParams.get("from");
  const toParamValue = searchParams.get("to");
  const debouncedFrom = useDebounce(inputFromValue);
  const debouncedTo = useDebounce(inputToValue);

  // useEffect(() => {
  //   if (fromParamValue && typeof Number(fromParamValue) === "number") {
  //     setLocalFilters((prevLocalFilters) => ({
  //       ...prevLocalFilters,
  //       from: fromParamValue,
  //     }));
  //   } else if (fromParamValue && typeof Number(fromParamValue) !== "number") {
  //     setLocalFilters((prevLocalFilters) => {
  //       const { from, ...rest } = prevLocalFilters;
  //       return rest;
  //     });
  //   }

  //   if (toParamValue && typeof Number(toParamValue) === "number") {
  //     setLocalFilters((prevLocalFilters) => ({
  //       ...prevLocalFilters,
  //       to: toParamValue,
  //     }));
  //   } else if (toParamValue && typeof Number(toParamValue) !== "number") {
  //     setLocalFilters((prevLocalFilters) => {
  //       const { to, ...rest } = prevLocalFilters;
  //       return rest;
  //     });
  //   }
  // }, [fromParamValue, toParamValue, setLocalFilters]);

  useEffect(() => {
    setLocalFilters((prevLocalFilters) => ({
      ...prevLocalFilters,
      from: debouncedFrom,
    }));
  }, [debouncedFrom, setLocalFilters]);

  useEffect(() => {
    setLocalFilters((prevLocalFilters) => ({
      ...prevLocalFilters,
      to: debouncedTo,
    }));
  }, [debouncedTo, setLocalFilters]);

  // const handleLocalFiltersChange = (name, value) => {
  //   setLocalFilters((prevLocalFilters) => ({
  //     ...prevLocalFilters,
  //     [name]: value,
  //   }));
  // };

  // const debouncedChange = debounce(handleLocalFiltersChange, 300);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    if (name === "from" && value && isStringOnlyNumbers(value.split(" ").join(""))) {
      // setLocalFilters((prevLocalFilters) => ({
      //   ...prevLocalFilters,
      //   from: value.split(" ").join(""),
      // }));
      setInputFromValue(value.split(" ").join(""));
    }

    if (name === "to" && value && isStringOnlyNumbers(value.split(" ").join(""))) {
      // setLocalFilters((prevLocalFilters) => ({
      //   ...prevLocalFilters,
      //   [name]: value.split(" ").join(""),
      // }));
      setInputToValue(value.split(" ").join(""));
    }

    if (!value) {
      setLocalFilters((prevLocalFilters) => {
        const { [name]: paramName, ...rest } = prevLocalFilters;
        return rest;
      });
    }
  };

  function formatNumberWithSpaces(number) {
    // if (typeof number !== "number") {
    //   return "Invalid input. Please provide a number.";
    // }
    if (number) {
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
            value={formatNumberWithSpaces(inputFromValue) ?? ""}
            name="from"
            readonly
            autoComplete="off"
            onChange={handleFilterChange}
          />
        </FilterInputBlock>
        <FilterInputBlock>
          <span>To:</span>
          <FilterInput
            type="text"
            value={formatNumberWithSpaces(inputToValue) ?? ""}
            name="to"
            readonly
            autoComplete="off"
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
