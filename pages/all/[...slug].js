import React, { Fragment } from "react";
import {
  getDiscoverMovieUrl,
  getDiscoverTvSeriesUrl,
  getViewAllUrl,
} from "../../utils/apiUtills";
import { APP_NAME, MEDIA_TYPE } from "../../utils/constants";
import httpService from "../../utils/httpService";

import ViewAll from "../../components/Business/ViewAll/ViewAll";
import Head from "next/head";

const All = (props) => {
  return (
    <Fragment>
      <div>
        <ViewAll {...props} />
      </div>
    </Fragment>
  );
};

export async function getServerSideProps(context) {
  const { query } = context;
  const { slug } = query;

  const dataType = slug[0];
  const type = slug[1];
  const page = slug[2];
  const pageType = "all";

  const apiUrl = getViewAllUrl(dataType, type, page);
  const response = await httpService.get(apiUrl);
  return {
    props: {
      ...response,
      dataType,
      type,
      page,
      pageType,
    },
  };
}

export default All;
