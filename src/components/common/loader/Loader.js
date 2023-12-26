import React from "react";
import { LoaderContainer } from "./loader.styled";
import { PuffLoader } from "react-spinners";

const Loader = ({ variant, size }) => {
  return (
    <LoaderContainer variant={variant}>
      <PuffLoader size={size} />
    </LoaderContainer>
  );
};

export default Loader;
