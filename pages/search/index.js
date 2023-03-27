import React, { Fragment } from "react";
import ViewAll from "../../components/Business/ViewAll";
import { getSearchUrl } from "../../utils/apiUtills";
import { pageLayoutStyle, pageMobileLayoutStyle } from "../../utils/constants";
import Router from "next/router";
import httpService from "../../utils/httpService";

const Search = (props) => {
  const { term } = props;
  const handlePageClick = (page) => {
    Router.push(`/search?term=${term}&page=${page}`);
  };
  return (
    <Fragment>
      <ViewAll {...props} handlePageClick={handlePageClick} />
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
