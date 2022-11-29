import Image from "next/image";
import React, { Fragment } from "react";
import { API_IMAGE_URL } from "../../../utils/constants";
import { v4 as uuidv4 } from 'uuid';
import { style } from "./SeasonDetails.style";

const SeasonDetails = ({ seasonDetails }) => {
  const handleTabClick = (e) => {
    const selectedTabId = e.target.dataset.id;

    document.querySelectorAll(".tabs").forEach((el) => {
      el.classList.remove("tabs-active");
    });
    document.querySelectorAll(".tab").forEach((el) => {
      el.classList.remove("active");
    });

    e.target.classList.add("tabs-active");
    document.querySelector(`.tab${selectedTabId}`).classList.add("active");
  };

  return (
    <Fragment>
      <div className="season-container">
        <div className="season-tabs">
          {seasonDetails.map((season, index) => (
            <div
              className={`tabs ${index === 0 ? "tabs-active" : ""}`}
              data-id={index}
              onClick={handleTabClick}
              key={`tabs-${uuidv4()}`}
            >
              {season.name}
            </div>
          ))}
        </div>
        {seasonDetails.map((season, index) => (
          <div
            className={`tab tab${index} ${index === 0 ? "active" : ""}`}
            data-id={index}
            key={`tab-${uuidv4()}`}
          >
            <div className="season-wrapper">
              {season.episodes.map((episode) => (
                <div className="media-card" key={`episode-${uuidv4()}`}>
                  <Image
                    src={`${API_IMAGE_URL}/w400/${episode.still_path}`}
                    alt=""
                    width="300"
                    height="200"
                  />
                  <div className="media-card__title">
                    <span>
                      {episode.episode_number}. {episode.name}
                    </span>
                    <span>{episode.runtime}m</span>
                  </div>
                  <div className="media-card__body">
                    <p>{episode.overview}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <style jsx>{style}</style>
    </Fragment>
  );
};

export { SeasonDetails };
