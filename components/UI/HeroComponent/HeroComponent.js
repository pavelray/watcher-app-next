import React from "react";
import { API_IMAGE_URL } from "../../../utils/constants";
import { getImageUrl } from "../../../utils/helperMethods";
import { style } from "./HeroComponent.style";

const HeroComponent = ({ title, description, imageUrl }) => {
  const populateImageUrl = (path) => {
    const fullPath = `${API_IMAGE_URL}/original/`;
    return getImageUrl(path, fullPath);
  };

  return (
    <div
      className="hero-container"
      style={{
        backgroundImage: `url(${populateImageUrl(imageUrl)})`,
      }}
    >
      <div className="hero-container-image__container">
        <div className="content">
          <div className="content-title">{title}</div>
          <p className="content-details">{description}</p>
        </div>
      </div>

      <style jsx>{style}</style>
    </div>
  );
};

export default HeroComponent;
