import React from "react";
import {
  getDiscoverMovieUrl,
  getDiscoverTvSeriesUrl,
} from "../../utils/apiUtills";
import { MEDIA_TYPE, MOVIE_GENRE, TV_GENRE } from "../../utils/constants";
import httpService from "../../utils/httpService";

import ViewAll from "../../components/Business/ViewAll/ViewAll";

const Discover = (props) => {
  const { genre, type } = props;
  const genreName =
    type === MEDIA_TYPE.MOVIE
      ? MOVIE_GENRE.find((x) => x.id === genre)?.name
      : TV_GENRE.find((x) => x.id === genre)?.name;
    console.log(genreName);
  return (
    <div>
      <ViewAll {...props} genreName={genreName} />
    </div>
  );
};

export async function getServerSideProps(context) {
  const { query } = context;
  const { slug } = query;

  const mediaType = slug[0];
  const genre = +slug[1];
  const page = slug[2];

  const apiUrl =
    mediaType === MEDIA_TYPE.MOVIE
      ? getDiscoverMovieUrl(mediaType, page, genre)
      : getDiscoverTvSeriesUrl(mediaType, page, genre);
  const response = await httpService.get(apiUrl);
  return {
    props: {
      ...response,
      genre,
      type: mediaType,
    },
  };
}

export default Discover;
