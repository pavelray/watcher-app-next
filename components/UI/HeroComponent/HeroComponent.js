import Link from "next/link";
import { Fragment } from "react";
import { API_IMAGE_URL } from "../../../utils/constants";
import { getImageUrl, slugify } from "../../../utils/helperMethods";
import ViewTrailer from "../../Business/ViewTrailer/ViewTrailer";
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
}) => {
  const populateImageUrl = (path) => {
    const fullPath = `${API_IMAGE_URL}/original/`;
    return getImageUrl(path, fullPath);
  };

  return (
    <Fragment>
      <div
        className="hero"
        style={{
          backgroundImage: `linear-gradient(
        to right,
        rgba(34, 40, 49, 1) 10%,
        rgba(34, 40, 49, .9) 20%,
        rgba(34, 40, 49, 0.7) 45%,
        rgba(34, 40, 49, 0.5) 55%,
        rgba(34, 40, 49, 0) 95%
      ), url(${populateImageUrl(imageUrl)})`,
        }}
      >
        <div className="hero-content">
          <Link href={`/${type}/${id}/${slugify(title)}`}>
            <div className="title">{title}</div>
          </Link>
          <p className="meta">
            <Rating ratingValue={40} />
            <span className="meta-values">Votes {votes}</span>
            <span className="meta-values">{runtime}</span>
            <span className="meta-values cert">{certificate.certificate}</span>
            <span className="tooltip">
              {certificate.meaning.map((x, index) => (
                <Fragment key={index}>
                  <div >{x}</div>
                  <br />
                </Fragment>
              ))}
            </span>
          </p>
          <p className="story">{description}</p>
          <ViewTrailer
            trailerVideo={trailerVideo}
            setViewModal={setViewModal}
          />
        </div>

        <style jsx>{style}</style>
      </div>
    </Fragment>
  );
};

export default HeroComponent;
