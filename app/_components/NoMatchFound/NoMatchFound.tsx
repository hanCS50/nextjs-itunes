import React from "react";
import { NoMatch } from "./NoMatchFound.styles";

type NoMatchProps = {
  message: string;
};

const NoMatchFound = ({ message }: NoMatchProps) => {
  return <NoMatch>{message}</NoMatch>;
};

export default NoMatchFound;
