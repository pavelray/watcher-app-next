
import { Fragment } from "react";
import CardSlider from "../components/UI/CardCarousel/CardSlider";
import { getTrendingDataAPIUrl } from "../utils/apiUtills";
import { COLLECTION_TYPE, MEDIA_TYPE, TIME_TYPE } from "../utils/constants";
import httpService from "../utils/httpService";

export default function Home({ trendingMovie, trendingTvSeries }) {
  return (
    <Fragment>
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
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  let url = getTrendingDataAPIUrl(MEDIA_TYPE.MOVIE, TIME_TYPE.WEEK);
  const trendingMovie = await httpService.get(url);

  url = getTrendingDataAPIUrl(MEDIA_TYPE.TV_SERIES, TIME_TYPE.WEEK);
  const trendingTvSeries = await httpService.get(url);

  return {
    props: {
      trendingMovie,
      trendingTvSeries,
    },
  };
}
