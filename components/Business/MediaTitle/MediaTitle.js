import Link from "next/link";
import React, { Fragment } from "react";
import { MEDIA_TYPE } from "../../../utils/constants";
import { getReleaseDate } from "../../../utils/helperMethods";
import { style } from "./MediaTitle.style";

const MediaTitle = ({ details, type = MEDIA_TYPE.MOVIE }) => {
  const { tagline, genres = [] } = details;
  const releaseDate = getReleaseDate(details, type);

  const getGenres = () => {
    if (!!genres.length) {
      return genres.map((x) => (
        <li key={x.id} className="genre">
          <Link href={`/discover/${type}/${x.id}/1`}>{x.name}</Link>
          <style jsx>{style}</style>
        </li>
      ));
    }
    return null;
  };

  return (
    <Fragment>
      <div className="movie">
        {tagline && (
          <div className="movie-tagline">
            <span className="genre-text">Tagline:</span> {tagline}
          </div>
        )}

        <ul className="movie-gen">
          {!!genres.length && (
            <Fragment>
              <li className="genre-text">Genre:</li>
              {getGenres()}
            </Fragment>
          )}
        </ul>
        <ul className="movie-gen">
          <li>{details.status} -</li>
          <li>{releaseDate} </li>
        </ul>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  );
};

export default MediaTitle;
