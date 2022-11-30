import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import {
  API_IMAGE_URL,
  CREDIT_TYPE,
  IMDB_IMAGE_PATH,
  IMDB_LOCATION_URL,
} from "../../../utils/constants";
import CastAndCrew from "../Cast";
import ViewTrailer from "../ViewTrailer/ViewTrailer";
import WatchProvider from "../WatchProvider/WatchProvider";

import { style } from "./MovieDetails.style";

const movieDetailsStyle = {
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const MovieDetails = ({ movie }) => {
  const { details, cast, crew, runtime, trailerVideo, providers } = movie;
  return (
    <Fragment>
      <div
        className="movie-details-container"
        style={{
          ...movieDetailsStyle,
          backgroundImage: `url(${API_IMAGE_URL}/original/${details?.backdrop_path})`,
        }}
      >
        <div className="movie-details-container__main">
          <div className="movie-details-container__main-content">
            <div className="movie-details-image">
              <div className="image">
                <Image
                  src={`${API_IMAGE_URL}/w400/${details.poster_path}`}
                  alt={details.id}
                  height={400}
                  width={300}
                />
              </div>
              <div className="provider">
                <WatchProvider
                  providers={providers}
                  homepage={details.homepage}
                />
              </div>
              <div className="icons">
                <h2>More Info</h2>
                <Link
                  href={`${IMDB_LOCATION_URL}/${details.imdb_id}`}
                  passHref
                  legacyBehavior
                >
                  <a target="_blank">
                    <Image
                      src={IMDB_IMAGE_PATH}
                      alt="IMDB_icon"
                      height={40}
                      width={40}
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="movie-details-content">
              <div className="movie-details-content__row">
                <div className="title">{details.title}</div>
                <div className="tagline">{details.tagline}</div>
                <div className="stats">
                  <div>{details.vote_average?.toFixed(2)}</div>
                  <div>/{details.vote_count}</div>
                  <div className="stats__genre">
                    {details?.genres?.map((x) => x.name).join(", ")}
                  </div>
                </div>
                <div className="stats">
                  <div className="stats__other">{details.status}</div>
                  <div className="stats__other">
                    &bull; {new Date(details.release_date).getFullYear()}
                  </div>
                  <div className="stats__other">&bull; {runtime}</div>
                </div>
                <div className="info">
                  <span className="info-label">Country Origin: </span>
                  {details.production_countries[0]?.name}
                </div>
                {!!details.spoken_languages.length && (
                  <div className="info">
                    <span className="info-label">Languages: </span>
                    {details.spoken_languages
                      .filter((x) => x.name)
                      .map((x) => x.name)
                      .join(", ")}
                  </div>
                )}
                <div className="description">{details.overview}</div>
                {!!trailerVideo.length && (
                  <ViewTrailer trailerVideo={trailerVideo} />
                )}
                {!!!trailerVideo.length && (
                  <div className="no-trailer">
                    Sorry!! No Trailer available currently.{" "}
                  </div>
                )}
              </div>
              <div className="movie-details-content__row">
                <CastAndCrew
                  credits={cast.slice(0, 6)}
                  type={CREDIT_TYPE.CAST}
                  title="Cast"
                />
                <CastAndCrew credits={crew} type={CREDIT_TYPE.CREW} title="Crew" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx> {style} </style>
    </Fragment>
  );
};

export default MovieDetails;
