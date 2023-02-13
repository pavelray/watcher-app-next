import React, { Fragment } from "react";
import { style } from "./Buttons.style";

const ButtonPrimary = ({ handleOnClick, text }) => {
  return (
    <Fragment>
      <button className="btn-primary" onClick={handleOnClick}>
        {text}
      </button>
      <style jsx>{style}</style>
    </Fragment>
  );
};

export { ButtonPrimary };
