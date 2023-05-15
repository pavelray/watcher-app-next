import React, { Fragment } from "react";
import Router from "next/router";
import { getTrendingDataAPIUrl, getViewAllUrl } from "../../utils/apiUtills";
import httpService from "../../utils/httpService";

import ViewAll from "../../components/Business/ViewAll/ViewAll";
import { COLLECTION_TYPE, TIME_TYPE } from "../../utils/constants";

const All = (props) => {
  const { dataType, type } = props;
  const handlePageClick = (page) => {
    Router.push(`/all/${dataType}/${type}/${page}`);
  };
  return (
    <Fragment>
      <ViewAll {...props} handlePageClick={handlePageClick} />
    </Fragment>
  );
};

export async function getServerSideProps(context) {
  const { query } = context;
  const { slug } = query;

  const dataType = slug[0];
  const type = slug[1];
  const page = +slug[2];
  const pageType = "all";
  let apiUrl;
  if (dataType === COLLECTION_TYPE.TRENDING) {
    apiUrl = getTrendingDataAPIUrl(type, TIME_TYPE.WEEK, page);
  } else {
    apiUrl = getViewAllUrl(dataType, type, page);
  }
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
