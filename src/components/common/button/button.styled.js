import styled from "@emotion/styled";

export const ButtonStyled = styled.button`
  width: 100%;
  height: 44px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: var(--clr-primary-inv);

  border: none;
  border-radius: 12px;
  background-color: var(--clr-brand);

  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--clr-hover);
  }

  ${({ variant }) =>
    variant === "search" &&
    `
    position: relative;
    width: 136px;
    height: 48px;
    z-index: 1;
  `}

  ${({ variant }) =>
    variant === "close" &&
    `
    position: absolute;
    top: 0;
    right: 1px;
    width: 48px;
    height: 48px;
    background-color: var(--clr-brand-red);
    z-index: 0;
    transition: transform 0.5s cubic-bezier(.17,1.26,.54,1.19), background-color 0.3s;
    
    & > svg {
      width: 20px;
      height: 20px;
      fill: var(--clr-primary-inv);
      transition: transform 0.3s cubic-bezier(0.65, 1.79, 0.78, 1.02);

    }

    &:hover {
      background-color: var(--clr-hover-red);

      & > svg {
        transform: rotate(180deg) scale(1.2);
      }
    }
  `}

  ${({ areLocalFiltersSet }) => areLocalFiltersSet && `transform: translateX(66px);`}


  ${({ variant }) =>
    variant === "rental" &&
    `
    max-width: auto;
  `}
`;
