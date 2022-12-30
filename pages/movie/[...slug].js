import Head from "next/head";
import { Fragment } from "react";
import MovieDetails from "../../components/Business/MovieDetails";
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
import { getLocationCookie, getRuntime } from "../../utils/helperMethods";
import httpService from "../../utils/httpService";

const MovieDetailsPage = ({ slugTitle, movie, id, type }) => {
  return (
    <Fragment>
      <Head>
        <title>Moviezine - {slugTitle}</title>
        <meta name="description" content="Details information of the Movie" />
      </Head>
      <MovieDetails movie={movie} id={id} type={type} />
    </Fragment>
  );
};

export async function getServerSideProps(context) {
  const { query, req } = context;
  const { slug } = query;
  const { countryCode = DEFAULT_COUNTRY_CODE } = getLocationCookie(req);
  const type = MEDIA_TYPE.MOVIE;

  const id = slug[0];
  const slugTitle = slug[1];

  let url = `${getMovieDetailsDataAPIUrl(type, id)}${appendToReq}`;
  const movieDetailsReq = httpService.get(url);
  url = getProvidersAPIUrl(type, id);
  const watchProviderReq = httpService.get(url);
  url = getReviewUrl(id, type);
  const movieReviewReq = httpService.get(url);
  url = getRecommendationsUrl(id, type);
  const recomendedMovieReq = httpService.get(url);

  const [movieDetails, watchProviderResp, movieReviewResp, recomendedMovieRes] =
    await Promise.allSettled([
      movieDetailsReq,
      watchProviderReq,
      movieReviewReq,
      recomendedMovieReq,
    ]);

  const { runtime, credits, videos, release_dates, images, external_ids } =
    movieDetails.value;
  const totalRuntime = getRuntime(runtime);

  const movieCast = credits.cast.filter((cast) => cast.profile_path !== null);
  const movieCrew = credits.crew.filter(
    (crew) => crew.job === "Director" || crew.job === "Writer"
  );

  const trailerVideo = videos.results.filter(
    (video) => video.type === VIDEO_TYPE.TRAILER
  );

  const watchProvider = watchProviderResp.value.results[countryCode] || {};
  const recomended = recomendedMovieRes.value;

  return {
    props: {
      id,
      type: MEDIA_TYPE.MOVIE,
      slugTitle,
      movie: {
        details: movieDetails.value,
        cast: movieCast,
        crew: movieCrew,
        runtime: totalRuntime,
        trailerVideo,
        providers: watchProvider,
        reviews: movieReviewResp.value,
        recomended,
        releaseInfo: release_dates,
        images,
        external_ids,
      },
    },
  };
}

export default MovieDetailsPage;
