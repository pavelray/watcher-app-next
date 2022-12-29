import React from "react";
import HeroComponent from "../../UI/HeroComponent/HeroComponent";
import { Carousel } from "react-responsive-carousel";
import { style } from "./HomeBanner.style";
import carouselStyles from "react-responsive-carousel/lib/styles/carousel.min.css";

const HomeBanner = ({ trendingToday, title }) => {
  const trending = trendingToday;
  return (
    <div className="home-banner">
      <HeroComponent
        key={trending.id}
        title={trending.title || trending.name}
        description={trending.overview}
        imageUrl={trending.backdrop_path}
        type={trending.media_type}
        id={trending.id}
      />
      <style jsx>{style}</style>
    </div>
  );
};

export default HomeBanner;
