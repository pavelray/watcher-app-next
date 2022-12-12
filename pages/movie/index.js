import React, { Fragment } from "react";
import Head from "next/head";
import CardSlider from "../../components/UI/CardCarousel/CardSlider";
import {
  getNowPlayingMoviesUrl,
  getPopularMoviesUrl,
  getTopRatedMoviesUrl,
  getUpcomingMoviesUrl,
} from "../../utils/apiUtills";
import {
  COLLECTION_TYPE,
  DEFAULT_COUNTRY_CODE,
  MEDIA_TYPE,
  pageLayoutStyle,
  pageMobileLayoutStyle,
} from "../../utils/constants";
import { getLocationCookie } from "../../utils/helperMethods";
import httpService from "../../utils/httpService";
import MediaGenre from "../../components/Business/MediaGenre/MediaGenre";

const Movie = (props) => {
  const {
    nowPlayingMovie,
    upComingMovie,
    topRatedMovie,
    popularMovie,
    isMobile,
  } = props;

  return (
    <Fragment>
      <Head>
        <title>Moviezine - Movies</title>
        <meta name="description" content="Movies Home Page" />
      </Head>
      <div style={!isMobile ? pageLayoutStyle : pageMobileLayoutStyle}>
        <MediaGenre type={MEDIA_TYPE.MOVIE} />
        <CardSlider
          data={nowPlayingMovie.results}
          type={MEDIA_TYPE.MOVIE}
          title="Now Playing in your cinemas"
          dataType={COLLECTION_TYPE.NOW_PLAYING}
        />
        <CardSlider
          data={upComingMovie.results}
          type={MEDIA_TYPE.MOVIE}
          title="Upcoming Movies in your cinemas"
          dataType={COLLECTION_TYPE.UP_COMING}
        />
        <CardSlider
          data={topRatedMovie.results}
          type={MEDIA_TYPE.MOVIE}
          title="Top Rated"
          dataType={COLLECTION_TYPE.TOP_RATED}
        />
        <CardSlider
          data={popularMovie.results}
          type={MEDIA_TYPE.MOVIE}
          title="Popular"
          dataType={COLLECTION_TYPE.POPULAR}
        />
      </div>
    </Fragment>
  );
};

export async function getServerSideProps(context) {
  const { req } = context;
  const { countryCode = DEFAULT_COUNTRY_CODE } = getLocationCookie(req);

  let url = getNowPlayingMoviesUrl(countryCode);
  const nowPlayingMovieReq = httpService.get(url);

  url = getUpcomingMoviesUrl(countryCode);
  const upComingMovieReq = httpService.get(url);

  url = getTopRatedMoviesUrl(MEDIA_TYPE.MOVIE, 1);
  const topRatedMovieReq = httpService.get(url);

  url = getPopularMoviesUrl(MEDIA_TYPE.MOVIE, 1);
  const popularMovieReq = httpService.get(url);

  const [nowPlayingMovie, upComingMovie, topRatedMovie, popularMovie] =
    await Promise.allSettled([
      nowPlayingMovieReq,
      upComingMovieReq,
      topRatedMovieReq,
      popularMovieReq,
    ]);

  return {
    props: {
      nowPlayingMovie: nowPlayingMovie.value,
      upComingMovie: upComingMovie.value,
      topRatedMovie: topRatedMovie.value,
      popularMovie: popularMovie.value,
    },
  };
}

export default Movie;
