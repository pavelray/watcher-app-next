import React from "react";
import { style } from "./ImageGallary.style";
import { API_IMAGE_URL } from "../../../utils/constants";

const ImagePreview = ({
  goToPrevious,
  closeHandler,
  currentImage,
  goToNext,
  currentIndex,
  totalImages
}) => {
  return (
    <div className="image-preview-main">
      <div className="image-preview-wrapper">
        <div className="control-btn" onClick={goToPrevious}>
          <span>&lt;</span>
        </div>
        <div className="image-with-close">
          <span className="close-wrapper" onClick={closeHandler}>
            &#88;
          </span>
          <img
            src={`${API_IMAGE_URL}/original${currentImage.file_path}`}
            className="image-preview"
            alt="selected-product"
            loading="lazy"
          />
          <div className="image-index">{currentIndex}/{totalImages}</div>
        </div>
        <div className="control-btn" onClick={goToNext}>
          <span>&gt;</span>
        </div>
      </div>
      <style jsx>{style} </style>
    </div>
  );
};

export default ImagePreview;
