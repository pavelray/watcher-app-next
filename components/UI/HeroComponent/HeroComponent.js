import Link from "next/link";
import { API_IMAGE_URL } from "../../../utils/constants";
import { getImageUrl, slugify } from "../../../utils/helperMethods";
import { style } from "./HeroComponent.style";

const HeroComponent = ({ title, description, imageUrl, type, id }) => {
  const populateImageUrl = (path) => {
    const fullPath = `${API_IMAGE_URL}/original/`;
    return getImageUrl(path, fullPath);
  };

  return (
    <div
      className="hero-container"
      style={{
        backgroundImage: `url(${populateImageUrl(imageUrl)})`,
      }}
    >
      <div className="hero-container-image__container">
        <div className="content">
          <Link href={`/${type}/${id}/${slugify(title)}`}>
            <div className="content-title">{title}</div>
          </Link>
          <p className="content-details">{description}</p>
        </div>
      </div>

      <style jsx>{style}</style>
    </div>
  );
};

export default HeroComponent;
