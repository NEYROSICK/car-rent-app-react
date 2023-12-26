import { useEffect, useState } from "react";
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
import { getFavorites, getIsLoading } from "../../../redux/selectors";
import Button from "../../common/button/Button";
import imgPlaceholder from "../../../images/wallpaper.jpg";
import axios from "axios";
import { nanoid } from "nanoid";

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
  const [imagePath, setImagePath] = useState(imgPlaceholder);
  const modalRoot = document.getElementById("modal");
  const dispatch = useDispatch();
  const favorites = useSelector(getFavorites);

  useEffect(() => {
    const checkUrlValidity = async () => {
      try {
        const data = await axios.get(img);
        setImagePath(data.config.url);
      } catch (error) {
        setImagePath(imgPlaceholder);
      }
    };

    checkUrlValidity();
  }, [img, dispatch]);

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

      <ImgContainer>
        <CarImg src={imagePath} alt={brand} width={274} height={274} />
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
          <Modal
            juice={nanoid()}
            item={item}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />,
          modalRoot
        )}
    </CardContainer>
  );
};

Card.propTypes = { item: PropTypes.object.isRequired };

export default Card;
