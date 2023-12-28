import React, { useEffect, useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";
import { BrandContainer, BrandItem, BrandList, SelectBtn } from "./filterDropwown.styled";
import IconChevron from "../icons/IconChevron";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setFilters } from "../../../redux/slices/filterSlice";
import { nanoid } from "nanoid";

const FilterDropdown = ({ param, options, localFilters, setLocalFilters }) => {
  const [searchParams] = useSearchParams();

  const paramsBrandName = useMemo(() => {
    if (searchParams.get(param)) {
      const lowercaseOptions = options.map((element) => element.toLowerCase());
      const index = lowercaseOptions.findIndex(
        (element) => element === searchParams.get(param).toLowerCase()
      );
      return index === -1 ? false : options[index];
    }
  }, [searchParams, options, param]);

  const [isBrandOpen, setIsBrandOpen] = useState(false);
  const [chosenOption, setChosenOption] = useState(
    searchParams.get(param) && paramsBrandName ? paramsBrandName : "Select brand"
  );

  const dropdownRef = useRef(null);
  const scrollToRef = useRef(null);
  const brandButton = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchParams.get(param) && paramsBrandName) {
      dispatch(setFilters(paramsBrandName));
      setChosenOption(paramsBrandName);
    } else {
      dispatch(setFilters(searchParams.get(param)));
      setChosenOption("Select brand");
    }

    return () => {
      dispatch(setFilters(null));
    };
  }, [dispatch, searchParams, paramsBrandName, param]);

  useEffect(() => {
    if (isBrandOpen && scrollToRef.current) {
      dropdownRef.current.scrollTop = scrollToRef.current.offsetTop - 14;
    }

    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        !brandButton.current.contains(e.target)
      ) {
        setIsBrandOpen(!isBrandOpen);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isBrandOpen]);

  const handleBrandClick = (e) => {
    if (e.target.innerText !== chosenOption) {
      setChosenOption(e.target.innerText);
      setLocalFilters({ ...localFilters, brand: e.target.innerText });
    }

    setIsBrandOpen(!isBrandOpen);
  };

  return (
    <BrandContainer>
      <p>Car brand</p>

      <SelectBtn
        onClick={() => {
          setIsBrandOpen(!isBrandOpen);
        }}
        isBrandOpen={isBrandOpen}
        ref={brandButton}
      >
        <span>{chosenOption}</span>
        <IconChevron />
      </SelectBtn>

      {isBrandOpen && (
        <BrandList>
          <div ref={dropdownRef}>
            <ul>
              {options.map((brand) => (
                <BrandItem
                  onClick={handleBrandClick}
                  chosenOption={chosenOption}
                  brand={brand}
                  key={nanoid()}
                  ref={chosenOption === brand ? scrollToRef : null}
                >
                  {brand}
                </BrandItem>
              ))}
            </ul>
          </div>
        </BrandList>
      )}
    </BrandContainer>
  );
};

FilterDropdown.propTypes = { options: PropTypes.array.isRequired };

export default FilterDropdown;
