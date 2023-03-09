import React, { Fragment } from "react";
import { getViewAllUrl } from "../../utils/apiUtills";
import httpService from "../../utils/httpService";

import ViewAll from "../../components/Business/ViewAll/ViewAll";

const All = (props) => {
  return (
    <Fragment>
      <ViewAll {...props} />
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
