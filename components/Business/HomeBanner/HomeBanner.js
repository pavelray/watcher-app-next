import React from "react";
import HeroComponent from "../../UI/HeroComponent/HeroComponent";
import { Carousel } from "react-responsive-carousel";
import { style } from "./HomeBanner.style";
import carouselStyles from "react-responsive-carousel/lib/styles/carousel.min.css";
import ViewTrailer from "../ViewTrailer/ViewTrailer";
import { formatNumber, getCertificates, getRuntime } from "../../../utils/helperMethods";

const HomeBanner = ({ trendingToday }) => {
  const trending = trendingToday;
  console.log(trending);
  const certificate = getCertificates(
    trending.release_dates,
    trending.production_countries,
    trending.media_type
  );
  const votes = formatNumber(trending.vote_count);
  const totalRuntime = getRuntime(trending.runtime);
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
        certificate={certificate}
        runtime={totalRuntime}
        votes={votes}
      />
      <style jsx>{style}</style>
    </div>
  );
};

export default HomeBanner;
