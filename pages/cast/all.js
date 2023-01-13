import React from "react";
import { v4 as uuidv4 } from "uuid";
import CastAndCrew from "../../components/Business/Cast";
import MediaCard from "../../components/Business/MediaCard";
import ProfileCard from "../../components/UI/Card/ProfileCard";
import { getMovieCastDetailsDataAPIUrl } from "../../utils/apiUtills";
import {
  CREDIT_TYPE,
  MEDIA_TYPE,
  pageLayoutStyle,
  pageMobileLayoutStyle,
} from "../../utils/constants";
import { getImage, slugify } from "../../utils/helperMethods";
import httpService from "../../utils/httpService";
import Router from "next/router";

import styles from "../../styles/Cast.module.scss";
import { Heading } from "../../components/UI/Typography/Typography";

const AllCastAndCrew = ({ cast, crew, isMobile }) => {
  const redirectToDetails = (id) => {
    Router.push(`/${MEDIA_TYPE.PERSON}/${id}/`);
  };

  return (
    <div >
      <Heading text="Cast" />
      <div className={styles.castContainer}>
        {cast?.map((c) => {
          const posterImg = getImage(c.profile_path);
          return (
            <ProfileCard
              key={`${c.id}_${uuidv4()}`}
              id={c.id}
              poster={posterImg}
              title={c.name}
              description={`Charecter: ${c.character}`}
              redirectToDetails={() => redirectToDetails(c.id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { query } = context;
  const { id, type } = query;
  const url = getMovieCastDetailsDataAPIUrl(type, id);
  const movieCastCrew = await httpService.get(url);
  const movieCast = movieCastCrew.cast;
  const movieCrew = movieCastCrew.crew;

  return {
    props: {
      id,
      cast: movieCast,
      crew: movieCrew,
    },
  };
}

export default AllCastAndCrew;
