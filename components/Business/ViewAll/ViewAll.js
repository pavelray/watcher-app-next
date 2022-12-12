import React from "react";
import MediaCard from "../MediaCard";
import PaginationComponent from "../PaginationComponent/PaginationComponent";
import { v4 as uuidv4 } from 'uuid';

import { style } from "./ViewAll.style";
import  Router from "next/router";

const ViewAll = (props) => {
  const { type, page, genre, results, total_pages, total_results, term } = props;

  const handlePageClick = (page) => {
    if(type && genre)
        Router.push(`/discover/${type}/${genre}/${page}`);
    else
        Router.push(`/search?term=${term}&page=${page}`);
  };

  return (
    <div className="view-all-container">
      <h5>Total Found: {total_results}</h5>
      <PaginationComponent
        totalPages={total_pages}
        selectedPage={page}
        onPageClick={handlePageClick}
      >
        <div className="view-all-wrapper">
          {results?.map((tr) => {
            return (
              <MediaCard
                key={`${tr.id}_${uuidv4()}`}
                id={tr.id}
                title={tr.title || tr.name}
                poster={tr.poster_path || tr.profile_path}
                releaseDate={tr.release_date || tr.first_air_date}
                type={type || tr.media_type}
                {...tr}
              />
            );
          })}
        </div>
      </PaginationComponent>
      <style jsx>{style}</style>
    </div>
  );
};

export default ViewAll;
