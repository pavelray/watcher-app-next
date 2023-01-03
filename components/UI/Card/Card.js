import React, { Fragment } from "react";
import Image from 'next/image';
import {style} from "./Card.style.js";
import cardModuleStyle from './Card.module.scss';
import Rating from "../Rating/Rating.js";

const Card = ({
  title,
  poster,
  ratings,
  redirectToDetails,
}) => {
  return (
    <Fragment>
      <div className="card">
        <div className={cardModuleStyle.cardImage}>
          <Image src={poster} alt="Poster" width="200" height={300} onClick={redirectToDetails}/>
        </div>
        <div className="card-body">
          <div className="card-body__title">{title}</div>
          <div className="card-body__info">
            <Rating ratingValue={(ratings*100)/10} height="0.9rem" width="5.5rem"/>
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
