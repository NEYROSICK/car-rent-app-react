import styled from "@emotion/styled";

export const Main = styled.main`
  padding: 50px 0;
  min-height: calc(100% - 92px);
`;

export const BtnPagination = styled.button`
  width: 210px;
  height: 48px;

  display: ${({ areAllLoaded }) => (areAllLoaded ? "block" : "none")};
  margin: 0 auto;

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
