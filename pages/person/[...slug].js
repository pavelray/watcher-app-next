import React, { Fragment } from "react";
import PersonDetails from "../../components/Business/PersonDetails";
import { GoogleAd } from "../../components/UI/GoogleAds";
import {
  getAllCredits,
  getExternalIdUrl,
  getMovieCredit,
  getMediaDetailsDataAPIUrl,
} from "../../utils/apiUtills";
import {
  appendToReqPerson,
  MEDIA_TYPE,
  pageLayoutStyle,
  pageMobileLayoutStyle,
} from "../../utils/constants";
import httpService from "../../utils/httpService";

const PersonDetailsPage = ({ id, person, isMobile }) => {
  return (
    <Fragment>
      <PersonDetails person={person} id={id} isMobile={isMobile} />
      <GoogleAd />
    </Fragment>
  );
};

export async function getServerSideProps(context) {
  const { query } = context;
  const { slug } = query;

  const type = MEDIA_TYPE.PERSON;

  const id = slug[0];

  let url = `${getMediaDetailsDataAPIUrl(type, id)}${appendToReqPerson}`;
  const personDetails = await httpService.get(url);
  const {combined_credits={}} = personDetails || {};
  const {cast = [], crew=[]} = combined_credits || {}

  const castSorted = cast.sort((a,b)=> a.vote_count - b.vote_count).reverse();
  const crewSorted = crew.sort((a,b)=> a.vote_count - b.vote_count).reverse();

  const updatedDetails = {
    ...personDetails,
    combined_credits:{
      cast: castSorted,
      crew: crewSorted
    }
  }

  return {
    props: {
      id,
      type: MEDIA_TYPE.PERSON,
      person: {
        details: updatedDetails,
      },
    },
  };
}

export default PersonDetailsPage;
