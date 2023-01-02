import React, { Fragment } from "react";
import Router from "next/router";
import {
  API_IMAGE_URL,
  MEDIA_TYPE,
  NO_IMG_PLACEHOLDER_MEDIA,
} from "../../../utils/constants";
import Card from "../../UI/Card/Card";
import { getGenre, getImage, slugify } from "../../../utils/helperMethods";
import ProfileCard from "../../UI/Card/ProfileCard";

export const MediaCard = (props) => {
  const { poster, id, title, type, genre_ids, vote_average, ...otherProps } =
    props;
  const { name, popularity, known_for_department, profile_path, gender } =
    props;

  const genre = getGenre(genre_ids, type);
  const imagePath = poster || profile_path;
  
  const posterImg = getImage(imagePath);

  const redirectToDetails = () => {
    if (type !== MEDIA_TYPE.PERSON)
      Router.push(`/${type}/${id}/${slugify(title)}`);
    else Router.push(`/${type}/${id}/`);
  };
  return (
    <Fragment>
      {type === MEDIA_TYPE.PERSON ? (
        <ProfileCard
          id={id}
          poster={posterImg}
          title={name}
          ratings={popularity}
          description={`Known For: ${known_for_department}`}
          gender={gender}
          redirectToDetails={redirectToDetails}
        />
      ) : (
        <Card
          poster={posterImg}
          title={title}
          ratings={vote_average?.toFixed(2)}
          genre={genre?.split(",").join(", ")}
          {...otherProps}
          redirectToDetails={redirectToDetails}
        />
      )}
    </Fragment>
  );
};
