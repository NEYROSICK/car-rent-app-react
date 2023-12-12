import { useEffect, useRef, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { getAdCount } from "../../../redux/selectors";
import { setFilter } from "../../../redux/filterSlice";
import { nanoid } from "nanoid";
import Button from "../button/Button";
import { fetchAdverts } from "../../../redux/operations";
import { defaultLimit } from "../../../redux/constants";
import Container from "../container/Container";

const Filters = () => {
  const [isBrandOpen, setIsBrandOpen] = useState(false);
  const [clickedOption, setClickedOption] = useState("Select brand");
  const dropdownRef = useRef(null);
  const scrollToRef = useRef(null);
  const brandButton = useRef(null);

  const dispatch = useDispatch();
  const count = useSelector(getAdCount);

  const handleBrandClick = (e) => {
    if (e.target.innerText !== clickedOption) {
      setClickedOption(e.target.innerText);
    }

    setIsBrandOpen(!isBrandOpen);
  };

  const handleSearchClick = () => {
    if (count === defaultLimit && clickedOption !== "Select brand") {
      dispatch(fetchAdverts({}));
    }
    if (clickedOption !== "Select brand") {
      dispatch(setFilter(clickedOption));
    }
  };

  useEffect(() => {
    if (isBrandOpen && scrollToRef.current) {
      dropdownRef.current.scrollTop = scrollToRef.current.offsetTop - 14;
    }
  }, [isBrandOpen]);

  useEffect(() => {
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

  return (
    <FiltersContainer>
      <Container>
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
              <span>{clickedOption}</span>
              <IconChevron />
            </SelectBtn>

            {isBrandOpen && (
              <BrandList>
                <div ref={dropdownRef}>
                  <ul>
                    {brands.map((brand) => (
                      <BrandItem
                        onClick={handleBrandClick}
                        clickedOption={clickedOption}
                        brand={brand}
                        key={nanoid()}
                        ref={clickedOption === brand ? scrollToRef : null}
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
      </Container>
    </FiltersContainer>
  );
};

export default Filters;
