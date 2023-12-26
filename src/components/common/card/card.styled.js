import styled from "@emotion/styled";

export const CardContainer = styled.li`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 274px;

  div > img {
    transition: transform 0.3s;
  }

  &:hover div > img {
    transform: scale(1.1);
  }
`;

export const FavoriteBtn = styled.button`
  position: absolute;
  z-index: 1;
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

    fill: ${({ favorites, id }) => {
      if (favorites === null) {
        return "transparent";
      }
      return favorites.includes(id) ? "var(--clr-brand)" : "transparent";
    }};

    transition: scale 0.3s, fill 0.3s;
  }

  &:hover > svg {
    scale: 1.2;
  }

  &:active > svg {
    scale: 0.9;
  }
`;

export const ImgContainer = styled.div`
  width: 274px;
  height: 274px;
  overflow: hidden;
  border-radius: 14px;
  margin-bottom: 14px;
`;

export const CarImg = styled.img`
  object-fit: cover;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-grow: 1;
  margin-bottom: 8px;

  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: var(--clr-primary);

  & > h3 {
    font-size: inherit;
    font-weight: inherit;
  }
`;

export const CardTitle = styled.h3`
  flex-grow: 1;
`;

export const Model = styled.span`
  color: var(--clr-brand);
`;

export const AdditionalInfo = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 12px;
  row-gap: 4px;
  margin-bottom: 28px;
  color: var(--clr-secondary);

  & > li {
    position: relative;
  }

  & > li:not(:last-child)::after {
    content: "";
    position: absolute;
    top: 0;
    right: -6px;

    display: block;
    width: 0.9px;
    height: 16px;
    background-color: var(--clr-bcg-list-decor);
  }
`;
