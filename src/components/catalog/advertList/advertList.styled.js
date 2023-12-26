import styled from "@emotion/styled";

export const ListSection = styled.div`
  /* visibility: ${({ areAllLoaded }) => (areAllLoaded ? "visible" : "hidden")};
  opacity: ${({ areAllLoaded }) => (areAllLoaded ? "1" : "0")}; */
  transition: visibility 0.3s, opacity 0.3s;
`;

export const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 29px;
  align-items: stretch;
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
