import { v4 as uuid4 } from "uuid";
import { MEDIA_TYPE, MOVIE_GENRE, TV_GENRE } from "../../../utils/constants";
import Router from 'next/router';

import { style } from "./MediaGenre.style";

const MediaGenre = ({type}) => {
  const mediaGenre = type === MEDIA_TYPE.MOVIE ? MOVIE_GENRE : TV_GENRE;

  const discoverMedia = (e) => {
    const id = e.target.id;
    Router.push(`/discover/${type}/${id}/1`);
  }

  return (
    <div className="media-genre-container">
      {mediaGenre.map((genre) => {
        return <div key={uuid4()} className="media-genre" onClick={discoverMedia} id={genre.id}>{genre.name}</div>;
      })}
      <style jsx>{style}</style>
    </div>
  );
};

export default MediaGenre;
