import React from "react";
import { MEDIA_TYPE } from "../../utils/constants";
import styles from "../../styles/Watch.module.scss";
import { getMovieDetailsDataAPIUrl } from "../../utils/apiUtills";
import httpService from "../../utils/httpService";

const Watch = ({
  id = "1061163",
  type = MEDIA_TYPE.MOVIE,
  ep,
  season,
  title,
  name,
}) => {
  const getStreamingUrl = () => {
    if (type === MEDIA_TYPE.MOVIE) {
      return `${type}?id=${id}`;
    }
    return `${type}?id=${id}&s=${season}&e=${ep}`;
  };

  return (
    <div className={styles.watchContainer}>
      <div className={styles.mobileRotate}>
        <div className={styles.phone}></div>
        <div className={styles.message}>Please rotate your device!</div>
      </div>
      <h2>
        Now watching :{" "}
        {type === MEDIA_TYPE.MOVIE
          ? title
          : `${name} - Season: ${season} - Episode: ${ep}`}
      </h2>
      <div className={styles.header}>
        Sreaming Provier -{" "}
        <a
          href="https://2embed.biz/"
          alt="2embed"
          className={styles.link}
          target="_blank"
          rel="noreferrer"
        >
          2embed
        </a>{" "}
        <div>
          <span>
            ** Please user{" "}
            <span className={styles.note}>ad blocker or Brave browser</span> to
            block the ads showin by - 2embed
          </span>
          <br />
          <span>** We do not store any media.</span>
        </div>
      </div>
      <iframe
        id="iframe-watch"
        className={styles.videoPlayer}
        src={`https://www.2embed.to/embed/tmdb/${getStreamingUrl()}`}
        allow="autoplay"
        title={title || name}
        allowFullScreen="true"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        oallowfullscreen="true"
        msallowfullscreen="true"
      ></iframe>
      <div>
        <h4>
          Sreaming Provier -{" "}
          <a
            href="https://2embed.biz/"
            alt="2embed"
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            2embed
          </a>{" "}
          <span className={styles.note}>** We do not store any media.</span>
        </h4>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { query } = context;
  const { id, type, ep = "", season = "" } = query;
  let url = getMovieDetailsDataAPIUrl(type, id);
  const response = await httpService.get(url);
  const { title = "", name = "" } = response;
  return {
    props: {
      id,
      type,
      ep,
      season,
      title,
      name,
    },
  };
}

export default Watch;
