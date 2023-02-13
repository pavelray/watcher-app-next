import Link from "next/link";
import { Fragment } from "react";
import Router from "next/router";
import { API_IMAGE_URL, MEDIA_TYPE } from "../../../utils/constants";
import { getImageUrl, slugify } from "../../../utils/helperMethods";
import ViewTrailer from "../../Business/ViewTrailer/ViewTrailer";
import {
  ButtonPrimary,
  ButtonSecondary,
  ButtonSecondaryLink,
} from "../Buttons/Buttons";
import Rating from "../Rating/Rating";
import { style } from "./HeroComponent.style";

const HeroComponent = ({
  title,
  description,
  imageUrl,
  type,
  id,
  trailerVideo,
  setViewModal,
  certificate,
  runtime,
  votes,
  isMobile,
}) => {
  const populateImageUrl = (path) => {
    const fullPath = `${API_IMAGE_URL}/original/`;
    return getImageUrl(path, fullPath);
  };

  const navigateToWatch = () => {
    Router.push(`/watch?id=${id}&type=${type}`);
  };

  const scrollToWatch = () => {
    const elmntToView = document.getElementById("episodes");
    elmntToView.scrollIntoView();
  };

  console.log(type);

  const getStyle = () => {
    const deskTopStyle = {
      backgroundImage: `linear-gradient(
                        to right,
                        rgba(17, 37, 46, 1) 10%,
                        rgba(17, 37, 46, .9) 20%,
                        rgba(17, 37, 46, 0.7) 45%,
                        rgba(17, 37, 46, 0.5) 55%,
                        rgba(17, 37, 46, 0) 95%
                      ), url(${populateImageUrl(imageUrl)})`,
    };
    const mobileStyle = {
      backgroundImage: `linear-gradient(
                        to top,
                        rgba(17, 37, 46, 1) 20%,
                        rgba(17, 37, 46, .8) 30%,
                        rgba(17, 37, 46, 0.6) 55%,
                        rgba(17, 37, 46, 0.2) 75%,
                        rgba(17, 37, 46, 0) 95%
                        ), url(${populateImageUrl(imageUrl)})`,
    };

    return isMobile ? mobileStyle : deskTopStyle;
  };

  return (
    <Fragment>
      <div className="hero" style={getStyle()}>
        <div className="hero-content">
          <Link href={`/${type}/${id}/${slugify(title)}`}>
            <h1 className="title">{title}</h1>
          </Link>
          <div className="meta">
            <Rating ratingValue={40} />
            <span className="meta-values">Votes {votes}</span>
            <span className="meta-values">{runtime}</span>
            {certificate?.certificate && (
              <span className="meta-values cert">
                {certificate?.certificate}
              </span>
            )}
            <span className="tooltip">
              {certificate?.meaning?.map((x, index) => (
                <Fragment key={index}>
                  <div>{x}</div>
                  <br />
                </Fragment>
              ))}
            </span>
          </div>
          <p className="story">{description}</p>
          <div className="btn-container">
            <ViewTrailer
              trailerVideo={trailerVideo}
              setViewModal={setViewModal}
            />
            {type === MEDIA_TYPE.MOVIE && (
              <ButtonSecondary
                handleOnClick={navigateToWatch}
                text="Watch Now"
              />
            )}
            {type === MEDIA_TYPE.TV_SERIES && (
              <ButtonSecondary handleOnClick={scrollToWatch} text="Watch Now" />
            )}
          </div>
        </div>

        <style jsx>{style}</style>
      </div>
    </Fragment>
  );
};

export default HeroComponent;
