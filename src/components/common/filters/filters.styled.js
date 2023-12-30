import styled from "@emotion/styled";

export const FiltersContainer = styled.div`
  position: relative;
  padding-bottom: 50px;
  transition: transform 0.3s;
  ${({ areLocalFiltersSet }) => areLocalFiltersSet && `transform: translateX(-33px);`}
  z-index: 2;
`;

export const FiltersList = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  gap: 18px;
`;

export const ButtonContainer = styled.div`
  position: relative;
`;
