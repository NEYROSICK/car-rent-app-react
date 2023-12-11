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
    max-width: 136px;
    height: 48px;
  `}

  ${({ variant }) =>
    variant === "rental" &&
    `
    max-width: 168px;
  `}
`;
