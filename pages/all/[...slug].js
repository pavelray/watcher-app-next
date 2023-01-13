import React from "react";
import {
  getDiscoverMovieUrl,
  getDiscoverTvSeriesUrl,
  getViewAllUrl,
} from "../../utils/apiUtills";
import { MEDIA_TYPE } from "../../utils/constants";
import httpService from "../../utils/httpService";

import ViewAll from "../../components/Business/ViewAll/ViewAll";

const All = (props) => {
  return (
    <div>
      <ViewAll {...props} />
    </div>
  );
};

export async function getServerSideProps(context) {
  const { query } = context;
  const { slug } = query;

  const dataType = slug[0];
  const type = slug[1];
  const page = slug[2];
  const pageType = 'all';

  const apiUrl = getViewAllUrl(dataType,type,page);
  const response = await httpService.get(apiUrl);
  return {
    props: {
      ...response,
      dataType,
      type,
      page,
      pageType
    },
  };
}

export default All;
