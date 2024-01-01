import styled from "@emotion/styled";

export const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 29px;
`;

export const Message = styled.p`
  ${({ areFavoriteAdsSet }) =>
    areFavoriteAdsSet ? `min-height: calc(100vh - 420px);` : `height: calc(100vh - 193.6px);`}

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
  color: var(--clr-favorites-message);

  & > svg {
    fill: currentColor;
    width: 200px;
    height: 200px;
  }
`;
