import React from "react";
import PropTypes from "prop-types";
import { ButtonStyled } from "./button.styled";

const Button = ({ children, variant, href, handleClick }) => {
  const Component = href ? "a" : "button";

  return (
    <ButtonStyled variant={variant} as={Component} href={href} onClick={handleClick}>
      {children}
    </ButtonStyled>
  );
};

Button.propTypes = { variant: PropTypes.string.isRequired };

export default Button;
