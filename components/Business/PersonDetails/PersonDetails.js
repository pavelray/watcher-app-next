import Image from "next/image";
import React, { Fragment } from "react";
import {
  API_IMAGE_URL,
  COLLECTION_TYPE,
  FACEBOOK_IMAGE_PATH,
  FACEBOOK_PERSON_LOCATION_URL,
  IMDB_IMAGE_PATH,
  IMDB_PERSON_LOCATION_URL,
  INSTAGRAM_IMAGE_PATH,
  INSTAGRAM_PERSON_LOCATION_URL,
  MEDIA_TYPE,
  TWITTER_IMAGE_PATH,
  TWITTER_PERSON_LOCATION_URL,
} from "../../../utils/constants";
import CardSlider from "../../UI/CardCarousel/CardSlider";
import CompanyIcon from "../../UI/CompanyIcon/CompanyIcon";
import { Heading } from "../../UI/Typography/Typography";
import { style } from "./PersonDetails.style";

const PersonDetails = ({ person }) => {
  const { details, movies, tvSeries, externalIds } = person;

  return (
    <div className="page-container">
      <Heading text={details.name} />
      <div className="details-container">
        <div className="person-image-wrapper">
          <div className="image">
            <Image
              src={`${API_IMAGE_URL}/w400/${details.profile_path}`}
              alt={details.name}
              height={400}
              width={300}
            />
          </div>
          <div className="person-info">
            <span className="label">Known For:</span>{" "}
            {details.known_for_department}
          </div>
          <div className="person-info">
            <span className="label">Birthday:</span>{" "}
            {new Date(details.birthday).toDateString()}
          </div>
          <div className="person-info">
            <span className="label">Popularity:</span> {details.popularity}
          </div>
          <div className="person-info">
            <h2>Social</h2>
            <div className="social-icons">
              <CompanyIcon
                url={`${IMDB_PERSON_LOCATION_URL}/${externalIds.imdb_id}`}
                imageSrc={IMDB_IMAGE_PATH}
                imageAltText="IMDB_icon"
              />
              {externalIds.instagram_id && (
                <CompanyIcon
                  url={`${INSTAGRAM_PERSON_LOCATION_URL}/${externalIds.instagram_id}`}
                  imageSrc={INSTAGRAM_IMAGE_PATH}
                  imageAltText="Instagram_icon"
                />
              )}
              {externalIds.facebook_id && (
                <CompanyIcon
                  url={`${FACEBOOK_PERSON_LOCATION_URL}/${externalIds.facebook_id}`}
                  imageSrc={FACEBOOK_IMAGE_PATH}
                  imageAltText="Facebook_icon"
                />
              )}
              {externalIds.twitter_id && (
                <CompanyIcon
                  url={`${TWITTER_PERSON_LOCATION_URL}/${externalIds.twitter_id}`}
                  imageSrc={TWITTER_IMAGE_PATH}
                  imageAltText="Twitter_icon"
                />
              )}
            </div>
          </div>
        </div>
        <div className="person-info-wrapper">
          <div className="person-details">{details.biography}</div>
        </div>
      </div>
      <div className="person-work">
        <CardSlider
          data={movies}
          title="Movies"
          type={MEDIA_TYPE.MOVIE}
          dataType={COLLECTION_TYPE.POPULAR}
        />
        <CardSlider
          data={tvSeries}
          title="Tv Series"
          type={MEDIA_TYPE.TV_SERIES}
          dataType={COLLECTION_TYPE.POPULAR}
        />
      </div>

      <style jsx>{style}</style>
    </div>
  );
};

export { PersonDetails };
