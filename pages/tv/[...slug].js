import Head from "next/head";
import { Fragment } from "react";
import TvSeriesDetails from "../../components/Business/TvSeriesDetails";
import {
  getContentRatingUrl,
  getExternalIdUrl,
  getMovieCastDetailsDataAPIUrl,
  getMovieDetailsDataAPIUrl,
  getMovieVideosUrl,
  getProvidersAPIUrl,
  getReviewUrl,
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
  const tvSeriesDetailsReq = httpService.get(url);
  url = getMovieCastDetailsDataAPIUrl(type, id);
  const tvCastCrewReq = httpService.get(url);
  url = getMovieVideosUrl(id, type);
  const videoReq = httpService.get(url);
  url = getProvidersAPIUrl(type, id);
  const watchProviderReq = httpService.get(url);
  url = getContentRatingUrl(type, id);
  const contentRatingReq = httpService.get(url);
  url = getReviewUrl(id, type);
  const tvReviewReq = httpService.get(url);
  url = getExternalIdUrl(type, id);
  const externalIdReq = httpService.get(url);

  const [
    tvSeriesDetails,
    castCrewResp,
    videoResponse,
    watchProviderResp,
    contentRatingResp,
    tvReviewResp,
    externalIdResp,
  ] = await Promise.allSettled([
    tvSeriesDetailsReq,
    tvCastCrewReq,
    videoReq,
    watchProviderReq,
    contentRatingReq,
    tvReviewReq,
    externalIdReq,
  ]);

  // const seasons = tvSeriesDetails.seasons.filter(
  //   (s) => s.air_date !== null && s.season_number > 0
  // );

  // let seasonsData = [];

  // seasons?.forEach(async (s) => {
  //   url = getSeasonDetailsAPIUrl(id, s.season_number);
  //   const seasionDetailsResp = await httpService.get(url);
  //   seasonsData.push(seasionDetailsResp);
  // });

  const tvSeriesCast = castCrewResp.value.cast.filter(
    (cast) => cast.profile_path !== null
  );
  const tvSeriesCrew = castCrewResp.value.crew.filter(
    (crew) => crew.job === "Director" || crew.job === "Producer"
  );

  const trailerVideo = videoResponse.value.results.filter(
    (video) => video.type === VIDEO_TYPE.TRAILER
  );

  const watchProvider = watchProviderResp.value.results[countryCode] || {};

  return {
    props: {
      id,
      type,
      slugTitle,
      tvSeries: {
        details: tvSeriesDetails.value,
        cast: tvSeriesCast,
        crew: tvSeriesCrew,
        trailerVideo,
        providers: watchProvider,
        reviews: tvReviewResp.value,
        contentRating: contentRatingResp.value,
        externalIds: externalIdResp.value,
      },
    },
  };
}

export default TvSeriesDetailsPage;
