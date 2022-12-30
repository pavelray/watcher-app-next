import React, { Fragment } from "react";
import { MEDIA_TYPE } from "../../../utils/constants";
import { style } from "./MediaTitle.style";

const MediaTitle = ({
  details,
  runtime,
  releaseInfo,
  type = MEDIA_TYPE.MOVIE,
}) => {
  const { title, tagline, genres = [], name, production_countries } = details;
  
  const getReleaseDate = () => {
    const releaseDate =
      type === MEDIA_TYPE.MOVIE ? details.release_date : details.first_air_date;

    return new Date(releaseDate).toLocaleDateString();
  };

  const getGenres = () => {
    if (!!genres.length) {
      return genres.map((x) => x.name).join(", ");
    }
    return null;
  };
  return (
    <Fragment>
      <div className="movie">
        <div className="movie-tagline">{tagline}</div>
        <ul className="movie-gen">
          {!!genres.length && <li>{getGenres()}</li>}
        </ul>
        <ul className="movie-gen">
          <li>{details.status} -</li>
          <li>{getReleaseDate()} </li>
        </ul>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  );
};

export default MediaTitle;
