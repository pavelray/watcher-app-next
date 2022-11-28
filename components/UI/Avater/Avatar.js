import React, { Fragment } from "react";
import Image from "next/image";
import { style } from "./Avatar.style";
import avatarStyle from './Avatar.module.scss';

const Avatar = ({ imageSrc, text }) => {
  return (
    <Fragment>
      <div className="avatar">
        <Image
          className={avatarStyle.avatarImage}
          src={imageSrc}
          alt="avater_image"
          width={100}
          height={160}
        />
        <div className="avatar__name">{text}</div>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  );
};

export default Avatar;
