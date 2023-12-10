import { useState } from "react";
import IconChevron from "../icons/IconChevron";
import { BrandContainer, BrandList, FiltersList, SelectBtn } from "./filters.styled";
import brands from "../../../assets/carBrands.json";
import { useDispatch, useSelector } from "react-redux";
import { getBrand } from "../../../redux/selectors";
import { changeFilter } from "../../../redux/filterSlice";
import { nanoid } from "nanoid";

const Filters = () => {
  const [isBrandOpen, setIsBrandOpen] = useState(false);
  const brand = useSelector(getBrand);
  const dispatch = useDispatch();

  const handleBrandClick = (e) => {
    dispatch(changeFilter(e.target.innerText));
    setIsBrandOpen(!isBrandOpen);
  };

  return (
    <FiltersList>
      <BrandContainer>
        <p>Car brand</p>

        <SelectBtn
          onClick={() => {
            setIsBrandOpen(!isBrandOpen);
          }}
          isBrandOpen={isBrandOpen}
        >
          <span>{brand}</span>
          <IconChevron />
        </SelectBtn>
        {isBrandOpen && (
          <BrandList>
            <div>
              <ul>
                {brands.map((brand) => (
                  <li onClick={handleBrandClick} key={nanoid()}>
                    {brand}
                  </li>
                ))}
                {/* <li>Buick</li>
                <li>Volvo</li>
                <li>HUMMER</li>
                <li>Subaru</li>
                <li>Mitsubishi</li>
                <li>Nissan</li>
                <li>Lincoln</li>
                <li>GMC</li>
                <li>Hyundai</li>
                <li>MINI</li>
                <li>Bentley</li>
                <li>Mercedes-Benz</li>
                <li>Aston Martin</li>
                <li>Pontiac</li>
                <li>Lamborghini</li>
                <li>Audi</li>
                <li>BMW</li>
                <li>Chevrolet</li>
                <li>Mercedes-Benz</li>
                <li>Chrysler</li>
                <li>Kia</li>
                <li>Land</li> */}
              </ul>
            </div>
          </BrandList>
        )}
      </BrandContainer>
    </FiltersList>
  );
};

export default Filters;
