import styled from "@emotion/styled";

export const BtnPagination = styled.button`
  width: 180px;
  height: 44px;

  display: block;
  margin: 0 auto 50px auto;
  /* margin-bottom: 50px; */

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  color: var(--clr-brand);

  background: transparent;
  border: 2px solid transparent;
  border-radius: 38px;
  cursor: pointer;
  transition: border-color 0.3s;

  &:hover {
    border-color: var(--clr-brand);
  }
`;
