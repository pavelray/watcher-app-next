import React, { Fragment } from "react";
import { style } from "./Dropdown.style";

const Dropdown = ({
  handleOnChange,
  defaultValue,
  children,
  name,
  title = "",
}) => {
  return (
    <Fragment>
      {title && <span>{title}</span>}
      <select
        className="dropdown"
        onChange={handleOnChange}
        value={defaultValue}
        name={name}
      >
        {children}
      </select>
      <style jsx>{style}</style>
    </Fragment>
  );
};

export default Dropdown;
