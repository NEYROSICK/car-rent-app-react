import React from "react";
import PropTypes from "prop-types";
import { ButtonStyled } from "./button.styled";
import { Link } from "react-router-dom";

const Button = ({ children, variant, href, onClick, areLocalFiltersSet, to }) => {
  let Component = href ? "a" : "button";
  if (to) {
    Component = Link;
  }
  if (variant === "close") {
    return (
      <ButtonStyled
        variant={variant}
        as={Component}
        to={to}
        href={href}
        onClick={onClick}
        areLocalFiltersSet={areLocalFiltersSet}
      >
        {children}
      </ButtonStyled>
    );
  } else {
    return (
      <ButtonStyled variant={variant} as={Component} to={to} href={href} onClick={onClick}>
        {children}
      </ButtonStyled>
    );
  }
};

Button.propTypes = { variant: PropTypes.string };

export default Button;
