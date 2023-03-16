import React, { Fragment } from "react";
import MediaCard from "../MediaCard";
import PaginationComponent from "../PaginationComponent/PaginationComponent";
import { v4 as uuidv4 } from "uuid";

import { style } from "./ViewAll.style";
import Router from "next/router";
import { COLLECTION_TYPE_NAME } from "../../../utils/constants";

const ViewAll = (props) => {
  const {
    type,
    page,
    genre,
    results,
    total_results,
    term,
    pageType,
    dataType,
    genreName = "",
  } = props;

  const totalPages = 500; // Making this const as TMDB return maximum of 500 pages.

  const handlePageClick = (page) => {
    if (type && genre) Router.push(`/genre/${type}/${genre}/${page}`);
    else if (pageType && dataType)
      Router.push(`/all/${dataType}/${type}/${page}`);
    else Router.push(`/search?term=${term}&page=${page}`);
  };

  return (
    <Fragment>
      <div className="view-all-container">
        <div className="view-all-heading">
          <h1>Showing Results for : {genreName || COLLECTION_TYPE_NAME[dataType] || term}</h1>
        </div>
        <PaginationComponent
          totalPages={totalPages}
          selectedPage={page}
          onPageClick={handlePageClick}
        >
          <div className="view-all-wrapper">
            {results?.map((tr) => {
              return (
                <div key={`${tr.id}_${uuidv4()}`} className="card-container">
                  <MediaCard
                    id={tr.id}
                    title={tr.title || tr.name}
                    poster={tr.poster_path || tr.profile_path}
                    releaseDate={tr.release_date || tr.first_air_date}
                    type={type || tr.media_type}
                    {...tr}
                  />
                </div>
              );
            })}
          </div>
        </PaginationComponent>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  );
};

export default ViewAll;
