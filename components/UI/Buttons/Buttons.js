import React, { Fragment } from "react";
import { style } from "./Buttons.style";

const ButtonPrimary = ({ handleOnClick }) => {
  return (
    <Fragment>
      <button className="btn-primary" onClick={handleOnClick}>
        Watch Trailer
      </button>
      <style jsx>{style}</style>
    </Fragment>
  );
};

export { ButtonPrimary };
