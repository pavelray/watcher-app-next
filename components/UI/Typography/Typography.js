import React from "react";
import { style } from "./Typography.styles";

const Heading = ({ text }) => {
  return (
    <div className="heading">
      {text} <style jsx>{style}</style>
    </div>
  );
};

const SubHeading = ({ text }) => {
  return (
    <div className="heading">
      {text}
      <style jsx>{style}</style>
    </div>
  );
};

export { Heading, SubHeading };
