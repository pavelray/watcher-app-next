import Head from "next/head";
import React, { Fragment } from "react";
import MediaGenre from "../../components/Business/MediaGenre/MediaGenre";
import { MEDIA_TYPE, SEO_TAGS } from "../../utils/constants";

const Discover = () => {
  return (
    <Fragment>
      <h1>Browse Our Collection of Genres</h1>
      <MediaGenre type={MEDIA_TYPE.MOVIE} title="Movies" />
      <MediaGenre type={MEDIA_TYPE.TV_SERIES} title="Tv Series" />
    </Fragment>
  );
};

export async function getServerSideProps(ctx) {
  return {
    props: {
      title: SEO_TAGS.GENRE.TITLE,
      description: SEO_TAGS.GENRE.DESCRIPTION,
      keywords: SEO_TAGS.GENRE.KEYWORDS,
    },
  };
}

export default Discover;
