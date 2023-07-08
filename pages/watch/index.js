import React from "react";
import { MEDIA_TYPE, STREAMING_API_URL } from "../../utils/constants";
import styles from "../../styles/Watch.module.scss";
import { getMediaDetailsDataAPIUrl } from "../../utils/apiUtills";
import httpService from "../../utils/httpService";
import Link from "next/link";
import { slugify } from "../../utils/helperMethods";

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
      return `embed/${id}`;
    }
    return `embedtv/${id}&s=${season}&e=${ep}`;
  };

  return (
    <div className={styles.watchContainer}>
      <div className={styles.mobileRotate}>
        <div className={styles.phone}></div>
        <div className={styles.message}>Please rotate your device!</div>
      </div>
      <h2>
        Now watching :{" "}
        {type === MEDIA_TYPE.MOVIE ? (
          <Link href={`/${type}/${id}/${slugify(title)}`}>
            <span className={styles.link}>{title}</span>
          </Link>
        ) : (
          <Link href={`/${type}/${id}/${slugify(name)}`}>
            {name} - Season: {season} - Episode: {ep}
          </Link>
        )}
      </h2>

      <iframe
        id="iframe-watch"
        className={styles.videoPlayer}
        src={`${STREAMING_API_URL}/${getStreamingUrl()}`}
        title={title || name}
        allowFullScreen="true"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        oallowfullscreen="true"
        msallowfullscreen="true"
        gesture="media"
        allow="encrypted-media"
      ></iframe>
      <div>
        <h4>
          Sreaming Provier -{" "}
          <a
            href={STREAMING_API_URL}
            alt="2embed"
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            2embed
          </a>{" "}
          <span className={styles.note}>** We do not store any media.</span>
        </h4>
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
    </div>
  );
};

export async function getServerSideProps(context) {
  const { query } = context;
  const { id, type, ep = "", season = "" } = query;
  let url = getMediaDetailsDataAPIUrl(type, id);
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
