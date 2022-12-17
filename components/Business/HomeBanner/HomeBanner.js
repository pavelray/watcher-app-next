import React from "react";
import HeroComponent from "../../UI/HeroComponent/HeroComponent";
import { Carousel } from "react-responsive-carousel";
import { style } from "./HomeBanner.style";
import carouselStyles from "react-responsive-carousel/lib/styles/carousel.min.css";

const HomeBanner = ({ trendingToday, title }) => {
  return (
    <div className="home-banner">
      <div className="heading">{title}</div>
      <Carousel>
        {trendingToday.map((trending) => (
          <HeroComponent
            key={trending.id}
            title={trending.title || trending.name}
            description={trending.overview}
            imageUrl={trending.backdrop_path}
          />
        ))}
      </Carousel>
      <style jsx>{style}</style>
    </div>
  );
};

export default HomeBanner;
