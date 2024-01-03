import { useEffect } from "react";
import PropTypes from "prop-types";
import {
  AdditionalInfo,
  Backdrop,
  Brand,
  BtnClose,
  ConditionList,
  Description,
  Img,
  ImgContainer,
  InfoContainer,
  ModalContainer,
  ModalSecondaryTitle,
  ModalTitle,
} from "./modal.styled";
import { Model } from "../card/card.styled";
import { nanoid } from "nanoid";
import Button from "../button/Button";
import IconCross from "../icons/IconCross";

const Modal = ({ item, isModalOpen, setIsModalOpen }) => {
  const {
    largeImg,
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
    mileage,
    rentalPrice,
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
        <BtnClose onClick={handleCloseClick}>
          <IconCross />
        </BtnClose>
        <ImgContainer>
          <Img src={largeImg} alt={brand} width={461} height={248} />
          <Button variant="rental" href="tel:+380730000000">
            Rental car
          </Button>
        </ImgContainer>
        <InfoContainer>
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

          <ModalSecondaryTitle>Rental Conditions: </ModalSecondaryTitle>

          <ConditionList>
            {rentalConditions.split("\n").map((element, index) => {
              if (index === 0) {
                return (
                  <li key={nanoid()}>
                    {element.split(" ")[0] + " "}
                    {element.split(" ")[1]}
                    <Brand> {element.split(": ")[1]}</Brand>
                  </li>
                );
              } else if (element.includes("Security")) {
                return <li key={nanoid()}>{element.replace("and insurance", "")}</li>;
              } else {
                return <li key={nanoid()}>{element}</li>;
              }
            })}

            <li>
              Mileage: <Brand>{Number(mileage).toLocaleString()}</Brand>
            </li>
            <li>
              Price: <Brand>{rentalPrice}</Brand>
            </li>
          </ConditionList>

          <ModalSecondaryTitle>Accessories and functionalities:</ModalSecondaryTitle>

          <AdditionalInfo accessories>
            {accessories.map((element, index) => {
              return <li key={nanoid()}>{element}</li>;
            })}
            {functionalities.map((element, index) => {
              return <li key={nanoid()}>{element}</li>;
            })}
          </AdditionalInfo>
        </InfoContainer>
      </ModalContainer>
    </Backdrop>
  );
};

Modal.propTypes = { item: PropTypes.object.isRequired };

export default Modal;
