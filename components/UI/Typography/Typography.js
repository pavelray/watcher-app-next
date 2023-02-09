import React from "react";
import { style } from "./Typography.styles";

const Heading = ({ text }) => {
  return (
    <h1 className="heading">
      {text} <style jsx>{style}</style>
    </h1>
  );
};

const SubHeading = ({ text }) => {
  return (
    <h1 className="heading">
      {text}
      <style jsx>{style}</style>
    </h1>
  );
};

export { Heading, SubHeading };
