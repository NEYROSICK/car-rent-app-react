import React, { useEffect, useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";
import { OptionItem, OptionList, ParamContainer, SelectBtn } from "./filterDropwown.styled";
import IconChevron from "../icons/IconChevron";
import { useSearchParams } from "react-router-dom";
import { nanoid } from "nanoid";

const FilterDropdown = ({
  areParamsSet,
  dropdownDefault,
  title,
  parameter,
  options,
  setLocalFilters,
}) => {
  const [searchParams] = useSearchParams();
  const searchParamValue = searchParams.get(parameter);

  const optionOriginalName = useMemo(() => {
    if (searchParamValue && parameter !== "price") {
      const lowercaseOptions = options.map((element) => element.toLowerCase());
      const index = lowercaseOptions.findIndex(
        (element) => element === searchParamValue.toLowerCase()
      );
      return index === -1 ? false : options[index];
    } else if (searchParamValue && parameter === "price") {
      const numberMatch = options.find((option) => option === searchParamValue);
      return numberMatch ? searchParamValue : false;
    }
  }, [searchParamValue, options, parameter]);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [chosenOption, setChosenOption] = useState(
    searchParamValue && optionOriginalName ? optionOriginalName : dropdownDefault
  );

  const dropdownRef = useRef(null);
  const scrollToRef = useRef(null);
  const optionButton = useRef(null);

  useEffect(() => {
    if (searchParamValue && optionOriginalName) {
      setChosenOption(optionOriginalName);
      setLocalFilters((prevLocalFilters) => ({
        ...prevLocalFilters,
        [parameter]: parameter !== "price" ? optionOriginalName.toLowerCase() : optionOriginalName,
      }));
    } else {
      setChosenOption(dropdownDefault);
    }

    if (!areParamsSet) {
      setChosenOption(dropdownDefault);
      setLocalFilters({});
    }
  }, [
    searchParamValue,
    optionOriginalName,
    parameter,
    dropdownDefault,
    setLocalFilters,
    areParamsSet,
  ]);

  useEffect(() => {
    if (isDropdownOpen && scrollToRef.current) {
      dropdownRef.current.scrollTop = scrollToRef.current.offsetTop - 14;
    }

    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        !optionButton.current.contains(e.target)
      ) {
        setIsDropdownOpen(!isDropdownOpen);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleBrandClick = (e) => {
    if (e.target.innerText !== chosenOption) {
      setChosenOption(e.target.innerText);
      setLocalFilters((prevLocalFilters) => ({
        ...prevLocalFilters,
        [parameter]: parameter !== "price" ? e.target.innerText.toLowerCase() : e.target.innerText,
      }));
    }

    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <ParamContainer>
      <p>{title}</p>

      <SelectBtn
        onClick={() => {
          setIsDropdownOpen(!isDropdownOpen);
        }}
        isDropdownOpen={isDropdownOpen}
        ref={optionButton}
        parameter={parameter}
      >
        <span>{chosenOption}</span>
        <IconChevron />
      </SelectBtn>

      {isDropdownOpen && (
        <OptionList parameter={parameter}>
          <div ref={dropdownRef}>
            <ul>
              {options.map((brand) => (
                <OptionItem
                  onClick={handleBrandClick}
                  chosenOption={chosenOption}
                  parameter={parameter}
                  key={nanoid()}
                  ref={chosenOption === brand ? scrollToRef : null}
                >
                  {brand}
                </OptionItem>
              ))}
            </ul>
          </div>
        </OptionList>
      )}
    </ParamContainer>
  );
};

FilterDropdown.propTypes = { options: PropTypes.array.isRequired };

export default FilterDropdown;
