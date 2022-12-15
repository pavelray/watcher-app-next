import Head from "next/head";
import { Fragment } from "react";
import MovieDetails from "../../components/Business/MovieDetails";
import {
  getMovieCastDetailsDataAPIUrl,
  getMovieDetailsDataAPIUrl,
  getMovieVideosUrl,
  getProvidersAPIUrl,
  getRecommendationsUrl,
  getReleaseDetailsUrl,
  getReviewUrl,
} from "../../utils/apiUtills";
import {
  DEFAULT_COUNTRY_CODE,
  MEDIA_TYPE,
  VIDEO_TYPE,
} from "../../utils/constants";
import { getLocationCookie } from "../../utils/helperMethods";
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

  let url = getMovieDetailsDataAPIUrl(type, id);
  const movieDetailsReq = httpService.get(url);
  url = getMovieCastDetailsDataAPIUrl(type, id);
  const movieCastCrewReq = httpService.get(url);
  url = getMovieVideosUrl(id, type);
  const videoReq = httpService.get(url);
  url = getProvidersAPIUrl(type, id);
  const watchProviderReq = httpService.get(url);
  url = getReviewUrl(id,type);
  const movieReviewReq = httpService.get(url);
  url = getRecommendationsUrl(id, type);
  const recomendedMovieReq = httpService.get(url);
  url = getReleaseDetailsUrl(type, id);
  const releaseInfoReq = httpService.get(url);

  const [movieDetails, castCrewResp, videoResponse, watchProviderResp, movieReviewResp, recomendedMovieRes, releaseInfoRes] = await Promise.allSettled([
    movieDetailsReq,
    movieCastCrewReq,
    videoReq,
    watchProviderReq,
    movieReviewReq,
    recomendedMovieReq,
    releaseInfoReq
  ]);
 
  const { runtime } = movieDetails.value;
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;
  const totalRuntime = `${hours}h ${minutes}m`;

  const movieCast = castCrewResp.value.cast.filter((cast) => cast.profile_path !== null);
  const movieCrew = castCrewResp.value.crew.filter(
    (crew) => crew.job === "Director" || crew.job === "Writer"
  );

  const trailerVideo = videoResponse.value.results.filter(
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
        releaseInfo: releaseInfoRes.value
      },
    },
  };
}

export default MovieDetailsPage;
