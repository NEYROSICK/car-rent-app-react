import React from "react";
import { HeaderSection, LogoLink, Nav, NavList } from "./header.styled";
import { NavLink } from "react-router-dom";
import Container from "../container/Container";
import Logo from "../../../images/logo2.png";

const Header = () => {
  return (
    <HeaderSection>
      <Container>
        <h1>
          <LogoLink to="/">
            <img src={Logo} alt="Carspace Logo" />
            <span>Carspace</span>
          </LogoLink>
        </h1>
        <Nav>
          <NavList>
            <li>
              <NavLink to="/catalog">Catalog</NavLink>
            </li>
            <li>
              <NavLink to="/favorites">Favorites</NavLink>
            </li>
          </NavList>
        </Nav>
      </Container>
    </HeaderSection>
  );
};

export default Header;
