import React from "react";
import PropTypes from "prop-types";

const AdvertItem = ({ advert }) => {
  const {
    img,
    make: brand,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    id,
    accessories,
    functionalities,
  } = advert;

  return (
    <li>
      <img src={img} alt={brand} width={200} />
      <div>
        <h3>
          {brand}
          <span> {model}</span>, {year}
        </h3>
        <span>{rentalPrice}</span>
      </div>
      <ul>
        <li>{address.split(", ")[1]}</li>
        <li>{address.split(", ")[2]}</li>
        <li>{rentalCompany}</li>
        <li>Premium {type}</li>
        <li>{brand}</li>
        <li>{id}</li>
        <li>{accessories[2]}</li>
      </ul>
      <button>Learn more</button>
    </li>
  );
};

AdvertItem.propTypes = { advert: PropTypes.object.isRequired };

export default AdvertItem;
