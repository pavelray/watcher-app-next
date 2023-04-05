import Image from "next/image";
import React, { Fragment, useState } from "react";
import {
  API_IMAGE_URL,
  COLLECTION_TYPE,
  CREDIT_TYPE,
  MEDIA_TYPE,
  NO_IMG_PLACEHOLDER_MEDIA,
} from "../../../utils/constants";
import {
  formatNumber,
  getCertificates,
  getUid,
  getYoutubeThumbnailSrc,
} from "../../../utils/helperMethods";
import MediaCard from "../../Business/MediaCard";
import CardSlider from "../../UI/CardCarousel/CardSlider";
import HeroComponent from "../../UI/HeroComponent/HeroComponent";
import Modal from "../../UI/Modal/Modal";
import { SubHeading } from "../../UI/Typography/Typography";
import CastAndCrew from "../Cast";
import ImageFallback from "../ImageFallback";
import MediaDetailsInfo from "../MediaDetailsInfo/MediaDetailsInfo";
import ReviewsComponent from "../ReviewsComponent/ReviewsComponent";
import SocialIcons from "../SocialIcons/SocialIcons";
import WatchProvider from "../WatchProvider/WatchProvider";

import { style } from "./MovieDetails.style";

const MovieDetails = ({ movie, id, type, isMobile }) => {
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
    external_ids,
    images,
  } = movie;
  const { adult, belongs_to_collection, vote_average } = details;
  const video = { ...trailerVideo.slice(0, 1)[0] };
  const [selectedVideo, setSelectedVideo] = useState(video);

  const onModalClose = () => {
    setViewModal(false);
  };

  const playVideo = (video) => {
    setSelectedVideo(video);
    setViewModal(true);
  };

  const certificates = getCertificates(
    releaseInfo,
    details.production_countries,
    type
  );
  const certificate = certificates.map((x) => x && x.certification).join(", ");
  const meaning = certificates.map((x) => x && `${x.certification}: ${x.meaning}`);
  const voteCount = formatNumber(details.vote_count);
  const [showPhoto, setShowPhoto] = useState(false);
  const [showVideo, setShowVideo] = useState(true);
  const [showReview, setShowReview] = useState(false);

  const showPhotoTab = () => {
    setShowVideo(false);
    setShowReview(false);
    setShowPhoto(!showPhoto);
  };

  const showVideoTab = () => {
    setShowPhoto(false);
    setShowReview(false);
    setShowVideo(!showVideo);
  };

  const showReviewTab = () => {
    setShowPhoto(false);
    setShowVideo(false);
    setShowReview(!showReview);
  };

  return (
    <Fragment>
      <HeroComponent
        title={details.title}
        description={details.overview}
        imageUrl={details.backdrop_path}
        type={details.media_type || type}
        id={details.id}
        trailerVideo={trailerVideo}
        setViewModal={setViewModal}
        certificate={{ certificate, meaning }}
        runtime={runtime}
        isMobile={isMobile}
        voteCount={voteCount}
        rating={vote_average}
        year={details.release_date}
        status={details.status}
      />
      <div className="movie-details-container">
        <div className="movie-details-container__main">
          <div className="movie-details-container__main-content">
            <div className="movie-details-image">
              <div className="image">
                <ImageFallback
                  src={`${API_IMAGE_URL}/w400/${details.poster_path}`}
                  alt={details.id}
                  height={576}
                  width={384}
                  fallbackSrc={NO_IMG_PLACEHOLDER_MEDIA}
                />
              </div>
            </div>
            <div className="movie-details-content">
              <div className="movie-details-content__row">
                <div className="description">
                  <p className="title">
                    Storyline {adult && <span className="warning">Adult</span>}
                  </p>
                  {details.overview}
                </div>
                <MediaDetailsInfo details={details} type={type} crew={crew} />
                <WatchProvider
                  providers={providers}
                  homepage={details.homepage}
                />
                <SocialIcons
                  externalIds={external_ids}
                  type={MEDIA_TYPE.MOVIE}
                />
              </div>
              <div className="movie-details-content__row">
                <CastAndCrew
                  credits={cast.slice(0, 6)}
                  type={CREDIT_TYPE.CAST}
                  title="Cast"
                  id={id}
                  mediaType={type}
                />
              </div>
              {belongs_to_collection && (
                <div>
                  <h1> Collection: </h1>
                  <MediaCard
                    key={`${getUid()}`}
                    id={belongs_to_collection.id}
                    title={belongs_to_collection.name}
                    poster={belongs_to_collection.poster_path}
                    type={MEDIA_TYPE.COLLECTION}
                    showRatings={false}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="nav">
        {!!trailerVideo.length && (
          <button
            className={`nav-buttons ${showVideo ? "active" : ""}`}
            onClick={showVideoTab}
          >
            Videos
          </button>
        )}
        {!!images.posters.length && (
          <button
            className={`nav-buttons ${showPhoto ? "active" : ""}`}
            onClick={showPhotoTab}
          >
            Photos
          </button>
        )}
        {!!reviews.results.length && (
          <button
            className={`nav-buttons ${showReview ? "active" : ""}`}
            onClick={showReviewTab}
          >
            Reviews
          </button>
        )}
      </div>
      {!!images.posters.length && showPhoto && (
        <div className="wrapper">
          <SubHeading text="Posters" />
          <div className="image-container">
            {images.posters.map((image) => (
              <div key={getUid()} className="image">
                <ImageFallback
                  src={`${API_IMAGE_URL}/w200/${image.file_path}`}
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: "cover",
                  }}
                  alt="Poster"
                  fallbackSrc={NO_IMG_PLACEHOLDER_MEDIA}
                />
              </div>
            ))}
          </div>
        </div>
      )}
      {!!trailerVideo.length && showVideo && (
        <div className="wrapper">
          <SubHeading text="Videos" />

          <div className="media-container">
            {trailerVideo.map((video) => (
              <div key={getUid()} className="media">
                <div className="media-image">
                  <ImageFallback
                    src={`${getYoutubeThumbnailSrc(video.key)}`}
                    fill
                    sizes="100vw"
                    style={{
                      objectFit: "cover",
                    }}
                    alt="Video"
                    fallbackSrc={NO_IMG_PLACEHOLDER_MEDIA}
                  />
                  <span className=" icon-play" onClick={() => playVideo(video)}>
                    <Image
                      src="/icons/common/play.png"
                      alt=""
                      width={55}
                      height={55}
                      title="Play Video"
                    />
                  </span>
                </div>
                <div className="media-title">{video.name}</div>
              </div>
            ))}
          </div>
        </div>
      )}
      {!!reviews.results.length && showReview && (
        <div className="review-container">
          <ReviewsComponent reviews={reviews} />
        </div>
      )}

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
          key={selectedVideo.key}
          title={selectedVideo.type}
          allow="autoplay"
          src={`https://www.youtube.com/embed/${selectedVideo.key}?autoplay=1`}
        ></iframe>
      </Modal>
      <style jsx> {style} </style>
    </Fragment>
  );
};

export default MovieDetails;
