import React from "react";
import PropTypes from "prop-types";
import { ButtonStyled } from "./button.styled";

const Button = ({ children, variant, href, onClick, areLocalFiltersSet }) => {
  const Component = href ? "a" : "button";

  return (
    <ButtonStyled
      variant={variant}
      as={Component}
      href={href}
      onClick={onClick}
      areLocalFiltersSet={areLocalFiltersSet}
    >
      {children}
    </ButtonStyled>
  );
};

Button.propTypes = { variant: PropTypes.string };

export default Button;
