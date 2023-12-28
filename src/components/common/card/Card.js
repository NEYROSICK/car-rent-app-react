import { useState } from "react";
import PropTypes from "prop-types";
import Modal from "../../common/modal/Modal";
import { createPortal } from "react-dom";
import {
  AdditionalInfo,
  CarImg,
  CardContainer,
  CardTitle,
  FavoriteBtn,
  ImgContainer,
  Model,
  TitleContainer,
} from "./card.styled";
import IconHeart from "../../common/icons/IconHeart";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../../redux/slices/favoriteSlice";
import { getFavorites } from "../../../redux/selectors";
import Button from "../../common/button/Button";

const Card = ({ item }) => {
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
  } = item;

  const modalRoot = document.getElementById("modal");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const favorites = useSelector(getFavorites);
  const dispatch = useDispatch();

  const handleFavoriteToggle = (id) => {
    dispatch(toggleFavorite(id));
  };

  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <CardContainer>
      <FavoriteBtn
        id={id}
        favorites={favorites}
        onClick={() => {
          handleFavoriteToggle(id);
        }}
      >
        <IconHeart />
      </FavoriteBtn>

      <ImgContainer>
        <CarImg src={img} alt={brand} width={274} height={274} />
      </ImgContainer>
      <TitleContainer>
        <CardTitle>
          {brand}
          <Model> {model}</Model>, {year}
        </CardTitle>
        <span>{rentalPrice}</span>
      </TitleContainer>

      <AdditionalInfo>
        <li>{address.split(", ")[1]}</li>
        <li>{address.split(", ")[2]}</li>
        <li>{rentalCompany}</li>
        <li>{type}</li>
        <li>{brand}</li>
        <li>{id}</li>
        <li>{accessories[2].split(" ")[0]}</li>
      </AdditionalInfo>

      <Button onClick={handleModalOpen}>Learn more</Button>

      {isModalOpen &&
        createPortal(
          <Modal item={item} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />,
          modalRoot
        )}
    </CardContainer>
  );
};

Card.propTypes = { item: PropTypes.object.isRequired };

export default Card;