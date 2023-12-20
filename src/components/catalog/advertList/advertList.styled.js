import styled from "@emotion/styled";

export const AdvertListSection = styled.section`
  display: ${({ areAllLoaded }) => (areAllLoaded ? "block" : "none")};
  padding-bottom: 50px;
`;

export const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 29px;
  align-items: stretch;
`;
