import Head from "next/head";
import { Fragment } from "react";
import HomeBanner from "../components/Business/HomeBanner/HomeBanner";
import CardSlider from "../components/UI/CardCarousel/CardSlider";
import { getTrendingDataAPIUrl } from "../utils/apiUtills";
import {
  COLLECTION_TYPE,
  MEDIA_TYPE,
  pageLayoutStyle,
  pageMobileLayoutStyle,
  TIME_TYPE,
} from "../utils/constants";
import httpService from "../utils/httpService";
import styles from "../styles/Home.module.scss";

const Home = ({
  trendingMovie,
  trendingTvSeries,
  trendingPersons,
  trendingToday,
  isMobile,
}) => {
  return (
    <Fragment>
      <Head>
        <title>Moviezine - Home</title>
        <meta
          name="description"
          content="Home page containing Trending movies and tv series of the week"
        />
      </Head>
      <div style={!isMobile ? pageLayoutStyle : pageMobileLayoutStyle}>
        <div className={styles.homeContainer}>
          <HomeBanner
            trendingToday={trendingToday.results}
            title="Trending Today"
          />
          <div className={styles.heading}>Trending This Week</div>
          <div className={styles.trending}>
            <CardSlider
              data={trendingMovie.results}
              type={MEDIA_TYPE.MOVIE}
              title="Movies"
              dataType={COLLECTION_TYPE.TRENDING}
            />
            <CardSlider
              data={trendingTvSeries.results}
              type={MEDIA_TYPE.TV_SERIES}
              title="Tv Series"
              dataType={COLLECTION_TYPE.TRENDING}
            />
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

  return {
    props: {
      trendingMovie: trendingMovie.value,
      trendingTvSeries: trendingTvSeries.value,
      trendingPersons: trendingPersons.value,
      trendingToday: trendingTodayResp.value,
    },
  };
}

export default Home;
