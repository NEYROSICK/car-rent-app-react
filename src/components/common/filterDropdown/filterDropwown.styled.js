import styled from "@emotion/styled";

export const ParamContainer = styled.div`
  position: relative;

  & > p {
    font-size: 14px;
    font-weight: 500;
    color: var(--clr-secondary-lt);
    margin-bottom: 8px;
  }
`;

export const SelectBtn = styled.button`
  ${({ parameter }) => parameter === "brand" && `width: 224px;`}
  ${({ parameter }) => parameter === "price" && `width: 125px;`}

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 14px 18px;

  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;

  border: none;
  border-radius: 14px;
  background: #f7f7fb;
  cursor: pointer;

  & > span {
    flex-grow: 1;
    text-align: left;
  }

  & > svg {
    width: var(--svg-size-chevron);
    height: var(--svg-size-chevron);
    transform: rotate(${({ isBrandOpen }) => (isBrandOpen ? "180deg" : "0deg")});
    transition: transform 0.3s cubic-bezier(0.65, 1.79, 0.78, 1.02);
  }
`;

export const OptionList = styled.div`
  position: absolute;
  top: 80px;
  left: 0;

  ${({ parameter }) =>
    parameter === "brand" &&
    `width: 224px;
    height: 272px;`}

  ${({ parameter }) =>
    parameter === "price" &&
    `width: 125px;    
    height: 190px;`}

  z-index: 2;

  padding: 14px 8px;

  font-size: 16px;
  font-weight: 500;
  line-height: 18.6px;
  color: var(--clr-filter-inactive);

  border: 1px solid rgba(18, 20, 23, 0.05);
  border-radius: 14px;
  background-color: var(--clr-bcg);
  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);

  & > div {
    width: 100%;
    height: 99%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0);
    transition: background-color 0.3s;

    &:hover {
      background-color: var(--clr-bcg-scrollbar);
    }

    &::-webkit-scrollbar {
      width: var(--scrollbar-filter-width);
    }

    /* Track */
    &::-webkit-scrollbar-track {
      background: var(--clr-bcg);
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background-color: inherit;
      border-radius: var(--scrollbar-border-radius);
    }

    & > ul {
      display: flex;
      flex-direction: column;
      background-color: var(--clr-bcg);
    }
  }
`;

export const OptionItem = styled.li`
  ${({ parameter }) => parameter === "brand" && `width: 192px;`}
  ${({ parameter }) => parameter === "price" && `width: 92px;`}

  padding: 4px 10px;
  color: ${({ parameter, chosenOption }) =>
    parameter !== chosenOption ? "inherit" : "var(--clr-primary)"};
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    color: var(--clr-primary);
    background-color: var(--clr-bcg-scrollbar);
  }
`;
