import styled from "@emotion/styled";

const deepEqual = (obj1, obj2) => {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
};

export const CardContainer = styled.li`
  position: relative;
  width: 274px;
  align-self: flex-end;
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

    fill: ${({ favorites, item }) => {
      if (favorites === null) {
        return "transparent";
      }
      return favorites.some((favorite) => deepEqual(favorite, item))
        ? "var(--clr-brand)"
        : "transparent";
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
  align-self: flex-start;
  overflow: hidden;
  border-radius: 14px;
  margin-bottom: 14px;
`;

export const CarImg = styled.img`
  object-fit: cover;
`;

export const TitleContainer = styled.div`
  display: flex;
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
`;
