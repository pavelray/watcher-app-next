import React, { Fragment } from "react";
import useSWR from "swr";
import { useWithContext } from "../../../hooks/useWithContext";
import { useUserLocation } from "../../../utils/apiHelper";
import { fetcher } from "../../../utils/apiUtills";
import {
  API_IMAGE_URL,
  API_LOCATION_URL,
  NO_IMG_PLACEHOLDER_USER,
} from "../../../utils/constants";
import Avatar from "../../UI/Avater/Avatar";
import { LayoutContext } from "../Layout/LayoutContext";
import ViewTrailer from "../ViewTrailer/ViewTrailer";

import { style } from "./MovieDetails.style";

const movieDetailsStyle = {
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const MovieDetails = ({ movie, location }) => {
  const { details, cast, crew, runtime, trailerVideo } = movie;
  console.log(location);
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
              <div className="description">{details.overview}</div>
              {!!trailerVideo.length && <ViewTrailer trailerVideo={trailerVideo} />}
              {!!!trailerVideo.length && <div className="no-trailer">Sorry!! No Trailer available currently. </div>}
              <div className="provider">
                {/* <WatchProvider id={id} type={type} /> */}
              </div>
            </div>
            <div className="column">
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
            </div>
          </div>
        </div>
      </div>
      <style jsx> {style} </style>
    </Fragment>
  );
};

export default MovieDetails;
