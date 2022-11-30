import React from "react";
import Router from "next/router";
import {
  API_IMAGE_URL,
  NO_IMG_PLACEHOLDER_MEDIA,
} from "../../../utils/constants";
import Card from "../../UI/Card/Card";
import { slugify } from "../../../utils/helperMethods";

export const MediaCard = (props) => {
  const { poster, id, title, type, ...otherProps } = props;
  const posterImg = poster
    ? `${API_IMAGE_URL}/w200${poster}`
    : NO_IMG_PLACEHOLDER_MEDIA;

  const redirectToDetails = () => {
    Router.push(`/${type}/${id}/${slugify(title)}`);
  };
  return (
    <Card
      poster={posterImg}
      title={title}
      {...otherProps}
      redirectToDetails={redirectToDetails}
    />
  );
};
