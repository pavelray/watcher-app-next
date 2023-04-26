import React, { Fragment, useState } from "react";
import ImageFallback from "../../Business/ImageFallback";
import {
  API_IMAGE_URL,
  NO_IMG_PLACEHOLDER_USER,
} from "../../../utils/constants";
import { style } from "./ImageGallary.style";
import { getUid } from "../../../utils/helperMethods";

const ImageGallary = ({ images }) => {
  const [showImageModal, setShowImageModal] = useState(false);
  const [currentImage, setShowCurrentImage] = useState();
  const goToNext = () => {
    const currentImageIndex = images.findIndex((x) => x === currentImage);
    const canGoNext = images.length > currentImageIndex + 1;
    const nextImage = canGoNext && images[currentImageIndex + 1];
    if (canGoNext) setShowCurrentImage(nextImage);
  };
  const goToPrevious = () => {
    const currentImageIndex = images.findIndex((x) => x === currentImage);
    const canGoPrev = 0 <= currentImageIndex - 1;
    const prevImage = canGoPrev && images[currentImageIndex - 1];
    if (canGoPrev) setShowCurrentImage(prevImage);
  };
  const closeHandler = () => {
    setShowImageModal(false);
    setShowCurrentImage();
  };

  const openCurrentImage = (image) => {
    setShowImageModal(true);
    setShowCurrentImage(image);
  };

  return (
    <Fragment>
      <div className="image-container">
        {images.map((image) => (
          <div
            key={getUid()}
            className="image"
            onClick={() => openCurrentImage(image)}
          >
            <ImageFallback
              src={`${API_IMAGE_URL}/w200${image.file_path}`}
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
              alt="Poster"
              fallbackSrc={NO_IMG_PLACEHOLDER_USER}
            />
          </div>
        ))}
      </div>
      {showImageModal && (
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
              />
            </div>
            <div className="control-btn" onClick={goToNext}>
              <span>&gt;</span>
            </div>
          </div>
        </div>
      )}
      <style jsx>{style} </style>
    </Fragment>
  );
};

export default ImageGallary;
