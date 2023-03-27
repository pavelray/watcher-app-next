import { Fragment } from "react";
import Router from "next/router";
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
import { ButtonPrimary } from "../components/UI/Buttons/Buttons";

const Home = ({
  trendingMovie,
  trendingTvSeries,
  trendingPersons,
  trendingToday,
  isMobile,
}) => {
  const navigateToDiscoverPage = () => {
    Router.push(`/discover`);
  };
  return (
    <Fragment>
      <div className={styles.homeContainer}>
        <HomeBanner
          trendingToday={trendingToday}
          title="Trending Today"
          isMobile={isMobile}
        />
        <div className={styles.discover}>
          <h1>Discover Your Next Favorite Movie</h1>
          <h2>
            Explore Movies/Tv Series with TFM&apos;s (The Film Mastery) Advanced
            Filters
          </h2>
          <p>
            Not sure what you&apos;re in the mood for? Use TFM&apos;s (The Film
            Mastery) advanced filters to refine your search based on genre,
            rating, release date, cast, and more.
          </p>
          <ButtonPrimary
            handleOnClick={navigateToDiscoverPage}
            text="Discover"
          />
        </div>
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
