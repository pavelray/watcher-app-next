import Head from "next/head";
import { Fragment } from "react";
import HomeBanner from "../components/Business/HomeBanner/HomeBanner";
import CardSlider from "../components/UI/CardCarousel/CardSlider";
import {
  getMovieDetailsDataAPIUrl,
  getTrendingDataAPIUrl,
} from "../utils/apiUtills";
import {
  appendToReq,
  APP_NAME,
  COLLECTION_TYPE,
  MEDIA_TYPE,
  SEO_TAGS,
  TIME_TYPE,
} from "../utils/constants";
import httpService from "../utils/httpService";
import styles from "../styles/Home.module.scss";
import { GoogleAd } from "../components/UI/GoogleAds";

const Home = ({
  trendingMovie,
  trendingTvSeries,
  trendingPersons,
  trendingToday,
  isMobile,
}) => {
  return (
    <Fragment>
      <div>
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

            <CardSlider
              data={trendingTvSeries.results}
              type={MEDIA_TYPE.TV_SERIES}
              title="Trending Tv Series"
              dataType={COLLECTION_TYPE.TRENDING}
            />
            <GoogleAd />
            <CardSlider
              data={trendingPersons.results}
              type={MEDIA_TYPE.PERSON}
              title="Person"
              dataType={COLLECTION_TYPE.TRENDING}
            />
          </div>
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

  url = getTrendingDataAPIUrl(MEDIA_TYPE.PERSON, TIME_TYPE.WEEK);
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
  url = `${getMovieDetailsDataAPIUrl(
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
