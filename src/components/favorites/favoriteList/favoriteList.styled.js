import styled from "@emotion/styled";

export const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 29px;
`;

export const Message = styled.p`
  height: calc(100vh - 193.6px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  font-size: 18px;
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

export const BtnPagination = styled.button`
  width: 210px;
  height: 48px;

  display: block;
  margin: 0 auto;
  margin-top: 50px;

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  color: var(--clr-brand);

  background: transparent;
  border: 2px solid transparent;
  border-radius: 12px;
  cursor: pointer;
  transition: border-color 0.3s;

  &:hover {
    border-color: var(--clr-brand);
  }
`;
