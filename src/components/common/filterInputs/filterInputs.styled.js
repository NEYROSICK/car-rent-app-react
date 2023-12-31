import styled from "@emotion/styled";

export const Title = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: var(--clr-secondary-lt);
  margin-bottom: 8px;
`;

export const FilterInputContainer = styled.div`
  display: flex;
  width: 320px;
  height: 48px;

  background-color: var(--clr-bcg-filter);
  border-radius: 14px;
  cursor: pointer;
`;

export const FilterInputBlock = styled.div`
  position: relative;

  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;

  & > span {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    height: 100%;
    left: 18px;
  }

  &:first-of-type > input {
    border-right: 0.9px solid var(--clr-input-decor);
    padding-left: 74px;
  }
`;

export const FilterInput = styled.input`
  display: block;
  position: relative;
  padding: 12px 18px 12px 52px;
  width: 160px;
  height: 48px;

  font: inherit;
  line-height: inherit;

  border: none;
  background: none;

  &:focus {
    outline: none;
  }
`;
