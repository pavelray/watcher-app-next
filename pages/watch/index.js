import React from "react";
import { MEDIA_TYPE } from "../../utils/constants";
import styles from "../../styles/Watch.module.scss";

const Watch = ({ id = "1061163", type = MEDIA_TYPE.MOVIE, ep, season }) => {
  const getStreamingUrl = () => {
    if (type === MEDIA_TYPE.MOVIE) {
      return `${type}?id=${id}`;
    }
    return `${type}?id=${id}&s=${season}&e=${ep}`;
  };

  return (
    <div className={styles.watchContainer}>
      <iframe
        id="iframe"
        src={`https://www.2embed.to/embed/tmdb/${getStreamingUrl()}`}
        width="100%"
        height="100%"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { query } = context;
  const { id, type, ep = "", season = "" } = query;

  return {
    props: {
      id,
      type,
      ep,
      season,
    },
  };
}

export default Watch;
