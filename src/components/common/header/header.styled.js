import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const HeaderSection = styled.header`
  background-color: var(--clr-bcg-header);
  color: var(--clr-primary-inv);
  padding: 20px 0;
`;

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  font-family: "Afacad", sans-serif;
  font-weight: 500;
  font-size: 40px;
  line-height: normal;
`;

export const LogoLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 8px;

  & svg {
    width: var(--svg-size-logo);
    height: var(--svg-size-logo);
    fill: var(--clr-primary-inv);
  }

  & > span {
    display: flex;
    align-self: flex-start;
    line-height: 42px;
    letter-spacing: -1px;
  }
`;

export const Nav = styled.nav`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
`;

export const NavList = styled.ul`
  width: 380px;
  display: flex;
  align-items: center;

  font-size: 16px;
  font-weight: 600;
  line-height: 20px;

  & > li > a {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 16px 32px;
    gap: 0px;

    border: 1px solid var(--clr-bcg);
    border-radius: 14px;
    transition: background-color 0.3s, border-color 0.3s, color 0.3s, gap 0.3s;

    & > svg {
      width: 0;
      height: var(--svg-size-chevron);
      fill: currentColor;
      transition: width 0.3s;
    }
  }

  & > li:first-of-type {
    padding-right: 9px;
  }

  & > li:nth-of-type(2) {
    padding-left: 9px;
  }

  & > li:hover > a {
    gap: 10px;
    background-color: var(--clr-brand);
    border-color: var(--clr-brand);

    & > svg {
      width: var(--svg-size-chevron);
    }
  }

  & > li > a.active {
    background-color: var(--clr-bcg);
    border-color: var(--clr-bcg);
    color: var(--clr-primary);
  }

  & > li {
    flex-grow: 1;
    transition: flex-grow 0.3s;
  }

  & > li:hover {
    flex-grow: 2;
  }
`;
