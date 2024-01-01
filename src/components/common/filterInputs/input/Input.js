import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FilterInput, FilterInputBlock } from "../filterInputs.styled";
import { useSearchParams } from "react-router-dom";
import useDebounce from "../../../../hooks/useDebounce";

const Input = ({ type, name, autoComplete, localFilters, setLocalFilters }) => {
  const [searchParams] = useSearchParams();
  const paramValue = searchParams.get(name);
  const [inputValue, setInputValue] = useState(
    paramValue && isStringNumbersOrEmpty(paramValue) ? paramValue : ""
  );
  const debouncedInputValue = useDebounce(inputValue);

  useEffect(() => {
    if (paramValue && isStringNumbersOrEmpty(paramValue)) {
      setLocalFilters((prevLocalFilters) => ({
        ...prevLocalFilters,
        [name]: paramValue,
      }));
      setInputValue(paramValue);
    } else {
      setInputValue("");
    }
  }, [paramValue, setLocalFilters, name]);

  useEffect(() => {
    if (!localFilters[name]) {
      setInputValue("");
    }
  }, [localFilters, name]);

  useEffect(() => {
    if (debouncedInputValue) {
      setLocalFilters((prevLocalFilters) => ({
        ...prevLocalFilters,
        [name]: debouncedInputValue,
      }));
    } else {
      setLocalFilters((prevLocalFilters) => {
        const { [name]: parameter, ...rest } = prevLocalFilters;
        return rest;
      });
    }
  }, [debouncedInputValue, setLocalFilters, name]);

  const handleFilterChange = (e) => {
    const validNumber = e.target.value.split(" ").join("");

    if (isStringNumbersOrEmpty(validNumber)) {
      setInputValue(validNumber);
    }
  };

  function formatNumberWithSpaces(number) {
    if (number) {
      return Number(number).toLocaleString();
    }
  }

  function isStringNumbersOrEmpty(inputString) {
    return /^[0-9]*$/.test(inputString);
  }

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <FilterInputBlock>
      <span>{capitalizeFirstLetter(name)}:</span>
      <FilterInput
        type={type}
        value={formatNumberWithSpaces(inputValue) ?? ""}
        name={name}
        autoComplete={autoComplete}
        onChange={handleFilterChange}
      />
    </FilterInputBlock>
  );
};

Input.propTypes = {
  localFilters: PropTypes.object.isRequired,
  setLocalFilters: PropTypes.func.isRequired,
};

export default Input;
