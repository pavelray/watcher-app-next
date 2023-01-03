import Head from "next/head";
import { Fragment } from "react";
import TvSeriesDetails from "../../components/Business/TvSeriesDetails";
import {
  getMovieDetailsDataAPIUrl,
  getProvidersAPIUrl,
  getRecommendationsUrl,
  getReviewUrl,
} from "../../utils/apiUtills";
import {
  appendToReq,
  DEFAULT_COUNTRY_CODE,
  MEDIA_TYPE,
  VIDEO_TYPE,
} from "../../utils/constants";
import { getLocationCookie } from "../../utils/helperMethods";
import httpService from "../../utils/httpService";

const TvSeriesDetailsPage = ({ slugTitle, tvSeries, type, id }) => {
  return (
    <Fragment>
      <Head>
        <title>Moviezine - {slugTitle}</title>
        <meta
          name="description"
          content="Details information of the Tv Series"
        />
      </Head>
      <TvSeriesDetails tvSeries={tvSeries} type={type} id={id} />
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

  let url = `${getMovieDetailsDataAPIUrl(type, id)}${appendToReq}`;
  const tvSeriesDetailsReq = httpService.get(url);
  url = getProvidersAPIUrl(type, id);
  const watchProviderReq = httpService.get(url);
  url = getReviewUrl(id, type);
  const tvReviewReq = httpService.get(url);
  url = getRecommendationsUrl(id, type);
  const recomendedReq = httpService.get(url);

  const [tvSeriesDetails, watchProviderResp, tvReviewResp, recomendedRes] =
    await Promise.allSettled([
      tvSeriesDetailsReq,
      watchProviderReq,
      tvReviewReq,
      recomendedReq,
    ]);

  const { credits, videos, content_ratings, images, external_ids, created_by } =
  tvSeriesDetails.value;


  const tvSeriesCast = credits.cast.filter(
    (cast) => cast.profile_path !== null
  );
  const creator = created_by;

  const trailerVideo = videos.results.filter(
    (video) => video.type === VIDEO_TYPE.TRAILER
  );

  const watchProvider = watchProviderResp.value.results[countryCode] || {};
  const recomended = recomendedRes.value;

  return {
    props: {
      id,
      type,
      slugTitle,
      tvSeries: {
        details: tvSeriesDetails.value,
        cast: tvSeriesCast,
        crew: { creator },
        trailerVideo,
        providers: watchProvider,
        reviews: tvReviewResp.value,
        contentRating: content_ratings,
        external_ids,
        images,
        recomended
      },
    },
  };
}

export default TvSeriesDetailsPage;
