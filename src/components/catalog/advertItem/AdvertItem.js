import React from "react";
import PropTypes from "prop-types";

const AdvertItem = ({ advert }) => {
  return (
    <li>
      <img src={advert.img} alt={advert.make} width={200} />
      <p>{advert.make}</p>
    </li>
  );
};

AdvertItem.propTypes = { advert: PropTypes.object.isRequired };

export default AdvertItem;
