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

  padding: 40px;

  background-color: var(--clr-bcg);
  border-radius: 24px;
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

export const Img = styled.img`
  display: block;
  object-fit: cover;
  border-radius: 14px;
  margin-bottom: 14px;
`;

export const ModalTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: var(--clr-primary);
  margin-bottom: 8px;
`;

export const AdditionalInfo = styled.ul`
  width: 400px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 12px;
  row-gap: 4px;
  margin-bottom: 28px;
  color: var(--clr-secondary);
  margin-bottom: 14px;
`;

export const Description = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 24px;
`;

export const ModalSecondaryTitle = styled.h4`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 8px;

  ${({ accessories }) => accessories && `margin-bottom: 24px;`}
`;
