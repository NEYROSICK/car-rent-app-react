import React, { useEffect, useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";
import { OptionItem, OptionList, ParamContainer, SelectBtn } from "./filterDropwown.styled";
import IconChevron from "../icons/IconChevron";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setFilters } from "../../../redux/slices/filterSlice";
import { nanoid } from "nanoid";

const FilterDropdown = ({
  dropdownDefault,
  title,
  parameter,
  options,
  localFilters,
  setLocalFilters,
}) => {
  const [searchParams] = useSearchParams();

  const optionOriginalName = useMemo(() => {
    if (searchParams.get(parameter)) {
      const lowercaseOptions = options.map((element) => element.toLowerCase());
      const index = lowercaseOptions.findIndex(
        (element) => element === searchParams.get(parameter).toLowerCase()
      );
      return index === -1 ? false : options[index];
    }
  }, [searchParams, options, parameter]);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [chosenOption, setChosenOption] = useState(
    searchParams.get(parameter) && optionOriginalName ? optionOriginalName : dropdownDefault
  );

  const dropdownRef = useRef(null);
  const scrollToRef = useRef(null);
  const optionButton = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchParams.get(parameter) && optionOriginalName) {
      dispatch(setFilters(optionOriginalName));
      setChosenOption(optionOriginalName);
    } else {
      dispatch(setFilters(searchParams.get(parameter)));
      setChosenOption(dropdownDefault);
    }

    return () => {
      dispatch(setFilters(null));
    };
  }, [dispatch, searchParams, optionOriginalName, parameter, dropdownDefault]);

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
      setLocalFilters({ ...localFilters, [parameter]: e.target.innerText });
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
