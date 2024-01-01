import { HeaderContainer, HeaderSection, LogoLink, Nav, NavList, Title } from "./header.styled";
import { NavLink } from "react-router-dom";
import Container from "../container/Container";
import Logo from "../icons/Logo";
import IconCar from "../icons/IconCar";
import IconHeart from "../icons/IconHeart";

const Header = () => {
  return (
    <HeaderSection>
      <Container>
        <HeaderContainer>
          <Title>
            <LogoLink to="/">
              <Logo />
              <span>carspace</span>
            </LogoLink>
          </Title>
          <Nav>
            <NavList>
              <li>
                <NavLink to="/catalog">
                  Catalog <IconCar />
                </NavLink>
              </li>
              <li>
                <NavLink to="/favorites">
                  Favorites <IconHeart />
                </NavLink>
              </li>
            </NavList>
          </Nav>
        </HeaderContainer>
      </Container>
    </HeaderSection>
  );
};

export default Header;
