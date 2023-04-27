import React, { Fragment, useState } from "react";
import { style } from "./ImageGallary.style";
import ImagePreview from "./ImagePreview";
import ImageCard from "./ImageCard";

const ImageGallary = ({ images }) => {
  const [showImageModal, setShowImageModal] = useState(false);
  const [currentImage, setShowCurrentImage] = useState();
  const [currentIndex, setCurrentIndex] = useState();
  const totalImages = images.length;

  const goToNext = () => {
    const currentImageIndex = images.findIndex((x) => x === currentImage);
    setCurrentIndex(currentImageIndex + 1);
    const canGoNext = images.length > currentImageIndex + 1;
    const nextImage = canGoNext && images[currentImageIndex + 1];
    if (canGoNext) setShowCurrentImage(nextImage);
  };
  const goToPrevious = () => {
    const currentImageIndex = images.findIndex((x) => x === currentImage);
    setCurrentIndex(currentImageIndex + 1);
    const canGoPrev = 0 <= currentImageIndex - 1;
    const prevImage = canGoPrev && images[currentImageIndex - 1];
    if (canGoPrev) setShowCurrentImage(prevImage);
  };
  const closeHandler = () => {
    setShowImageModal(false);
    setShowCurrentImage();
  };

  const openCurrentImage = (image) => {
    const currentImageIndex = images.findIndex((x) => x === image);
    setCurrentIndex(currentImageIndex + 1);
    setShowImageModal(true);
    setShowCurrentImage(image);
  };

  return (
    <Fragment>
      <div className="image-container">
        <ImageCard images={images} openCurrentImage={openCurrentImage} />
      </div>
      {showImageModal && (
        <ImagePreview
          goToPrevious={goToPrevious}
          closeHandler={closeHandler}
          currentImage={currentImage}
          goToNext={goToNext}
          totalImages={totalImages}
          currentIndex={currentIndex}
        />
      )}
      <style jsx>{style} </style>
    </Fragment>
  );
};

export default ImageGallary;
