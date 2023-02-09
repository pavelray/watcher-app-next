import React from "react";
import HeroComponent from "../../UI/HeroComponent/HeroComponent";
import { style } from "./HomeBanner.style";
import {
  formatNumber,
  getCertificates,
  getRuntime,
} from "../../../utils/helperMethods";
import { MEDIA_TYPE } from "../../../utils/constants";

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

  const votes = formatNumber(trending.vote_count);
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
        certificate={{ certificate, meaning }}
        runtime={totalRuntime}
        votes={votes}
        isMobile={isMobile}
      />
      <style jsx>{style}</style>
    </div>
  );
};

export default HomeBanner;
