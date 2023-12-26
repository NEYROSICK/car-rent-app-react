import { useEffect, useMemo, useRef, useState } from "react";
import IconChevron from "../icons/IconChevron";
import {
  BrandContainer,
  BrandItem,
  BrandList,
  FiltersContainer,
  FiltersList,
  SelectBtn,
} from "./filters.styled";
import brands from "../../../assets/carBrands.json";
import { useDispatch } from "react-redux";
import { setFilters } from "../../../redux/slices/filterSlice";
import { nanoid } from "nanoid";
import Button from "../button/Button";
import { useSearchParams } from "react-router-dom";

const Filters = () => {
  const [isBrandOpen, setIsBrandOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [chosenOption, setChosenOption] = useState("Select brand");

  const dropdownRef = useRef(null);
  const scrollToRef = useRef(null);
  const brandButton = useRef(null);
  const dispatch = useDispatch();

  const paramsBrandName = useMemo(() => {
    if (searchParams.get("brand")) {
      const lowercaseBrands = brands.map((element) => element.toLowerCase());
      const index = lowercaseBrands.findIndex(
        (element) => element === searchParams.get("brand").toLowerCase()
      );
      return index === -1 ? false : brands[index];
    }
  }, [searchParams]);

  useEffect(() => {
    if (searchParams.get("brand") && paramsBrandName) {
      dispatch(setFilters(paramsBrandName));
      setChosenOption(paramsBrandName);
    } else {
      setChosenOption("Select brand");
    }

    return () => {
      dispatch(setFilters(null));
    };
  }, [dispatch, searchParams, paramsBrandName]);

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
    }

    setIsBrandOpen(!isBrandOpen);
  };

  const handleSearchClick = () => {
    if (chosenOption !== "Select brand") {
      setSearchParams({ brand: chosenOption });
    }
  };
  return (
    <FiltersContainer>
      <FiltersList>
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
                  {brands.map((brand) => (
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
        <Button variant="search" onClick={handleSearchClick}>
          Search
        </Button>
      </FiltersList>
    </FiltersContainer>
  );
};

export default Filters;
