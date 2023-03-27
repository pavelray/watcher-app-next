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

  return {
    props: {
      id,
      type: MEDIA_TYPE.PERSON,
      person: {
        details: personDetails,
      },
    },
  };
}

export default PersonDetailsPage;
