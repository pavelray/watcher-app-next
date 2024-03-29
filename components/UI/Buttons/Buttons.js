import Link from "next/link";
import React, { Fragment } from "react";
import { style } from "./Buttons.style";

const ButtonPrimary = ({ handleOnClick, text }) => {
  return (
    <Fragment>
      <button className="btn btn-primary" onClick={handleOnClick}>
        {text}
      </button>
      <style jsx>{style}</style>
    </Fragment>
  );
};

const ButtonSecondary = ({ handleOnClick, text }) => {
  return (
    <Fragment>
      <button className="btn btn-secondary" onClick={handleOnClick}>
        {text}
      </button>
      <style jsx>{style}</style>
    </Fragment>
  );
};

const ButtonSecondaryLink = ({ text, link }) => {
  return (
    <Fragment>
      <button className="btn btn-secondary">
        <Link href={link}>{text} </Link>
      </button>
      <style jsx>{style}</style>
    </Fragment>
  );
};

export { ButtonPrimary, ButtonSecondary, ButtonSecondaryLink };
