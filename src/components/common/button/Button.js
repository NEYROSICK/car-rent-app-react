import React from "react";
import PropTypes from "prop-types";
import { ButtonStyled } from "./button.styled";

const Button = ({ children, variant, href }) => {
  const Component = href ? "a" : "button";

  return (
    <ButtonStyled variant={variant} as={Component} href={href}>
      {children}
    </ButtonStyled>
  );
};

Button.propTypes = { variant: PropTypes.string.isRequired };

export default Button;
