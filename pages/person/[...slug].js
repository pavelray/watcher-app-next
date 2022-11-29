import React from "react";
import PersonDetails from "../../components/Business/PersonDetails";
import { getMovieCredit, getMovieDetailsDataAPIUrl } from "../../utils/apiUtills";
import { MEDIA_TYPE } from "../../utils/constants";
import httpService from "../../utils/httpService";

const PersonDetailsPage = ({ id, slugTitle, person }) => {
  return (
    <div>
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

  url = getMovieCredit(id);
  const movies = await httpService.get(url);

  return {
    props: {
      id,
      type: MEDIA_TYPE.MOVIE,
      slugTitle,
      person: {
        details: personDetails,
        movies
      },
    },
  };
}

export default PersonDetailsPage;
