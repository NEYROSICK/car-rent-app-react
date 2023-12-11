import { useEffect } from "react";
import PropTypes from "prop-types";
import {
  AdditionalInfo,
  Backdrop,
  BtnClose,
  Description,
  Img,
  ModalContainer,
  ModalSecondaryTitle,
  ModalTitle,
} from "./modal.styled";
import { Model } from "../card/card.styled";
import { nanoid } from "nanoid";
import Button from "../button/Button";

const Modal = ({ item, isModalOpen, setIsModalOpen }) => {
  const {
    img,
    make: brand,
    model,
    year,
    fuelConsumption,
    address,
    engineSize,
    type,
    id,
    description,
    accessories,
    functionalities,
    rentalConditions,
  } = item;

  const handleCloseClick = (e) => {
    if (e.currentTarget === e.target) {
      setIsModalOpen(!isModalOpen);
    }
  };

  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.code === "Escape") {
        setIsModalOpen(!isModalOpen);
      }
    };

    window.addEventListener("keydown", handleKeydown);
    document.body.style.overflowY = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeydown);
      document.body.style.overflowY = "auto";
    };
  }, [isModalOpen, setIsModalOpen]);

  return (
    <Backdrop onClick={handleCloseClick}>
      <ModalContainer>
        <BtnClose onClick={handleCloseClick}>X</BtnClose>
        <Img src={img} alt={brand} width={461} height={248} />
        <ModalTitle>
          {brand}
          <Model> {model}</Model>, {year}
        </ModalTitle>
        <AdditionalInfo>
          <li>{address.split(", ")[1]}</li>
          <li>{address.split(", ")[2]}</li>
          <li>Id: {id}</li>
          <li>Year: {year}</li>
          <li>Type: {type}</li>
          <li>Fuel Consumption: {fuelConsumption}</li>
          <li>Engine Size: {engineSize}</li>
        </AdditionalInfo>
        <Description>{description}</Description>

        <ModalSecondaryTitle>Accessories and functionalities:</ModalSecondaryTitle>

        <AdditionalInfo accessories>
          {accessories.map((element) => (
            <li key={nanoid}>{element}</li>
          ))}
          {functionalities.map((element) => (
            <li key={nanoid}>{element}</li>
          ))}
        </AdditionalInfo>

        <ModalSecondaryTitle>Rental Conditions: </ModalSecondaryTitle>

        <ul>
          {rentalConditions.split("\n").map((element) => (
            <li key={nanoid}>{element}</li>
          ))}
          <li>Mileage: </li>
          <li>Price</li>
        </ul>

        <Button variant="rental" href="tel:+380730000000">
          Rental car
        </Button>
      </ModalContainer>
    </Backdrop>
  );
};

Modal.propTypes = { item: PropTypes.object.isRequired };

export default Modal;
