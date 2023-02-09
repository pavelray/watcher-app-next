import Head from "next/head";
import React, { Fragment } from "react";
import MediaGenre from "../../components/Business/MediaGenre/MediaGenre";
import { MEDIA_TYPE } from "../../utils/constants";

const Discover = () => {
  return (
    <Fragment>
      <div>
        <MediaGenre type={MEDIA_TYPE.MOVIE} title="Movie" />
        <MediaGenre type={MEDIA_TYPE.TV_SERIES} title="Tv" />
      </div>
    </Fragment>
  );
};

export default Discover;
