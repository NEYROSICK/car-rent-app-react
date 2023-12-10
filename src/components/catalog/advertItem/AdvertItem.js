import { useState } from "react";
import PropTypes from "prop-types";
import Modal from "../../common/modal/Modal";
import { createPortal } from "react-dom";

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
  } = advert;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRoot = document.getElementById("modal");

  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

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

      <button onClick={handleModalOpen}>Learn more</button>

      {isModalOpen &&
        createPortal(
          <Modal advert={advert} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />,
          modalRoot
        )}
    </li>
  );
};

AdvertItem.propTypes = { advert: PropTypes.object.isRequired };

export default AdvertItem;
