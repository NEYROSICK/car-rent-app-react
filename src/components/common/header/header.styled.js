import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const HeaderSection = styled.header`
  background-color: var(--clr-bcg-header);
  color: var(--clr-primary-inv);
  padding: 20px;
`;

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  font-family: "Afacad", sans-serif;
  font-size: 32px;
  line-height: normal;
`;

export const LogoLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;

  & svg {
    width: var(--svg-size-logo);
    height: var(--svg-size-logo);
    fill: var(--clr-primary-inv);
  }
`;

export const Nav = styled.nav`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;

  font-size: 16px;
  font-weight: 600;
  line-height: 20px;

  & > li > a {
    display: flex;
    padding: 16px 32px;
    border-radius: 14px;
    transition: background-color 0.3s;
    gap: 10px;

    & > svg {
      width: 0;
      height: var(--svg-size-chevron);
      fill: currentColor;
      transition: width 0.3s;
    }

    &:hover {
      background-color: var(--clr-brand);
    }

    &:hover > svg {
      width: var(--svg-size-chevron);
    }
  }
`;
