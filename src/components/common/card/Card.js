import { useState } from "react";
import PropTypes from "prop-types";
import Modal from "../../common/modal/Modal";
import { createPortal } from "react-dom";
import { CardContainer, FavoriteBtn } from "./card.styled";
import IconHeart from "../../common/icons/IconHeart";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../../redux/favoriteSlice";
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRoot = document.getElementById("modal");
  const dispatch = useDispatch();
  const favorites = useSelector(getFavorites);

  const handleFavoriteToggle = (item) => {
    dispatch(toggleFavorite(item));
  };

  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <CardContainer>
      <FavoriteBtn
        favorites={favorites}
        item={item}
        onClick={() => {
          handleFavoriteToggle(item);
        }}
      >
        <IconHeart />
      </FavoriteBtn>

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

      <Button onClick={handleModalOpen} variant="primary">
        Learn more
      </Button>

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
