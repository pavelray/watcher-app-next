import React, { Fragment } from "react";
import ViewAll from "../../components/Business/ViewAll";
import { getSearchUrl } from "../../utils/apiUtills";
import { pageLayoutStyle, pageMobileLayoutStyle } from "../../utils/constants";
import Router from "next/router";
import httpService from "../../utils/httpService";

import styles from "../../styles/Search.module.scss";

const Search = (props) => {
  const { term, total_results } = props;
  const handlePageClick = (page) => {
    Router.push(`/search?term=${term}&page=${page}`);
  };
  return (
    <Fragment>
      <ViewAll {...props} handlePageClick={handlePageClick} />
      {total_results === 0 && (
        <section className={styles.noResultFoundContainer}>
          <h1>Sorry !! :( </h1>
          <p>No Data Found</p>
        </section>
      )}
    </Fragment>
  );
};

export async function getServerSideProps(context) {
  const { query } = context;
  const { term, page } = query;
  const searchUrl = getSearchUrl(term, page);
  const response = await httpService.get(searchUrl);
  console.log(response);
  return {
    props: {
      ...response,
      term,
    },
  };
}

export default Search;
