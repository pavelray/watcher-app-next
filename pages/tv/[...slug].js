import Head from "next/head";
import { Fragment } from "react";
import TvSeriesDetails from "../../components/Business/TvSeriesDetails";
import {
  getMovieCastDetailsDataAPIUrl,
  getMovieDetailsDataAPIUrl,
  getMovieVideosUrl,
  getProvidersAPIUrl,
  getSeasonDetailsAPIUrl,
} from "../../utils/apiUtills";
import {
  DEFAULT_COUNTRY_CODE,
  MEDIA_TYPE,
  VIDEO_TYPE,
} from "../../utils/constants";
import { getLocationCookie } from "../../utils/helperMethods";
import httpService from "../../utils/httpService";

const TvSeriesDetailsPage = ({ slugTitle, tvSeries }) => {
  return (
    <Fragment>
      <Head>
        <title>Moviezine - {slugTitle}</title>
        <meta
          name="description"
          content="Details information of the Tv Series"
        />
      </Head>
      <TvSeriesDetails tvSeries={tvSeries} />
    </Fragment>
  );
};

export async function getServerSideProps(context) {
  const { query, req } = context;
  const { slug } = query;
  const { countryCode = DEFAULT_COUNTRY_CODE } = getLocationCookie(req);
  const type = MEDIA_TYPE.TV_SERIES;

  const id = slug[0];
  const slugTitle = slug[1];

  let url = getMovieDetailsDataAPIUrl(type, id);
  const tvSeriesDetails = await httpService.get(url);
  const seasons = tvSeriesDetails.seasons.filter(
    (s) => s.air_date !== null && s.season_number > 0
  );

  let seasonsData = [];

  seasons?.forEach(async (s) => {
    url = getSeasonDetailsAPIUrl(id, s.season_number);
    const seasionDetailsResp = await httpService.get(url);
    seasonsData.push(seasionDetailsResp);
  });

  url = getMovieCastDetailsDataAPIUrl(type, id);
  const data = await httpService.get(url);
  const tvSeriesCast = data.cast.filter((cast) => cast.profile_path !== null);
  const tvSeriesCrew = data.crew.filter(
    (crew) => crew.job === "Director" || crew.job === "Producer"
  );

  url = getMovieVideosUrl(id, type);
  const videoResponse = await httpService.get(url);
  const trailerVideo = videoResponse.results.filter(
    (video) => video.type === VIDEO_TYPE.TRAILER
  );

  url = getProvidersAPIUrl(type, id);
  const watchProviderResp = await httpService.get(url);
  const watchProvider = watchProviderResp.results[countryCode] || {};

  return {
    props: {
      id,
      type,
      slugTitle,
      tvSeries: {
        details: tvSeriesDetails,
        cast: tvSeriesCast,
        crew: tvSeriesCrew,
        seasons,
        seasonDetails: seasonsData,
        trailerVideo,
        providers: watchProvider,
      },
    },
  };
}

export default TvSeriesDetailsPage;
