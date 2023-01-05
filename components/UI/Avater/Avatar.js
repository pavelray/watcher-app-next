import React, { Fragment } from "react";
import Image from "next/image";
import { style } from "./Avatar.style";
import avatarStyle from "./Avatar.module.scss";

const Avatar = ({ imageSrc, text, role }) => {
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
        <div className="avatar__name">
          <div className="avatar__role">{text}</div>
          {role && <div>{role}</div> }
        </div>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  );
};

export default Avatar;
