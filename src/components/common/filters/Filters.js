import { useEffect, useRef, useState } from "react";
import IconChevron from "../icons/IconChevron";
import { BrandContainer, BrandItem, BrandList, FiltersList, SelectBtn } from "./filters.styled";
import brands from "../../../assets/carBrands.json";
import { useDispatch, useSelector } from "react-redux";
import { getBrand } from "../../../redux/selectors";
import { changeFilter } from "../../../redux/filterSlice";
import { nanoid } from "nanoid";

const Filters = () => {
  const [isBrandOpen, setIsBrandOpen] = useState(false);
  const [clickedOption, setClickedOption] = useState("");
  const dropdownRef = useRef(null);
  const scrollToRef = useRef(null);
  const brandButton = useRef(null);

  const brand = useSelector(getBrand);
  const dispatch = useDispatch();

  const handleBrandClick = (e) => {
    if (e.target.innerText !== clickedOption) {
      dispatch(changeFilter(e.target.innerText));
      setClickedOption(e.target.innerText);
    }

    setIsBrandOpen(!isBrandOpen);
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
          <span>{brand}</span>
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
    </FiltersList>
  );
};

export default Filters;
