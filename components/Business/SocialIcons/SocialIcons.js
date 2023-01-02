import React from "react";
import {
    FACEBOOK_IMAGE_PATH,
    FACEBOOK_PERSON_LOCATION_URL,
  IMDB_IMAGE_PATH,
  IMDB_LOCATION_URL,
  IMDB_PERSON_LOCATION_URL,
  INSTAGRAM_IMAGE_PATH,
  INSTAGRAM_PERSON_LOCATION_URL,
  MEDIA_TYPE,
  TWITTER_IMAGE_PATH,
  TWITTER_PERSON_LOCATION_URL,
} from "../../../utils/constants";
import CompanyIcon from "../../UI/CompanyIcon/CompanyIcon";
import { style } from "./SocialIcons.style";

const SocialIcons = ({ externalIds, type }) => {
  return (
    <div className="social-icons">
      <CompanyIcon
        url={`${
          type === MEDIA_TYPE.PERSON
            ? IMDB_PERSON_LOCATION_URL
            : IMDB_LOCATION_URL
        }/${externalIds.imdb_id}`}
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
      <style jsx>{style}</style>
    </div>
  );
};

export default SocialIcons;
