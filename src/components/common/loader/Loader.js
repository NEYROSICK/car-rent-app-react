import React from "react";
import { LoaderContainer } from "./loader.styled";
import { PuffLoader } from "react-spinners";

const Loader = ({ variant, size, isFiltersShown }) => {
  return (
    <LoaderContainer variant={variant} isFiltersShown={isFiltersShown}>
      <PuffLoader size={size} />
    </LoaderContainer>
  );
};

export default Loader;
