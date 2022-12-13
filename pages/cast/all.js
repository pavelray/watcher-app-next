import React from "react";
import CastAndCrew from "../../components/Business/Cast";
import { getMovieCastDetailsDataAPIUrl } from "../../utils/apiUtills";
import {
  CREDIT_TYPE,
  pageLayoutStyle,
  pageMobileLayoutStyle,
} from "../../utils/constants";
import httpService from "../../utils/httpService";

const AllCastAndCrew = ({ cast, crew, id, isMobile }) => {
  return (
    <div style={!isMobile ? pageLayoutStyle : pageMobileLayoutStyle}>
      <CastAndCrew
        credits={cast}
        type={CREDIT_TYPE.CAST}
        title="Cast"
        id={id}
        showViewAll={false}
      />
      <CastAndCrew
        credits={crew}
        type={CREDIT_TYPE.CREW}
        title="Crew"
        id={id}
        showViewAll={false}
      />
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
