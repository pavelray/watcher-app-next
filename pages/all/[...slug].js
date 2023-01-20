import React, { Fragment } from "react";
import {
  getDiscoverMovieUrl,
  getDiscoverTvSeriesUrl,
  getViewAllUrl,
} from "../../utils/apiUtills";
import { APP_NAME, MEDIA_TYPE } from "../../utils/constants";
import httpService from "../../utils/httpService";

import ViewAll from "../../components/Business/ViewAll/ViewAll";
import Head from "next/head";

const All = (props) => {
  return (
    <Fragment>
      <Head>
        <title>All | {APP_NAME} </title>
        <meta
          name="description"
          content="Stay updated with the trending movies, tv series in our website. Find details, trailers, and reviews for new and popular movies and tv series."
        />
        <meta
          name="keywords"
          content="movie releases, upcoming films, movie theater, showtimes, trailers, reviews, popular movies, popular tv showes, on air tv showes, upcoming tv series"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content={APP_NAME} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div>
        <ViewAll {...props} />
      </div>
    </Fragment>
  );
};

export async function getServerSideProps(context) {
  const { query } = context;
  const { slug } = query;

  const dataType = slug[0];
  const type = slug[1];
  const page = slug[2];
  const pageType = "all";

  const apiUrl = getViewAllUrl(dataType, type, page);
  const response = await httpService.get(apiUrl);
  return {
    props: {
      ...response,
      dataType,
      type,
      page,
      pageType,
    },
  };
}

export default All;
