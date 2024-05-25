import React, { memo, useCallback, useEffect, useState } from "react";
import {
  API_IMAGE_URL,
  NO_IMG_PLACEHOLDER_USER,
} from "../../../utils/constants";
import { style } from "./ImageGallary.style";
import ImageFallback from "../../Business/ImageFallback";
import { getUid } from "../../../utils/helperMethods";

const ImageCard = ({ images, openCurrentImage }) => {
  const [imagesArr, setImagesArr] = useState(images);

  const setImages = useCallback(() => {
    setImagesArr(images);
  }, [images]);

  useEffect(() => setImages(), []);

  return (
    <>
      {imagesArr.map((image) => (
        <div
          key={getUid()}
          className="image"
          onClick={() => openCurrentImage(image)}
        >
          <ImageFallback
            src={`${API_IMAGE_URL}/w400${image.file_path}`}
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
      <style jsx>{style} </style>
    </>
  );
};

export default memo(ImageCard);
