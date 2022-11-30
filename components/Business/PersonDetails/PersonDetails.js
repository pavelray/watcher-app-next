import Image from "next/image";
import React, { Fragment } from "react";
import {
  API_IMAGE_URL,
  COLLECTION_TYPE,
  MEDIA_TYPE,
} from "../../../utils/constants";
import CardSlider from "../../UI/CardCarousel/CardSlider";
import { style } from "./PersonDetails.style";

const PersonDetails = ({ person }) => {
  const { details, movies, tvSeries } = person;

  return (
    <Fragment>
      <h1>{details.name}</h1>
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
        </div>
        <div className="person-info-wrapper">
          <div className="person-details">{details.biography}</div>
        </div>
      </div>
      <div>
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
    </Fragment>
  );
};

export { PersonDetails };
