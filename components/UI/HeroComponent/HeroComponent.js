import Link from "next/link";
import { Fragment } from "react";
import { API_IMAGE_URL } from "../../../utils/constants";
import { getImageUrl, slugify } from "../../../utils/helperMethods";
import { style } from "./HeroComponent.style";

const HeroComponent = ({ title, description, imageUrl, type, id }) => {
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
          <p>{description}</p>
          <button className="btn-primary">Watch Trailer</button>
        </div>

        <style jsx>{style}</style>
      </div>
    </Fragment>
  );
};

export default HeroComponent;
