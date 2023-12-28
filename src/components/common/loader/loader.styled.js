import styled from "@emotion/styled";

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ variant, isFiltersShown }) =>
    (variant === "initialization" || Boolean(isFiltersShown)) &&
    `
    min-height: calc(100vh - 440px);
  `}

  ${({ variant, isFiltersShown }) =>
    variant === "favorites" &&
    !isFiltersShown &&
    ` 
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    pointer-events: none;
  `}

  ${({ variant }) =>
    variant === "pagination" &&
    `
    padding-top: 29px;
    margin-bottom: -21px;
  `}
`;
