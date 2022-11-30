import React from "react";
import PersonDetails from "../../components/Business/PersonDetails";
import { getAllCredits, getMovieCredit, getMovieDetailsDataAPIUrl } from "../../utils/apiUtills";
import { MEDIA_TYPE, pageLayoutStyle } from "../../utils/constants";
import httpService from "../../utils/httpService";

const PersonDetailsPage = ({ id, slugTitle, person }) => {
  return (
    <div style={pageLayoutStyle}>
      <PersonDetails person={person} />
    </div>
  );
};

export async function getServerSideProps(context) {
  const { query } = context;
  const { slug } = query;

  const type = MEDIA_TYPE.PERSON;

  const id = slug[0];
  const slugTitle = slug[1];

  let url = getMovieDetailsDataAPIUrl(type, id);
  const personDetails = await httpService.get(url);

  url = getAllCredits(id);
  const allCredits = await httpService.get(url);
  const movies = allCredits.cast.filter(c=> c.media_type === MEDIA_TYPE.MOVIE);
  const tvSeries = allCredits.cast.filter(c=> c.media_type === MEDIA_TYPE.TV_SERIES);

  return {
    props: {
      id,
      type: MEDIA_TYPE.PERSON,
      slugTitle,
      person: {
        details: personDetails,
        movies,
        tvSeries
      },
    },
  };
}

export default PersonDetailsPage;
