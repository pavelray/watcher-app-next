import { v4 as uuid4 } from "uuid";
import { MEDIA_TYPE, MOVIE_GENRE, TV_GENRE } from "../../../utils/constants";
import Router from "next/router";

import { style } from "./MediaGenre.style";
import IconButton from "../../UI/Buttons/IconButton";
import { Fragment } from "react";

const MediaGenre = ({ type, title }) => {
  const mediaGenre = type === MEDIA_TYPE.MOVIE ? MOVIE_GENRE : TV_GENRE;

  const discoverMedia = (id) => {
    Router.push(`/genre/${type}/${id}/1`);
  };

  return (
    <Fragment>
      <h2>{title}</h2>
      <div className="media-genre-container">
        {mediaGenre.map((genre) => {
          return (
            <div
              key={uuid4()}
              className="media-genre"
              onClick={()=> discoverMedia(genre.id)}
            >
              <IconButton name={genre.name} src={genre.imageSrc} />
            </div>
          );
        })}
      </div>
      <style jsx>{style}</style>
    </Fragment>
  );
};

export default MediaGenre;
