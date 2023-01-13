import React, { Fragment } from "react";
import { style } from "./Card.style.js";
import cardModuleStyle from "./Card.module.scss";
import ImageFallback from "../../Business/ImageFallback/index.js";
import { NO_IMG_PLACEHOLDER_MEDIA } from "../../../utils/constants.js";

const SeasonCard = ({
  id,
  title,
  poster,
  episodes,
  releaseDate,
  overview,
  redirectToDetails,
}) => {
  return (
    <Fragment>
      <div className="card" id={id}>
        <div className={cardModuleStyle.cardImage}>
          <ImageFallback
            src={poster}
            alt="Poster"
            width="200"
            height={300}
            fallbackSrc={NO_IMG_PLACEHOLDER_MEDIA}
          />
        </div>
        <div className="card-body">
          <div className="card-body__title">{title}</div>
          <div className="card-body__info">
            <div>Aired On: {new Date(releaseDate).toLocaleDateString()}</div>
            <div>Episodes: {episodes}</div>
          </div>
          <div className="card-body__genre">
            {overview && <div>{overview}</div>}
          </div>
        </div>
        <div className="card-footer">
          <button className="card-btn-cta" onClick={redirectToDetails}>
            Details
          </button>
        </div>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  );
};

export { SeasonCard };
export default SeasonCard;
