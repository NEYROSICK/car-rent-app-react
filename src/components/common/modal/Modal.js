import { useEffect } from "react";
import PropTypes from "prop-types";
import { Backdrop, BtnClose, ModalContainer } from "./modal.styled";

const Modal = ({ advert, isModalOpen, setIsModalOpen }) => {
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
        <h3>
          {brand}
          <span> {model}</span>, {year}
        </h3>
      </ModalContainer>
    </Backdrop>
  );
};

Modal.propTypes = { advert: PropTypes.object.isRequired };

export default Modal;
