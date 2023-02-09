import Head from "next/head";
import React, { Fragment } from "react";
import MediaGenre from "../../components/Business/MediaGenre/MediaGenre";
import { MEDIA_TYPE } from "../../utils/constants";

const Discover = () => {
  return (
    <Fragment>
      <Head>
        <title>
          Genre| Movie Genre | Tv Series Genre
        </title>
        <meta
          name="description"
          content="Stay updated with the latest movie releases and upcoming films at our movie theater. Find details, trailers, and reviews for new and popular movies."
        />
        <meta
          name="keywords"
          content="movie releases, upcoming films, movie theater, showtimes, trailers, reviews, popular movies"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content={APP_NAME} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div>
        <MediaGenre type={MEDIA_TYPE.MOVIE} title="Movie" />
        <MediaGenre type={MEDIA_TYPE.TV_SERIES} title="Tv" />
      </div>
    </Fragment>
  );
};

export default Discover;
