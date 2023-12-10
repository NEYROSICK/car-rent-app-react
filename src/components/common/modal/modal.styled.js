import styled from "@emotion/styled";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--clr-bcg-backdrop);
`;

export const ModalContainer = styled.div`
  position: relative;
  width: 541px;
  height: 752px;

  background-color: var(--clr-bcg);
`;

export const BtnClose = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;

  font-weight: bold;

  background: none;
  border: none;

  cursor: pointer;
`;
