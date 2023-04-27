import React from "react";
import { style } from "./ImageGallary.style";
import { API_IMAGE_URL } from "../../../utils/constants";
import Image from "next/image";

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
          <Image src='/icons/common/left-arrow.png' width="30" height="30" />
        </div>
        <div className="image-with-close">
          <div className="close-wrapper" onClick={closeHandler}>
            <Image src='/icons/common/close.png' width="20" height="20" />
          </div>
          <img
            src={`${API_IMAGE_URL}/original${currentImage.file_path}`}
            className="image-preview"
            alt="selected-product"
            loading="lazy"
          />
          <div className="image-index">{currentIndex}/{totalImages}</div>
        </div>
        <div className="control-btn" onClick={goToNext}>
        <Image src='/icons/common/right-arrow.png' width="30" height="30" />
        </div>
      </div>
      <style jsx>{style} </style>
    </div>
  );
};

export default ImagePreview;
