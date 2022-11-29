import React, { Fragment } from "react";
import {
  API_IMAGE_URL,
  NO_IMG_PLACEHOLDER_USER,
} from "../../../utils/constants";
import Avatar from "../../UI/Avater/Avatar";
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
            <div className="column">
              <div className="title">{details.name}</div>
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
                  &bull; {new Date(details.first_air_date).getFullYear()}
                </div>
                <div className="stats__other">
                  &bull;{" "}
                  {`Seasons : ${seasons?.length}, Episodes: ${details.number_of_episodes}`}
                </div>
              </div>
              <div className="description">{details.overview}</div>
              {!!trailerVideo.length && (
                <ViewTrailer trailerVideo={trailerVideo} />
              )}
              {!!!trailerVideo.length && (
                <div className="no-trailer">
                  Sorry!! No Trailer available currently.{" "}
                </div>
              )}
              <div className="provider">
                <WatchProvider providers={providers} />
              </div>
            </div>
            <div className="column">
              {!!cast.length && (
                <div className="cast-wrapper">
                  <div className="cast-title">Cast</div>
                  <div className="cast">
                    {cast?.slice(0, 6).map((cast) => (
                      <Avatar
                        imageSrc={`${API_IMAGE_URL}/w154/${cast.profile_path}`}
                        text={cast.name}
                        key={cast.id}
                      />
                    ))}
                  </div>
                </div>
              )}
              {!!crew.length && (
                <div className="cast-wrapper">
                  <div className="cast-title">Crew</div>
                  <div className="cast">
                    {crew?.map((crew) => {
                      const { profile_path } = crew;

                      const avatarImg =
                        profile_path && profile_path !== null
                          ? `${API_IMAGE_URL}/w154/${crew.profile_path}`
                          : NO_IMG_PLACEHOLDER_USER;
                      return (
                        <Avatar
                          imageSrc={avatarImg}
                          text={`${crew.job} ${crew.name}`}
                          key={crew.id}
                        />
                      );
                    })}
                  </div>
                </div>
              )}
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
