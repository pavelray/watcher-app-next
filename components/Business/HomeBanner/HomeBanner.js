import React, { useState } from "react";
import HeroComponent from "../../UI/HeroComponent/HeroComponent";
import { style } from "./HomeBanner.style";
import {
  formatNumber,
  getCertificates,
  getRuntime,
} from "../../../utils/helperMethods";
import { MEDIA_TYPE } from "../../../utils/constants";
import Modal from "../../UI/Modal/Modal";

const HomeBanner = ({ trendingToday, isMobile }) => {
  const trending = trendingToday;
  const certificatesValue =
    trending.media_type === MEDIA_TYPE.MOVIE
      ? trending.release_dates
      : trending.content_ratings;

  const certificates = getCertificates(
    certificatesValue,
    trending.production_countries,
    trending.media_type
  );
  const certificate = certificates?.map((x) => x.certification).join(", ");
  const meaning = certificates?.map((x) => `${x.certification}: ${x.meaning}`);
  const video = { ...trending.videos.results.slice(0, 1)[0] };
  const [viewModal, setViewModal] = useState(false);

  const onModalClose = () => {
    setViewModal(false);
  };

  const voteCount = formatNumber(trending.vote_count);
  const totalRuntime = trending.media_type === MEDIA_TYPE.MOVIE ? getRuntime(trending.runtime): `Season ${trending.number_of_seasons}`;
  return (
    <div className="home-banner">
      <HeroComponent
        key={trending.id}
        title={trending.title || trending.name}
        description={trending.overview}
        imageUrl={trending.backdrop_path}
        type={trending.media_type}
        id={trending.id}
        trailerVideo={trending.videos.results}
        year={trending.release_date || trending.first_air_date}
        certificate={{ certificate, meaning }}
        runtime={totalRuntime}
        voteCount={voteCount}
        rating={trending.vote_average}
        isMobile={isMobile}
        setViewModal={setViewModal}
        isHome={true}
      />
      <Modal open={viewModal} onModalClose={onModalClose}>
        <iframe
          className="video-frame"
          key={video.key}
          title={video.type}
          allow="autoplay"
          src={`https://www.youtube.com/embed/${video.key}?autoplay=1`}
        ></iframe>
      </Modal>
      <style jsx>{style}</style>
    </div>
  );
};

export default HomeBanner;
