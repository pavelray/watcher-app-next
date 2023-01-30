import Image from "next/image";
import React, { Fragment } from "react";
import { style } from "./Buttons.style";

const IconButton = ({ src, name }) => {
  return (
    <Fragment>
      <div className="icon">
        <Image
          src={src}
          alt=""
          width={50}
          height={60}
        />
        <div>{name}</div>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  );
};

export default IconButton;
