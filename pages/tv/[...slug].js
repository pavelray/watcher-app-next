import Head from "next/head";
import { Fragment } from "react";
import TvSeriesDetails from "../../components/Business/TvSeriesDetails";
import {
  getMovieDetailsDataAPIUrl,
  getProvidersAPIUrl,
  getRecommendationsUrl,
  getReviewUrl,
  getSeasonDetailsAPIUrl,
} from "../../utils/apiUtills";
import {
  appendToReq,
  APP_NAME,
  DEFAULT_COUNTRY_CODE,
  MEDIA_TYPE,
  VIDEO_TYPE,
} from "../../utils/constants";
import { getGenreText, getLocationCookie } from "../../utils/helperMethods";
import httpService from "../../utils/httpService";

const TvSeriesDetailsPage = ({ slugTitle, tvSeries, type, id , isMobile}) => {
  const { details } = tvSeries;
  const { name, first_air_date, genres, created_by } = details;
  const directorName = created_by.map(n=> n.name).join(' ,');
  const releaseYear = new Date(first_air_date).getFullYear();
  const genreText = getGenreText(genres);

  return (
    <Fragment>
      <Head>
        <title>
          {name} | {releaseYear}{" "}
        </title>
        <meta
          name="description"
          content={`${name} Release date ${first_air_date}. Read reviews, watch trailers and get details at ${APP_NAME}.`}
        />
        <meta
          name="keywords"
          content={`${name}, ${releaseYear}, ${genreText}, ${directorName}, movie theater, details, trailers, reviews`}
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content={APP_NAME} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={`${name} - ${releaseYear}`} />
        <meta property="og:type" content="video.tvseries" />
        <meta
          property="og:description"
          content={`${name} is a ${genreText} tv series created by ${directorName}. Release date ${first_air_date}. Read reviews, watch trailers and get showtimes at ${APP_NAME}.`}
        />
        <meta property="og:site_name" content={window.location.host} />
        <meta property="og:locale" content="en_US" />
      </Head>
      <TvSeriesDetails tvSeries={tvSeries} type={type} id={id} isMobile={isMobile} />
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

  const { credits, videos, content_ratings, images, external_ids, created_by, number_of_seasons, seasons } =
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

  const lastSeason = number_of_seasons || seasons[seasons.length-1].season_number;

  url = getSeasonDetailsAPIUrl(id, lastSeason);
  const latestSeasonDetails = await httpService.get(url);

  return {
    props: {
      id,
      type,
      slugTitle,
      tvSeries: {
        details: tvSeriesDetails?.value || {},
        cast: tvSeriesCast,
        crew: { creator },
        trailerVideo,
        providers: watchProvider,
        reviews: tvReviewResp.value,
        contentRating: content_ratings,
        external_ids,
        images,
        recomended,
        latestSeasonDetails
      },
    },
  };
}

export default TvSeriesDetailsPage;
