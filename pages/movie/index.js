import React, { Fragment } from "react";
import CardSlider from "../../components/UI/CardCarousel/CardSlider";
import {
  getMediaByYearUrl,
  getNowPlayingMoviesUrl,
  getPopularMoviesUrl,
  getTopRatedMoviesUrl,
  getUpcomingMoviesUrl,
} from "../../utils/apiUtills";
import {
  COLLECTION_TYPE,
  DEFAULT_COUNTRY_CODE,
  MEDIA_TYPE,
} from "../../utils/constants";
import { getLocationCookie } from "../../utils/helperMethods";
import httpService from "../../utils/httpService";

const Movie = (props) => {
  const {
    nowPlayingMovie,
    upComingMovie,
    topRatedMovie,
    popularMovie,
    currentYearMovies,
    currentYear,
  } = props;

  return (
    <Fragment>
      <CardSlider
        data={currentYearMovies.results}
        type={MEDIA_TYPE.MOVIE}
        title={`Movies Released in ${currentYear}`}
        dataType={COLLECTION_TYPE.SIMILAR}
      />
      <CardSlider
        data={popularMovie.results}
        type={MEDIA_TYPE.MOVIE}
        title="Popular Movies"
        dataType={COLLECTION_TYPE.POPULAR}
      />
      <CardSlider
        data={topRatedMovie.results}
        type={MEDIA_TYPE.MOVIE}
        title="Top Rated Movies"
        dataType={COLLECTION_TYPE.TOP_RATED}
      />
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

  const currentYear = new Date().getFullYear();
  url = getMediaByYearUrl(MEDIA_TYPE.MOVIE, 1, currentYear);
  const currentYearMovieReq = httpService.get(url);

  const [
    nowPlayingMovie,
    upComingMovie,
    topRatedMovie,
    popularMovie,
    currentYearMovies,
  ] = await Promise.allSettled([
    nowPlayingMovieReq,
    upComingMovieReq,
    topRatedMovieReq,
    popularMovieReq,
    currentYearMovieReq,
  ]);

  return {
    props: {
      nowPlayingMovie: nowPlayingMovie.value,
      upComingMovie: upComingMovie.value,
      topRatedMovie: topRatedMovie.value,
      popularMovie: popularMovie.value,
      currentYearMovies: currentYearMovies.value,
      currentYear,
    },
  };
}

export default Movie;
