import Head from "next/head";
import React, { Fragment } from "react";
import AboutComponent from "../../components/Business/AboutComponent";
import { APP_NAME } from "../../utils/constants";

const About = () => {
  return (
    <Fragment>
      <Head>
        <title>About | {APP_NAME} </title>
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
      <AboutComponent />
    </Fragment>
  );
};

export default About;
