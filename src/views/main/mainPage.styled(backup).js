import styled from "@emotion/styled";
import wallpaper from "../../images/wallpaper.jpg";
import { Link } from "react-router-dom";

export const Main = styled.main`
  background-image: url(${wallpaper});
  background-size: cover;
  background-position: center;
  height: calc(100% - 93.6px);
  font-size: 18px;
`;

export const Section = styled.section`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;
  padding: 30px 0;
`;

// export const MainContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
// `;

export const TitleContainer = styled.div`
  padding: 52px 0;
  width: 100vw;
  backdrop-filter: blur(18px);
  text-shadow: 1px 1px 1px #7d7d7d;
`;

export const MainTitle = styled.h2`
  font-size: 84px;
  line-height: 84px;
  text-transform: uppercase;
  margin-bottom: 10px;
  font-family: "Archivo Black", sans-serif;
  text-align: center;
`;

export const MainTagline = styled.p`
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 10px;
  text-transform: uppercase;
  font-family: "Archivo Black", sans-serif;
  text-align: center;
`;

export const MainDescr = styled.p`
  color: var(--clr-brand);
  font-weight: 500;
  font-family: "Afacad", sans-serif;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 80px;
`;

export const CatalogLink = styled(Link)`
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
