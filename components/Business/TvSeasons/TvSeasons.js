import React, { Fragment } from "react";
import {
  API_IMAGE_URL,
  NO_IMG_PLACEHOLDER_MEDIA,
} from "../../../utils/constants";
import SeasonCard from "../../UI/Card/SeasonCard";
import { style } from "./TvSeasons.style";

const TvSeasons = ({ seasons }) => {
  const getImage = (poster) => {
    const imageName = poster
      ? `${API_IMAGE_URL}/w200${poster}`
      : NO_IMG_PLACEHOLDER_MEDIA;
    return imageName;
  };
  return (
    <Fragment>
      {seasons && !!seasons.length && (
        <div className="seasons-container">
          <div className="seasons-wrapper">
            <div className="seasons-title">Seasons</div>
            <div className="seasons-card-wrapper">
              {seasons.map((season, index) => {
                return (
                  <SeasonCard
                    key={season.id}
                    id={season.id}
                    title={season.name}
                    releaseDate={season.air_date}
                    episodes={season.episode_count}
                    poster={getImage(season.poster_path)}
                    overview={season.overview}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
      <style jsx>{style}</style>
    </Fragment>
  );
};

export default TvSeasons;
