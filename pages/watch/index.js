import React from "react";
import { MEDIA_TYPE } from "../../utils/constants";
import styles from '../../styles/Watch.module.scss';

const Watch = ({ id='1061163', type=MEDIA_TYPE.MOVIE }) => {
  return (
    <div className={styles.watchContainer}>
      <iframe
        id="iframe"
        src={`https://www.2embed.to/embed/tmdb/${type}?id=${id}`}
        width="100%"
        height="100%"
        frameborder="0"
      ></iframe>
    </div>
  );
};

export async function getServerSideProps(context) {
    const { query } = context;
    const { id, type } = query;
  
    return {
      props: {
        id,
        type
      },
    };
  }  

export default Watch;
