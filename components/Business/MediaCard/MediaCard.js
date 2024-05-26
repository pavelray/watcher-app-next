import React, { Fragment } from "react";
import Router from "next/router";
import { MEDIA_TYPE } from "../../../utils/constants";
import Card from "../../UI/Card/Card";
import { getImage, slugify } from "../../../utils/helperMethods";
import ProfileCard from "../../UI/Card/ProfileCard";

export const MediaCard = (props) => {
  const {
    poster,
    id,
    title,
    type,
    genre_ids,
    vote_average,
    imageWidth=400,
    ...otherProps
  } = props;
  const { name, popularity, known_for_department, profile_path, gender } =
    props;
  const imagePath = poster || profile_path;

  const posterImg = getImage(imagePath, imageWidth, type);

  const redirectToDetails = () => {
    if (type !== MEDIA_TYPE.PERSON && type !== MEDIA_TYPE.COLLECTION)
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
          {...otherProps}
          redirectToDetails={redirectToDetails}
        />
      )}
    </Fragment>
  );
};
