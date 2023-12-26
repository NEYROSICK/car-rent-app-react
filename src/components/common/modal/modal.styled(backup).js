import styled from "@emotion/styled";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--clr-bcg-backdrop);
`;

export const ModalContainer = styled.div`
  position: relative;
  width: 541px;

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

  padding: 0;
  margin: 0;
  font-weight: bold;

  background: none;
  border: none;
  cursor: pointer;

  svg {
    transition: transform 0.3s;
    pointer-events: none;
  }

  &:hover > svg {
    transform: rotate(180deg);
  }
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
  color: var(--clr-secondary);
  margin-bottom: 14px;

  & > li {
    position: relative;
  }

  & > li:not(:last-of-type)::after {
    content: "";
    position: absolute;
    top: 0;
    right: -6px;

    display: block;
    width: 0.9px;
    height: 16px;
    background-color: var(--clr-bcg-list-decor);
  }

  ${({ accessories }) =>
    accessories &&
    `margin-bottom: 24px; 
    width: auto;
    `}
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
`;

export const ConditionList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
  width: 388px;

  letter-spacing: -0.24px;

  & > li {
    padding: 7px 14px;
    border-radius: 35px;
    background-color: var(--clr-bcg-filter);
  }
`;

export const Brand = styled.span`
  font-weight: 600;
  color: var(--clr-brand);
`;
