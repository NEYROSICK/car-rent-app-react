import styled from "@emotion/styled";
import backgroundPattern from "../../images/background-pattern.png";

export const Main = styled.main`
  background-image: url(${backgroundPattern});
  background-color: var(--clr-bcg-header);
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;
  height: calc(100% - 93.6px);
  font-size: 18px;
`;

export const Section = styled.section`
  position: relative;
  height: 100%;
  padding: 30px 0;
`;

export const Img = styled.img`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-200px);
`;

export const MainContainer = styled.div`
  min-height: calc(100% - 93.6px);
  display: flex;
  align-items: center;
`;

export const TitleContainer = styled.div`
  padding: 52px 0;
  width: 100vw;
  backdrop-filter: blur(18px);
  text-shadow: 1px 1px 1px #7d7d7d;
`;

export const MainTitle = styled.h2`
  width: 700px;
  font-size: 64px;
  line-height: 74px;
  font-family: "Archivo Black", sans-serif;
  color: var(--clr-primary-inv);
  margin-bottom: 40px;
`;

export const MainTagline = styled.p`
  width: 450px;
  font-size: 18px;
  line-height: 28px;
  color: var(--clr-secondary-lt);
  margin-bottom: 40px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const BrandColor = styled.span`
  color: var(--clr-brand);
`;
