import React, { Fragment } from "react";
import Router from "next/router";
import {
  API_IMAGE_URL,
  MEDIA_TYPE,
  NO_IMG_PLACEHOLDER_MEDIA,
} from "../../../utils/constants";
import Card from "../../UI/Card/Card";
import { getGenre, slugify } from "../../../utils/helperMethods";
import ProfileCard from "../../UI/Card/ProfileCard";

export const MediaCard = (props) => {
  const { poster, id, title, type, genre_ids, vote_average, ...otherProps } = props;
  const { name , popularity , known_for_department, profile_path, gender} = props;
  
  const genre = getGenre(genre_ids, type);
  const getImage = () => {
    const imageName = poster ? `${API_IMAGE_URL}/w200${poster}` : `${API_IMAGE_URL}/w200${profile_path}`
    return imageName
  }

  const posterImg = getImage() || NO_IMG_PLACEHOLDER_MEDIA;

  const redirectToDetails = () => {
    Router.push(`/${type}/${id}/${slugify(title)}`);
  };
  return (
    <Fragment>
      {type === MEDIA_TYPE.PERSON ? (
        <ProfileCard
          id={id}
          poster={posterImg}
          title={name}
          ratings={popularity}
          department={known_for_department}
          gender={gender}
          redirectToDetails={redirectToDetails}
        />
      ) : (
        <Card
          poster={posterImg}
          title={title}
          ratings={vote_average.toFixed(2)}
          genre={genre.split(",").join(", ")}
          {...otherProps}
          redirectToDetails={redirectToDetails}
        />
      )}
    </Fragment>
  );
};
