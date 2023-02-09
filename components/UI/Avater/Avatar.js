import React, { Fragment } from "react";
import { style } from "./Avatar.style";
import avatarStyle from "./Avatar.module.scss";
import ImageFallback from "../../Business/ImageFallback";
import { NO_IMG_PLACEHOLDER_USER } from "../../../utils/constants";

const Avatar = ({ imageSrc, text, role }) => {
  return (
    <Fragment>
      <div className="avatar">
        <ImageFallback
          className={avatarStyle.avatarImage}
          src={imageSrc}
          alt="avater_image"
          width={100}
          height={160}
          fallbackSrc={NO_IMG_PLACEHOLDER_USER}
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
