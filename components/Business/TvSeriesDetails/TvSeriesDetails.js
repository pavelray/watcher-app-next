import axios from "axios";
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
import CardSlider from "../../UI/CardCarousel/CardSlider";
import HeroComponent from "../../UI/HeroComponent/HeroComponent";
import Modal from "../../UI/Modal/Modal";
import { SubHeading } from "../../UI/Typography/Typography";
import CastAndCrew from "../Cast";
import ImageFallback from "../ImageFallback";
import MediaDetailsInfo from "../MediaDetailsInfo/MediaDetailsInfo";
import ReviewsComponent from "../ReviewsComponent/ReviewsComponent";
import SocialIcons from "../SocialIcons/SocialIcons";

import { style } from "./TvSeriesDetails.style";

const TvSeriesDetails = ({ tvSeries, type, id }) => {
  const [viewModal, setViewModal] = useState(false);
  const {
    details,
    cast,
    crew,
    trailerVideo,
    providers,
    recomended,
    reviews,
    contentRating,
    external_ids,
    images,
    latestSeasonDetails,
  } = tvSeries;

  const { number_of_seasons, seasons } = details;
  const totalSeasons = `Season ${number_of_seasons}`;

  const video = { ...trailerVideo.slice(0, 1)[0] };
  const [selectedVideo, setSelectedVideo] = useState(video);
  const [selectSeasonNumber, setSelectedSeasonNumber] =
    useState(number_of_seasons);
  const [selectedSeasion, setSelectedSeason] = useState(latestSeasonDetails);

  const onModalClose = () => {
    setViewModal(false);
  };

  const playVideo = (video) => {
    setSelectedVideo(video);
    setViewModal(true);
  };

  const certificates = getCertificates(
    contentRating,
    details.production_countries,
    type
  );
  const certificate = certificates.map((x) => x.certification).join(", ");
  const meaning = certificates.map((x) => `${x.certification}: ${x.meaning}`);
  const votes = formatNumber(details.vote_count);
  const [showPhoto, setShowPhoto] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showEpisodes, setShowEpisodes] = useState(true);
  const [showReview, setShowReview] = useState(false);

  const showPhotoTab = () => {
    setShowVideo(false);
    setShowReview(false);
    setShowEpisodes(false);
    setShowPhoto(!showPhoto);
  };

  const showVideoTab = () => {
    setShowPhoto(false);
    setShowReview(false);
    setShowEpisodes(false);
    setShowVideo(!showVideo);
  };

  const showReviewTab = () => {
    setShowPhoto(false);
    setShowVideo(false);
    setShowEpisodes(false);
    setShowReview(!showReview);
  };

  const showEpisodesTab = () => {
    setShowPhoto(false);
    setShowVideo(false);
    setShowReview(false);
    setShowEpisodes(!showEpisodes);
  };

  const getSeasionDetails = async (event) => {
    const { value } = event.target;
    const body = {
      id,
      seasonNumber: value,
    };
    setSelectedSeasonNumber(value);
    const responseData = await axios.post("/api/getSeasonDetails", body);
    setSelectedSeason(responseData.data);
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
        runtime={totalSeasons}
        votes={votes}
      />
      <div className="movie-details-container">
        <div className="movie-details-container__main">
          <div className="movie-details-container__main-content">
            <div className="movie-details-image">
              <div className="image">
                <ImageFallback
                  src={`${API_IMAGE_URL}/w400/${details.poster_path}`}
                  alt={details.id}
                  height={400}
                  width={300}
                  fallbackSrc={NO_IMG_PLACEHOLDER_MEDIA}
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
                  type={MEDIA_TYPE.TV_SERIES}
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
          className={`nav-buttons ${showEpisodes ? "active" : ""}`}
          onClick={showEpisodesTab}
        >
          Episodes
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
        {!!reviews.total_results && (
          <button
            className={`nav-buttons ${showReview ? "active" : ""}`}
            onClick={showReviewTab}
          >
            Reviews
          </button>
        )}
      </div>
      {showPhoto && (
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
      {showVideo && (
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
      {showReview && !!reviews.total_results && (
        <div className="review-container">
          <ReviewsComponent reviews={reviews} />
        </div>
      )}
      {showEpisodes && (
        <div className="wrapper">
          <div className="title">
            <select
              className="season-select"
              onChange={getSeasionDetails}
              value={selectSeasonNumber}
            >
              {seasons
                .filter((s) => s.season_number > 0)
                .map((s) => (
                  <option key={getUid()} value={s.season_number}>
                    Season {s.season_number}
                  </option>
                ))}
            </select>
            <span className="episode-number">
              {selectedSeasion.episodes.length > 0
                ? `${selectedSeasion.episodes.length - 1} Episodes`
                : `0 Episode`}
            </span>
          </div>
          <div className="media-container">
            {selectedSeasion.episodes.map((episode) => (
              <div key={getUid()} className="media">
                <div className="media-image">
                  <ImageFallback
                    src={`${API_IMAGE_URL}/w400${episode.still_path}`}
                    fill
                    sizes="100vw"
                    style={{
                      objectFit: "cover",
                    }}
                    alt="Episode Image"
                    fallbackSrc={NO_IMG_PLACEHOLDER_MEDIA}
                  />
                </div>
                <div className="media-title">
                  Episode: {episode.episode_number}
                </div>
                <p className="media-description">{episode.overview}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      {!!recomended.results.length && (
        <div className="recomended-container">
          <CardSlider
            data={recomended.results}
            type={MEDIA_TYPE.TV_SERIES}
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

export default TvSeriesDetails;
