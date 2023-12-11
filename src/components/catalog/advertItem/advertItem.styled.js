import styled from "@emotion/styled";

export const AdvertCard = styled.li`
  position: relative;
`;

export const FavoriteBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  width: var(--svg-size-heart);
  height: var(--svg-size-heart);

  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;

  & > svg {
    width: 100%;
    height: 100%;
    stroke: var(--clr-brand);
    fill: ${({ favorites, advert }) =>
      !favorites.includes(advert) ? "transparent" : "var(--clr-brand)"};
    transition: scale 0.3s, fill 0.3s;
  }

  &:hover > svg {
    scale: 1.2;
  }

  &:active > svg {
    scale: 0.9;
  }
`;
