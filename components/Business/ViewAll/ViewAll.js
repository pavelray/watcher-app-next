import React, { Fragment } from "react";
import MediaCard from "../MediaCard";
import PaginationComponent from "../PaginationComponent/PaginationComponent";
import { v4 as uuidv4 } from "uuid";

import { style } from "./ViewAll.style";

import { COLLECTION_TYPE_NAME } from "../../../utils/constants";

const ViewAll = (props) => {
  const {
    type,
    page,
    results,
    term,
    dataType,
    genreName = "",
    handlePageClick,
    total_pages,
    total_results
  } = props;

  const totalPages = total_pages > 500 ? 500 : total_pages; // Making this const as TMDB return maximum of 500 pages.

  return (
    <Fragment>
      <div className="view-all-container">
        {(genreName || COLLECTION_TYPE_NAME[dataType] || term) && (
          <div className="view-all-heading">
            <h1>
              Showing Results for:
              &nbsp;{genreName || COLLECTION_TYPE_NAME[dataType] || term}
            </h1>
          </div>
        )}
        <PaginationComponent
          totalPages={totalPages}
          totalResults={total_results}
          selectedPage={parseInt(page)}
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
                    imageWidth={400}
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
