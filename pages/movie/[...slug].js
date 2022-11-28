import Head from "next/head";
import { Fragment } from "react";
import MovieDetails from "../../components/Business/MovieDetails";
import { useUserLocation } from "../../utils/apiHelper";
import {
  getMovieCastDetailsDataAPIUrl,
  getMovieDetailsDataAPIUrl,
  getMovieVideosUrl,
} from "../../utils/apiUtills";
import { MEDIA_TYPE, VIDEO_TYPE } from "../../utils/constants";
import httpService from "../../utils/httpService";


const MovieDetailsPage = ({ slugTitle, movie }) => {
  return (
    <Fragment>
      <Head>
        <title>Moviezine - {slugTitle}</title>
        <meta
          name="description"
          content="Details information of the Movie"
        />
      </Head>
      <MovieDetails movie={movie} />
    </Fragment>
  );
};

export async function getServerSideProps(context) {
  const type = MEDIA_TYPE.MOVIE;
  const { query } = context;
  const { slug } = query;
  const id = slug[0];
  const slugTitle = slug[1];

  let url = getMovieDetailsDataAPIUrl(type, id);
  const movieDetails = await httpService.get(url);
  const { runtime } = movieDetails;
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;
  const totalRuntime = `${hours}h ${minutes}m`;

  url = getMovieCastDetailsDataAPIUrl(type, id);
  const data = await httpService.get(url);
  const movieCast = data.cast.filter((cast) => cast.profile_path !== null);
  const movieCrew = data.crew.filter(
    (crew) => crew.job === "Director" || crew.job === "Producer"
  );

  url = getMovieVideosUrl(id, type);
  const videoResponse =  await httpService.get(url);;
  const trailerVideo = videoResponse.results.filter(video => video.type === VIDEO_TYPE.TRAILER);

  return {
    props: {
      id,
      type: MEDIA_TYPE.MOVIE,
      slugTitle,
      movie: {
        details: movieDetails,
        cast: movieCast,
        crew: movieCrew,
        runtime: totalRuntime,
        trailerVideo
      },
    },
  };
}

export default MovieDetailsPage;
