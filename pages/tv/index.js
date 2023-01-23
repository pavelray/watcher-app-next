import Head from "next/head";
import React, { Fragment } from "react";
import MediaGenre from "../../components/Business/MediaGenre/MediaGenre";
import CardSlider from "../../components/UI/CardCarousel/CardSlider";
import {
  getPopularMoviesUrl,
  getShowsArrivingTodayUrl,
  getShowsOnAirUrl,
  getTopRatedMoviesUrl,
} from "../../utils/apiUtills";
import {
  APP_NAME,
  COLLECTION_TYPE,
  MEDIA_TYPE,
  pageLayoutStyle,
  pageMobileLayoutStyle,
} from "../../utils/constants";
import httpService from "../../utils/httpService";

const TvSeries = (props) => {
  const { nowPlayingMovie, upComingMovie, topRatedMovie, popularMovie } = props;

  return (
    <Fragment>
      <Head>
      <title>
          Top Rated Tv Series| Popular Tv Series | Upcoming Tv Series | On Air Shows
        </title>
        <meta
          name="description"
          content="Stay updated with the latest Tv Series releases and upcoming Tv Series at our website. Find details, trailers, and reviews for new and popular Tv Series."
        />
        <meta
          name="keywords"
          content="tv series releases, upcoming tv series, on air, showtimes, trailers, reviews, popular tv series"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content={APP_NAME} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div>
        <MediaGenre type={MEDIA_TYPE.TV_SERIES} />
        <CardSlider
          data={topRatedMovie.results}
          type={MEDIA_TYPE.TV_SERIES}
          title="Top Rated"
          dataType={COLLECTION_TYPE.TOP_RATED}
        />
        <CardSlider
          data={popularMovie.results}
          type={MEDIA_TYPE.TV_SERIES}
          title="Popular"
          dataType={COLLECTION_TYPE.POPULAR}
        />
        <CardSlider
          data={nowPlayingMovie.results}
          type={MEDIA_TYPE.TV_SERIES}
          title="Now Playing"
          dataType={COLLECTION_TYPE.NOW_PLAYING}
        />
        <CardSlider
          data={upComingMovie.results}
          type={MEDIA_TYPE.TV_SERIES}
          title="Upcoming Tv Series"
          dataType={COLLECTION_TYPE.UP_COMING}
        />
      </div>
    </Fragment>
  );
};

export async function getServerSideProps(context) {

  let url = getShowsOnAirUrl(MEDIA_TYPE.TV_SERIES);
  const nowPlayingTvReq = httpService.get(url);

  url = getShowsArrivingTodayUrl(MEDIA_TYPE.TV_SERIES);
  const upComingTvSeriesReq = httpService.get(url);

  url = getTopRatedMoviesUrl(MEDIA_TYPE.TV_SERIES, 1);
  const topRatedMovieReq = httpService.get(url);

  url = getPopularMoviesUrl(MEDIA_TYPE.TV_SERIES, 1);
  const popularMovieReq = httpService.get(url);

  const [nowPlayingMovie, upComingMovie, topRatedMovie, popularMovie] =
    await Promise.allSettled([
      nowPlayingTvReq,
      upComingTvSeriesReq,
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

export default TvSeries;
