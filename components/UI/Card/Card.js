import React, { Fragment } from "react";
import Image from 'next/image';
import {style} from "./Card.style.js";
import cardModuleStyle from './Card.module.scss';

const Card = ({
  title,
  poster,
  releaseDate,
  ratings,
  genre,
  redirectToDetails,
}) => {
  return (
    <Fragment>
      <div className="card">
        <div className={cardModuleStyle.cardImage}>
          <Image src={poster} alt="Poster" width="200" height={300}/>
        </div>
        <div className="card-body">
          <div className="card-body__title">{title}</div>
          <div className="card-body__info">
            <div>{new Date(releaseDate).getFullYear()}</div>
            <div>{ratings}</div>
          </div>
          <div className="card-body__genre">
            <div>{genre}</div>
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

export { Card };
export default Card;
