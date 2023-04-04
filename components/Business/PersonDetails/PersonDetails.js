import React, { useState } from "react";
import {
  API_IMAGE_URL,
  MEDIA_TYPE,
  NO_IMG_PLACEHOLDER_USER,
} from "../../../utils/constants";
import { getAge, getUid } from "../../../utils/helperMethods";
import { Heading, SubHeading } from "../../UI/Typography/Typography";
import ImageFallback from "../ImageFallback";
import MediaCard from "../MediaCard";
import SocialIcons from "../SocialIcons/SocialIcons";
import { style } from "./PersonDetails.style";

const PersonDetails = ({ person, id, isMobile }) => {
  const { details } = person;
  const { combined_credits, external_ids, images } = details;

  const [showPhoto, setShowPhoto] = useState(false);
  const [showKnownFor, setShowKnownFor] = useState(true);
  const [showCredits, setShowCredits] = useState(false);

  const showPhotoTab = () => {
    setShowKnownFor(false);
    setShowCredits(false);
    setShowPhoto(!showPhoto);
  };

  const showKnownForTab = () => {
    setShowPhoto(false);
    setShowCredits(false);
    setShowKnownFor(!showKnownFor);
  };

  const showCreditsTab = () => {
    setShowPhoto(false);
    setShowKnownFor(false);
    setShowCredits(!showCredits);
  };
  const imageSize = isMobile ? `w200` : `w400`;

  return (
    <div className="page-container">
      <Heading text={details.name} />
      <div className="details-container">
        <div className="person-image-wrapper">
          <div className="image">
            <ImageFallback
              src={`${API_IMAGE_URL}/${imageSize}${details.profile_path}`}
              alt={details.name}
              height={isMobile ? 300 : 576}
              width={isMobile ? 200 : 384}
              fallbackSrc={NO_IMG_PLACEHOLDER_USER}
            />
          </div>
          <div className="person-info">
            <span className="label">Age:</span> {getAge(details.birthday)}
          </div>
          <div className="person-info">
            <span className="label">Known For:</span>{" "}
            {details.known_for_department}
          </div>
          <div className="person-info">
            <span className="label">From:</span> {details.place_of_birth}
          </div>
          <div className="person-info">
            <span className="label">Popularity:</span> {details.popularity}
          </div>
          <div className="person-info">
            <h2>Social</h2>
            <SocialIcons externalIds={external_ids} type={MEDIA_TYPE.PERSON} />
          </div>
        </div>
        <div className="person-info-wrapper">
          <div
            className="person-details"
            dangerouslySetInnerHTML={{ __html: details.biography }}
          />
        </div>
      </div>
      <div className="nav">
        <button
          className={`nav-buttons ${showKnownFor ? "active" : ""}`}
          onClick={showKnownForTab}
        >
          Known For
        </button>
        <button
          className={`nav-buttons ${showCredits ? "active" : ""}`}
          onClick={showCreditsTab}
        >
          Credits
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
            {images.profiles.map((image) => (
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
      {showKnownFor && (
        <div className="wrapper">
          <SubHeading text="Known for" />
          <div className="image-container">
            {combined_credits.cast?.map((tr) => {
              return (
                <MediaCard
                  key={getUid()}
                  id={tr.id}
                  title={tr.title || tr.name}
                  poster={tr.poster_path || tr.profile_path}
                  type={tr.media_type}
                  {...tr}
                />
              );
            })}
          </div>
        </div>
      )}
      {showCredits && (
        <div className="wrapper">
          <SubHeading text="Known for" />
          <div className="image-container">
            <ul>
              {combined_credits.cast?.map((credit) => {
                return (
                  <li key={getUid()}>
                    <span>
                      {credit.release_date
                        ? new Date(credit.release_date).getFullYear()
                        : ""}
                    </span>
                    &nbsp; {credit.media_type === MEDIA_TYPE.MOVIE ? credit.title : credit.name} as {credit.character}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
      <style jsx>{style}</style>
    </div>
  );
};

export { PersonDetails };
