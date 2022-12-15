import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import {
  API_IMAGE_URL,
  CREDIT_TYPE,
  IMDB_IMAGE_PATH,
  IMDB_LOCATION_URL,
  NO_IMG_PLACEHOLDER_USER,
} from "../../../utils/constants";
import Avatar from "../../UI/Avater/Avatar";
import CastAndCrew from "../Cast";
import MediaTitle from "../MediaTitle/MediaTitle";
import SeasonDetails from "../SeasonDetails";
import ViewTrailer from "../ViewTrailer/ViewTrailer";
import WatchProvider from "../WatchProvider/WatchProvider";

import { style } from "./TvSeriesDetails.style";

const movieDetailsStyle = {
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const TvSeriesDetails = ({ tvSeries }) => {
  const {
    details,
    cast,
    crew,
    seasons,
    seasonDetails,
    trailerVideo,
    providers,
  } = tvSeries;
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
                <MediaTitle details={details} runtime={`${details.number_of_episodes} episodes`}/>
                <div className="stats">
                  <div>{details.vote_average?.toFixed(2)}</div>
                  <div>/{details.vote_count}</div>
                </div>
                <div className="stats">
                  <div className="stats__other">{details.status}</div>
                  <div className="stats__other">
                    &bull; {new Date(details.first_air_date).getFullYear()}
                  </div>
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
                <CastAndCrew
                  credits={crew}
                  type={CREDIT_TYPE.CREW}
                  title="Crew"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <SeasonDetails seasonDetails={seasonDetails} />
      <style jsx> {style} </style>
    </Fragment>
  );
};

export default TvSeriesDetails;
