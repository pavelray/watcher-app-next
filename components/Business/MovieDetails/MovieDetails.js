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
} from "../../../utils/constants";
import {
  formatNumber,
  getCertificates,
  getUid,
  getYoutubeThumbnailSrc,
} from "../../../utils/helperMethods";
import CardSlider from "../../UI/CardCarousel/CardSlider";
import HeroComponent from "../../UI/HeroComponent/HeroComponent";
import Modal from "../../UI/Modal/Modal";
import CastAndCrew from "../Cast";
import MediaDetailsInfo from "../MediaDetailsInfo/MediaDetailsInfo";
import ReviewsComponent from "../ReviewsComponent/ReviewsComponent";
import SocialIcons from "../SocialIcons/SocialIcons";
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
    external_ids,
    images,
  } = movie;
  console.log(movie);
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
  const certificate = certificates.map((x) => x.certification).join(", ");
  const meaning = certificates.map((x) => `${x.certification}: ${x.meaning}`);
  const votes = formatNumber(details.vote_count);
  const [showPhoto, setShowPhoto] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showReview, setShowReview] = useState(true);

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
        title={details.title || details.name}
        description={details.overview}
        imageUrl={details.backdrop_path}
        type={details.media_type}
        id={details.id}
        trailerVideo={trailerVideo}
        setViewModal={setViewModal}
        certificate={{ certificate, meaning }}
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
            </div>
            <div className="movie-details-content">
              <div className="movie-details-content__row">
                <div className="description">
                  <p className="title">Storyline</p>
                  {details.overview}
                </div>
                <MediaDetailsInfo details={details} type={type} crew={crew} />
                {/* <WatchProvider
                  providers={providers}
                  homepage={details.homepage}
                /> */}
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
            </div>
          </div>
        </div>
      </div>
      <div className="nav">
        <button
          className={`nav-buttons ${showReview ? "active" : ""}`}
          onClick={showReviewTab}
        >
          Reviews
        </button>
        <button
          className={`nav-buttons ${showVideo ? "active" : ""}`}
          onClick={showVideoTab}
        >
          Videos
        </button>
        <button
          className={`nav-buttons ${showPhoto ? "active" : ""}`}
          onClick={showPhotoTab}
        >
          Photos
        </button>
      </div>
      {showPhoto && (
        <div className="wrapper">
          <div className="title">Posters</div>
          <div className="image-container">
            {images.posters.map((image) => (
              <div key={getUid()} className="image">
                <Image
                  src={`${API_IMAGE_URL}/w200/${image.file_path}`}
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: "cover",
                  }}
                  alt="Poster"
                />
              </div>
            ))}
          </div>
        </div>
      )}
      {showVideo && (
        <div className="wrapper">
          <div className="title">Videos</div>
          <div className="media-container">
            {trailerVideo.map((video) => (
              <div key={getUid()} className="media">
                <div className="media-image">
                  <Image
                    src={`${getYoutubeThumbnailSrc(video.key)}`}
                    fill
                    sizes="100vw"
                    style={{
                      objectFit: "cover",
                    }}
                    alt="Video"
                  />
                  <span
                    className="material-symbols-outlined icon-play"
                    onClick={() => playVideo(video)}
                  >
                    play_circle
                  </span>
                </div>
                <div className="media-title">{video.name}</div>
              </div>
            ))}
          </div>
        </div>
      )}
      {showReview && (
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
