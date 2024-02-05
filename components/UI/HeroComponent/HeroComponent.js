import Link from "next/link";
import { Fragment } from "react";
import Router from "next/router";
import { API_IMAGE_URL, MEDIA_TYPE } from "../../../utils/constants";
import { getImageUrl, slugify } from "../../../utils/helperMethods";
import ViewTrailer from "../../Business/ViewTrailer/ViewTrailer";
import { ButtonSecondary } from "../Buttons/Buttons";
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
  voteCount,
  isMobile,
  isHome,
  showEpisodes,
  rating,
  year,
  status,
}) => {
  const isReleased = type === MEDIA_TYPE.MOVIE && status === "Released";
  const isAvailable =
    type === MEDIA_TYPE.TV_SERIES &&
    (status === "Returning Series" || status === "Ended");

  const populateImageUrl = (path) => {
    const fullPath = `${API_IMAGE_URL}/original/`;
    return getImageUrl(path, fullPath);
  };

  const navigateToWatch = () => {
    Router.push(`/watch?id=${id}&type=${type}`);
  };

  const scrollToWatch = () => {
    showEpisodes(true);
    const elmntToView = document.getElementById("episodes");
    elmntToView.scrollIntoView();
  };

  const goToDetailsPage = () => {
    Router.push(`/${type}/${id}/${slugify(title)}`);
  };

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

  const ratingPercentage = (rating * 100) / 10;

  return (
    <Fragment>
      <div className="hero" style={getStyle()}>
        <div className="hero-content">
          <Link href={`/${type}/${id}/${slugify(title)}`}>
            <h1 className="title">{title}</h1>
          </Link>
          <div className="meta">
            {/* <Rating ratingValue={ratingPercentage} /> */}
            <span className="meta-values">Rating:{rating.toFixed(2)}</span>
            <span className="meta-values">Votes:{voteCount}</span>
            <span className="meta-values">{new Date(year).getFullYear()}</span>
            <span className="meta-values">{runtime}</span>
            {certificate?.certificate && (
              <span className="meta-values cert">
                {certificate?.certificate}
              </span>
            )}
          </div>
          <p className="story">{description}</p>

          <div className="btn-container">
            {trailerVideo && (
              <ViewTrailer
                trailerVideo={trailerVideo}
                setViewModal={setViewModal}
              />
            )}

            {type === MEDIA_TYPE.MOVIE && isReleased && (
              <ButtonSecondary
                handleOnClick={navigateToWatch}
                text="Watch Now"
              />
            )}
            {type === MEDIA_TYPE.TV_SERIES && !isHome && isAvailable && (
              <ButtonSecondary handleOnClick={scrollToWatch} text="Watch Now" />
            )}
            {type === MEDIA_TYPE.TV_SERIES && isHome && isAvailable && (
              <ButtonSecondary
                handleOnClick={goToDetailsPage}
                text="Watch Now"
              />
            )}
          </div>
        </div>

        <style jsx>{style}</style>
      </div>
    </Fragment>
  );
};

export default HeroComponent;
