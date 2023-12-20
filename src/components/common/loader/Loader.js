import React from "react";
import { LoaderContainer } from "./loader.styled";
import { PuffLoader } from "react-spinners";

const Loader = ({ size }) => {
  return (
    <LoaderContainer>
      <PuffLoader size={size} />
    </LoaderContainer>
  );
};

export default Loader;
