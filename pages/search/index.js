import React, { Fragment } from "react";
import ViewAll from "../../components/Business/ViewAll";
import { getSearchUrl } from "../../utils/apiUtills";
import { pageLayoutStyle, pageMobileLayoutStyle } from "../../utils/constants";
import httpService from "../../utils/httpService";

const Search = (props) => {
  return (
    <Fragment>
      <ViewAll {...props} />
    </Fragment>
  );
};

export async function getServerSideProps(context) {
  const { query } = context;
  const { term, page } = query;
  const searchUrl = getSearchUrl(term, page);
  const response = await httpService.get(searchUrl);
  return {
    props: {
      ...response,
      term,
    },
  };
}

export default Search;
