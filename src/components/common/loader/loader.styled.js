import styled from "@emotion/styled";

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ variant }) =>
    variant === "initialization" &&
    `
    min-height: calc(100vh - 520px);
  `}

  ${({ variant }) =>
    variant === "pagination" &&
    `
    padding-top: 29px;
    margin-bottom: -21px;
  `}
`;
