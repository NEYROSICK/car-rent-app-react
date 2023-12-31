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
    if (debouncedFrom) {
      setLocalFilters((prevLocalFilters) => ({
        ...prevLocalFilters,
        from: debouncedFrom,
      }));
    } else {
      setLocalFilters((prevLocalFilters) => {
        const { from, ...rest } = prevLocalFilters;
        return rest;
      });
    }
  }, [debouncedFrom, setLocalFilters]);

  useEffect(() => {
    if (debouncedTo) {
      setLocalFilters((prevLocalFilters) => ({
        ...prevLocalFilters,
        to: debouncedTo,
      }));
    } else {
      setLocalFilters((prevLocalFilters) => {
        const { to, ...rest } = prevLocalFilters;
        return rest;
      });
    }
  }, [debouncedTo, setLocalFilters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    const validNumber = value.split(" ").join("");

    if (name === "from" && isStringNumbersOrEmpty(validNumber)) {
      setInputFromValue(validNumber);
    }

    if (name === "to" && isStringNumbersOrEmpty(validNumber)) {
      setInputToValue(validNumber);
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
