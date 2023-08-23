import { Fragment, useEffect, useState } from "react";
import HomeBanner from "../components/Business/HomeBanner/HomeBanner";
import CardSlider from "../components/UI/CardCarousel/CardSlider";
import {
  getMediaDetailsDataAPIUrl,
  getPopularPeople,
  getTrendingDataAPIUrl,
} from "../utils/apiUtills";
import {
  appendToReq,
  COLLECTION_TYPE,
  MEDIA_TYPE,
  SEO_TAGS,
  TIME_TYPE,
} from "../utils/constants";
import httpService from "../utils/httpService";
import styles from "../styles/Home.module.scss";
import { GoogleAd } from "../components/UI/GoogleAds";
import axios from "axios";

const Home = ({
  trendingMovie,
  trendingTvSeries,
  trendingPersons,
  trendingToday,
  isMobile,
}) => {
  const [recentWatchedMovies, setRecentWatchedMovies] = useState();
  const [recentWatchedTVSeries, setRecentWatchedTVSeries] = useState();

  const getRecentViewedData = async () => {
    const viewHistoryData = localStorage.getItem("recentWatched");
    const body = {
      data: viewHistoryData,
    };
    const { data } = await axios.post("/api/getMediaDetails", body);
    const { recentViewed } = data;
    const recentlyWatchedMovies = recentViewed.movies.map(x=> x.value);
    const recentlyWatchedTvSeries = recentViewed.tv.map(x=> x.value);;
    setRecentWatchedMovies(recentlyWatchedMovies.reverse());
    setRecentWatchedTVSeries(recentlyWatchedTvSeries.reverse());
  };

  useEffect(() => {
    getRecentViewedData();
  }, []);

  return (
    <Fragment>
      <div className={styles.homeContainer}>
        <HomeBanner
          trendingToday={trendingToday}
          title="Trending Today"
          isMobile={isMobile}
        />
        <div className={styles.trending}>
          <CardSlider
            data={trendingMovie.results}
            type={MEDIA_TYPE.MOVIE}
            title="Trending Movies"
            dataType={COLLECTION_TYPE.TRENDING}
          />
          {!!recentWatchedMovies?.length && (
            <CardSlider
              data={recentWatchedMovies}
              type={MEDIA_TYPE.MOVIE}
              title="Continue Watch Movies"
            />
          )}
          <CardSlider
            data={trendingTvSeries.results}
            type={MEDIA_TYPE.TV_SERIES}
            title="Trending Tv Series"
            dataType={COLLECTION_TYPE.TRENDING}
          />
           {!!recentWatchedTVSeries?.length && (
            <CardSlider
              data={recentWatchedTVSeries}
              type={MEDIA_TYPE.TV_SERIES}
              title="Continue Watch Tv Series"
            />
          )}
          <GoogleAd />
          <CardSlider
            data={trendingPersons.results}
            type={MEDIA_TYPE.PERSON}
            title="Popular People"
            dataType={COLLECTION_TYPE.POPULAR}
          />
        </div>
      </div>
    </Fragment>
  );
};

export async function getServerSideProps(ctx) {
  let url = getTrendingDataAPIUrl(MEDIA_TYPE.MOVIE, TIME_TYPE.WEEK);
  const trendingMovieReq = httpService.get(url);

  url = getTrendingDataAPIUrl(MEDIA_TYPE.TV_SERIES, TIME_TYPE.WEEK);
  const trendingTvSeriesReq = httpService.get(url);

  url = getPopularPeople();
  const trendingPersonReq = httpService.get(url);

  url = getTrendingDataAPIUrl(MEDIA_TYPE.ALL, TIME_TYPE.DAY);
  const trendingTodayReq = httpService.get(url);

  const [trendingMovie, trendingTvSeries, trendingPersons, trendingTodayResp] =
    await Promise.allSettled([
      trendingMovieReq,
      trendingTvSeriesReq,
      trendingPersonReq,
      trendingTodayReq,
    ]);
  const randomMedia = trendingTodayResp?.value?.results
    ? trendingTodayResp.value.results[
        Math.floor(Math.random() * trendingTodayResp.value.results.length)
      ]
    : {};
  url = `${getMediaDetailsDataAPIUrl(
    randomMedia.media_type,
    randomMedia.id
  )}${appendToReq}`;
  const randomMediaDetails = await httpService.get(url);

  return {
    props: {
      trendingMovie: trendingMovie.value,
      trendingTvSeries: trendingTvSeries.value,
      trendingPersons: trendingPersons.value,
      trendingToday: {
        ...randomMediaDetails,
        media_type: randomMedia.media_type,
      },
      title: SEO_TAGS.DEFAULT.TITLE,
      description: SEO_TAGS.DEFAULT.DESCRIPTION,
      keywords: SEO_TAGS.DEFAULT.KEYWORDS,
    },
  };
}

export default Home;
