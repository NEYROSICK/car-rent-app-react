import styled from "@emotion/styled";
import wallpaper from "../../images/wallpaper.jpg";
import { Link } from "react-router-dom";

export const Main = styled.main`
  background-image: url(${wallpaper});
  background-size: cover;
  background-position: center;
  height: calc(100% - 92px);
  font-size: 18px;
`;

export const MainTitle = styled.h2`
  font-size: 84px;
  line-height: 84px;
  text-transform: uppercase;
  padding-top: 80px;
  margin-bottom: 10px;
  font-family: "Archivo Black", sans-serif;
  text-align: center;
`;

export const MainTagline = styled.h3`
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 10px;
  text-transform: uppercase;
  margin-bottom: 30px;
  font-family: "Archivo Black", sans-serif;
  text-align: center;
`;

export const MainDescr = styled.p`
  color: var(--clr-brand);
  font-weight: 500;
  font-family: "Afacad", sans-serif;
`;

export const MainBtn = styled(Link)`
  width: 200px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  font-weight: 600;
  font-size: 16px;
  color: var(--clr-primary-inv);

  background: none;
  border: 2px solid var(--clr-bcg);
  border-radius: 14px;

  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: white;
    color: var(--clr-primary);
  }
`;
