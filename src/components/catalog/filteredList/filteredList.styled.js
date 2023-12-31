import styled from "@emotion/styled";

export const Message = styled.p`
  /* height: calc(100vh - 317.6px); */
  min-height: calc(100vh - 440px);

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
