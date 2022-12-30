import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import {
  API_IMAGE_URL,
  COLLECTION_TYPE,
  CREDIT_TYPE,
  IMDB_IMAGE_PATH,
  IMDB_LOCATION_URL,
  MEDIA_TYPE,
  movieDetailsStyle,
} from "../../../utils/constants";
import { formatNumber, getCertificates, getImageUrl } from "../../../utils/helperMethods";
import CardSlider from "../../UI/CardCarousel/CardSlider";
import HeroComponent from "../../UI/HeroComponent/HeroComponent";
import Modal from "../../UI/Modal/Modal";
import CastAndCrew from "../Cast";
import MediaDetailsInfo from "../MediaDetailsInfo/MediaDetailsInfo";
import MediaTitle from "../MediaTitle/MediaTitle";
import ReviewsComponent from "../ReviewsComponent/ReviewsComponent";
import ViewTrailer from "../ViewTrailer/ViewTrailer";
import WatchProvider from "../WatchProvider/WatchProvider";

import { style } from "./MovieDetails.style";

const MovieDetails = ({ movie, id, type }) => {
  const [viewModal, setViewModal] = useState(false);
  const {
    details,
    cast,
    crew,
    runtime,
    trailerVideo,
    providers,
    recomended,
    reviews,
    releaseInfo,
  } = movie;
  const video = {...trailerVideo.slice(0, 1)[0]};

  const onModalClose = () => {
    setViewModal(false);
  };

  const certificates = getCertificates(releaseInfo, details.production_countries, type);
  const certificate = certificates.map(x=> x.certification).join(', ');
  const meaning = certificates.map(x=> `${x.certification}: ${x.meaning}`);
  const votes = formatNumber(details.vote_count);

  return (
    <Fragment>
      <HeroComponent
        title={details.title || details.name}
        description={details.overview}
        imageUrl={details.backdrop_path}
        type={details.media_type}
        id={details.id}
        trailerVideo={trailerVideo}
        setViewModal={setViewModal}
        certificate={{certificate,meaning}}
        runtime={runtime}
        votes={votes}
      />
      <div className="movie-details-container">
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
                <MediaTitle
                  details={details}
                  runtime={runtime}
                  releaseInfo={releaseInfo}
                />
                <div className="description">{details.overview}</div>
                <MediaDetailsInfo details={details} />
              </div>
              <div className="movie-details-content__row">
                <CastAndCrew
                  credits={cast.slice(0, 6)}
                  type={CREDIT_TYPE.CAST}
                  title="Cast"
                  id={id}
                  mediaType={type}
                />
                <CastAndCrew
                  credits={crew}
                  type={CREDIT_TYPE.CREW}
                  title="Crew"
                  id={id}
                  mediaType={type}
                />
              </div>
            </div>
            <ReviewsComponent reviews={reviews} />
          </div>
        </div>
      </div>
      {!!recomended.results.length && (
        <div className="recomended-container">
          <CardSlider
            data={recomended.results}
            type={MEDIA_TYPE.MOVIE}
            title="Recomended"
            dataType={COLLECTION_TYPE.RECOMENDED}
          />
        </div>
      )}
      <Modal open={viewModal} onModalClose={onModalClose}>
        <iframe
          className="video-frame"
          key={video.key}
          title={video.type}
          src={`https://www.youtube.com/embed/${video.key}`}
        ></iframe>
      </Modal>
      <style jsx> {style} </style>
    </Fragment>
  );
};

export default MovieDetails;
