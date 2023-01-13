import React, { Fragment } from "react";
import { style } from "./Card.style.js";
import cardModuleStyle from "./Card.module.scss";
import ImageFallback from "../../Business/ImageFallback/index.js";
import { NO_IMG_PLACEHOLDER_USER } from "../../../utils/constants.js";

const ProfileCard = ({ id, title, poster, description, redirectToDetails }) => {
  return (
    <Fragment>
      <div className="card">
        <div className={cardModuleStyle.cardImage}>
          <ImageFallback
            src={poster}
            alt="Poster"
            width="200"
            height={300}
            onClick={redirectToDetails}
            fallbackSrc={NO_IMG_PLACEHOLDER_USER}
          />
        </div>
        <div className="card-body">
          <div className="card-body__title">{title}</div>
          <div className="card-body__genre">
            <div>{description}</div>
          </div>
        </div>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  );
};

export { ProfileCard };
export default ProfileCard;
