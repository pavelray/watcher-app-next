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
  APP_NAME,
  DEFAULT_COUNTRY_CODE,
  MEDIA_TYPE,
  VIDEO_TYPE,
} from "../../utils/constants";
import {
  getGenreText,
  getLocationCookie,
  getRuntime,
} from "../../utils/helperMethods";
import httpService from "../../utils/httpService";

const MovieDetailsPage = ({ slugTitle, movie, id, type }) => {
  const { details, crew } = movie;
  const { title, release_date, genres } = details;
  const { director } = crew;
  const directorName = director[0].name;
  const releaseYear = new Date(release_date).getFullYear();
  const genreText = getGenreText(genres);
  return (
    <Fragment>
      <Head>
        <title>
          {title} | {releaseYear}{" "}
        </title>
        <meta
          name="description"
          content={`${title} Release date ${release_date}. Read reviews, watch trailers and get details at ${APP_NAME}.`}
        />
        <meta
          name="keywords"
          content={`${title}, ${releaseYear}, ${genreText}, ${directorName}, movie theater, details, trailers, reviews`}
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content={APP_NAME} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={`${title} - ${releaseYear}`} />
        <meta property="og:type" content="video.movie" />
        <meta
          property="og:description"
          content={`${title} is a ${genreText} film directed by ${directorName}. Release date ${release_date}. Read reviews, watch trailers and get showtimes at ${APP_NAME}.`}
        />
        <meta property="og:site_name" content={window.location.host} />
        <meta property="og:locale" content="en_US" />
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
  const director = credits.crew.filter((crew) => crew.job === "Director");
  const writer = credits.crew.filter((crew) => crew.job === "Writer");

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
        crew: { director, writer },
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
