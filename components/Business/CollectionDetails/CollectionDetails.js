import React, { useState } from "react";
import {
  API_IMAGE_URL,
  MEDIA_TYPE,
  NO_IMG_PLACEHOLDER_USER,
} from "../../../utils/constants";
import { getUid } from "../../../utils/helperMethods";
import { Heading, SubHeading } from "../../UI/Typography/Typography";
import ImageFallback from "../ImageFallback";
import MediaCard from "../MediaCard";
import { style } from "./CollectionDetails.style";

const CollectionDetails = ({ collection, id, isMobile }) => {
  const { details } = collection;
  const { images, parts } = details;
  const [showParts, setShowParts] = useState(true);
  const [showPhoto, setShowPhoto] = useState(false);

  const showPartsTab = () => {
    setShowPhoto(false);
    setShowParts(!showParts);
  };

  const showPhotoTab = () => {
    setShowParts(false);
    setShowPhoto(!showPhoto);
  };

  const imageSize = isMobile ? `w200` : `w400`;

  return (
    <div className="page-container">
      <Heading text={details.name} />
      <div className="details-container">
        <div className="person-image-wrapper">
          <div className="image">
            <ImageFallback
              src={`${API_IMAGE_URL}/${imageSize}${details.poster_path}`}
              alt={details.name}
              height={isMobile ? 300 : 576}
              width={isMobile ? 200 : 384}
              fallbackSrc={NO_IMG_PLACEHOLDER_USER}
            />
          </div>
        </div>
        <div className="person-info-wrapper">
          <div
            className="person-details"
            dangerouslySetInnerHTML={{ __html: details.overview }}
          />
        </div>
      </div>
      <div className="nav">
        <button
          className={`nav-buttons ${showParts ? "active" : ""}`}
          onClick={showPartsTab}
        >
          Parts
        </button>
        <button
          className={`nav-buttons ${showPhoto ? "active" : ""}`}
          onClick={showPhotoTab}
        >
          Photos
        </button>
      </div>
      {showPhoto && (
        <div className="wrapper">
          <SubHeading text="Photos" />
          <div className="image-container">
            {images.posters.map((image) => (
              <div key={getUid()} className="image">
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
        </div>
      )}
      {showParts && (
        <div className="wrapper ">
          <SubHeading text="Parts" />
          <div className="image-container">
            {parts.map((part) => (
              <MediaCard
                id={part.id}
                title={part.title}
                poster={part.poster_path}
                type={MEDIA_TYPE.MOVIE}
                key={getUid()}
                {...part}
              />
            ))}
          </div>
        </div>
      )}
      <style jsx>{style}</style>
    </div>
  );
};

export { CollectionDetails };
