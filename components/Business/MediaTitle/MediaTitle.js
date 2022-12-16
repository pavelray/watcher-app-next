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
  
  const getContentRating = (result) => {
    switch (type) {
      case MEDIA_TYPE.MOVIE:
        return result?.map((r) => r.release_dates[0].certification).join(", ");
      default: {
        return result?.map((r) => r.rating).join(", ");
      }
    }
  };

  const getCertificates = () => {
    const result = releaseInfo?.results?.filter((o1) =>
      production_countries?.some((o2) => o1.iso_3166_1 === o2.iso_3166_1)
    );

    const certificates = getContentRating(result);
    return certificates;
  };

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
        <div className="movie-title">{title || name}</div>
        <div className="movie-tagline">{tagline}</div>
        <ul className="movie-gen">
          <li>
            <span className="rating">{getCertificates()}</span>/
          </li>
          <li>{runtime} /</li>
          {!!genres.length && <li>{getGenres()}</li>}
        </ul>
        <ul className="movie-gen">
          <li> {details.vote_average?.toFixed(2)} / 10 -</li>
          <li>{details.status} -</li>
          <li>{getReleaseDate()} </li>
        </ul>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  );
};

export default MediaTitle;
