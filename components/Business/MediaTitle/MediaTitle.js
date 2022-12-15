import React, { Fragment } from "react";
import { style } from "./MediaTitle.style";

const MediaTitle = ({ details, runtime, releaseInfo }) => {

  const { title, tagline, genres = [], name, production_countries } = details;
  const getCertificates = () => {
    const result = releaseInfo.results?.filter(o1 => production_countries?.some(o2 => o1.iso_3166_1 === o2.iso_3166_1));
    const certificates = result.map(r=> r.release_dates[0].certification).join(', ');
    return certificates;
  }

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
          <li>{new Date(details.release_date).toLocaleDateString()} </li>
        </ul>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  );
};

export default MediaTitle;
