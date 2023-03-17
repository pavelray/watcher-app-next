import React, { Fragment } from "react";
import { style } from "./Card.style.js";
import cardModuleStyle from "./Card.module.scss";
import Rating from "../Rating/Rating.js";
import ImageFallback from "../../Business/ImageFallback/index.js";
import { NO_IMG_PLACEHOLDER_MEDIA } from "../../../utils/constants.js";

const Card = ({ title, poster, ratings, redirectToDetails, adult }) => {
  return (
    <Fragment>
      <div className="card">
        <div className={cardModuleStyle.cardImage}>
          {adult && <div className="card-body__info warning">Adult</div>}
          <ImageFallback
            src={poster}
            alt="Poster"
            width={200}
            sizes="100vw"
            height="300"
            style={{
              objectFit: "cover",
              filter: adult ? "blur(5px)" : "blur(0)"
            }}
            onClick={redirectToDetails}
            fallbackSrc={NO_IMG_PLACEHOLDER_MEDIA}
          />
        </div>
        <div className="card-body">
          <div className="card-body__title">{title}</div>
          <div className="card-body__info">
            <Rating
              ratingValue={(ratings * 100) / 10}
              height="0.9rem"
              width="5.5rem"
            />
            <div>{ratings}</div>
          </div>
        </div>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  );
};

export { Card };
export default Card;
