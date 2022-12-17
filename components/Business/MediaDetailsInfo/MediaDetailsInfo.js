import React, { Fragment } from "react";
import { style } from "./MediaDetails.style";

const MediaDetailsInfo = ({ details }) => {
  const {
    production_countries = [],
    spoken_languages = [],
    production_companies = [],
    budget,
    revenue,
  } = details;
  const getCountryOrigin = () => {
    if (!!production_countries.length) {
      return (
        <div className="movie-details-stats">
          <label>Country Origin: </label>
          {production_countries.map((x) => x.name).join(", ")}
          <style jsx>{style}</style>
        </div>
      );
    }
    return null;
  };

  const getLanguage = () => {
    if (!!spoken_languages.length) {
      return (
        <div className="movie-details-stats">
          <label>Languages: </label>
          {spoken_languages.map((x) => x.english_name).join(", ")}
          <style jsx>{style}</style>
        </div>
      );
    }
    return null;
  };
  const getProductionCompanies = () => {
    if (!!production_companies.length) {
      return (
        <div className="movie-details-stats">
          <label>Production Companies: </label>
          {production_companies.map((x) => x.name).join(", ")}
          <style jsx>{style}</style>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="movie-details">
      {getCountryOrigin()}
      {getLanguage()}
      {getProductionCompanies()}
      <div className="movie-details-stats">
        {!!budget && (
          <Fragment>
            <label>Budget: </label>${new Intl.NumberFormat().format(budget)}
          </Fragment>
        )}
      </div>
      <div className="movie-details-stats">
        {!!revenue && (
          <Fragment>
            <label>Revenue: </label>${new Intl.NumberFormat().format(revenue)}
          </Fragment>
        )}
      </div>

      <style jsx>{style}</style>
    </div>
  );
};

export default MediaDetailsInfo;
