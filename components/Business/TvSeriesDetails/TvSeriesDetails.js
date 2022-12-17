import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import {
  API_IMAGE_URL,
  CREDIT_TYPE,
  IMDB_IMAGE_PATH,
  IMDB_LOCATION_URL,
  MEDIA_TYPE,
  movieDetailsStyle,
} from "../../../utils/constants";
import { getImageUrl } from "../../../utils/helperMethods";
import CompanyIcon from "../../UI/CompanyIcon/CompanyIcon";
import CastAndCrew from "../Cast";
import MediaDetailsInfo from "../MediaDetailsInfo/MediaDetailsInfo";
import MediaTitle from "../MediaTitle/MediaTitle";
import ReviewsComponent from "../ReviewsComponent/ReviewsComponent";
import TvSeasons from "../TvSeasons/TvSeasons";
import ViewTrailer from "../ViewTrailer/ViewTrailer";
import WatchProvider from "../WatchProvider/WatchProvider";

import { style } from "./TvSeriesDetails.style";

const TvSeriesDetails = ({ tvSeries }) => {
  const {
    details,
    cast,
    crew,
    trailerVideo,
    providers,
    reviews,
    contentRating,
    externalIds,
  } = tvSeries;

  const populateImageUrl = (path) => {
    const fullPath = `${API_IMAGE_URL}/original/`;
    return getImageUrl(path, fullPath);
  };

  return (
    <Fragment>
      <div
        className="movie-details-container"
        style={{
          ...movieDetailsStyle,
          backgroundImage: `url(${populateImageUrl(details.backdrop_path)})`,
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
              <WatchProvider
                providers={providers}
                homepage={details.homepage}
              />
              <div className="icons">
                <h2>More Info</h2>
                <CompanyIcon
                  url={`${IMDB_LOCATION_URL}/${externalIds.imdb_id}`}
                  imageSrc={IMDB_IMAGE_PATH}
                  imageAltText="IMDB_icon"
                />
              </div>
              {!!details.networks.length && (
                <div className="icons">
                  <h2>Networks</h2>
                  {details.networks.map((network) => (
                    <CompanyIcon
                      key={network.id}
                      imageSrc={`${API_IMAGE_URL}/original/${network.logo_path}`}
                      imageAltText="IMDB_icon"
                      width={60}
                      height={25}
                      title={network.name}
                    />
                  ))}
                </div>
              )}
            </div>
            <div className="movie-details-content">
              <div className="movie-details-content__row">
                <MediaTitle
                  details={details}
                  runtime={`${details.number_of_episodes} episodes`}
                  type={MEDIA_TYPE.TV_SERIES}
                  releaseInfo={contentRating}
                />
                <div className="description">{details.overview}</div>
                <ViewTrailer trailerVideo={trailerVideo} />
                <MediaDetailsInfo details={details} />
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
            <TvSeasons seasons={details.seasons} />
            <ReviewsComponent reviews={reviews} />
          </div>
        </div>
      </div>
      {/* <SeasonDetails seasonDetails={seasonDetails} /> */}
      <style jsx> {style} </style>
    </Fragment>
  );
};

export default TvSeriesDetails;
