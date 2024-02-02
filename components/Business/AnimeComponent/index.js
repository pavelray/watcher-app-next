/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from "react";
import { style } from "./AnimeComponent.style";

const AnimeComponent = ({ data }) => {
  return (
    <Fragment>
      <h1>This Page is Comming Soon !!!</h1>
      <div className="anime-container">
        {data.map((anime, i) => {
          return (
            <div className="anime-wrapper" key={10 * (i + 1)}>
              <div className="image-wrapper">
                <img
                  src={anime.thumbnail}
                  alt={anime.title}
                  className="anime-image"
                />
              </div>
              <div className="stats-container">
                <div>Year: {anime.year}</div>
                <div>Type: {anime.type}</div>
                <div>Year: {anime.episode}</div>
                <div className="genre">
                  Genres: <span className="genres">{anime.genres}</span>
                </div>
              </div>
            </div>
          );
        })}
        <style jsx> {style} </style>
      </div>
    </Fragment>
  );
};

export default AnimeComponent;
