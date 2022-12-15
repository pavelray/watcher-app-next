import React from "react";
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
          Country Origin: {production_countries.map((x) => x.name).join(", ")}
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
          Languages: {spoken_languages.map((x) => x.english_name).join(", ")}
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
          Production Companies:{" "}
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
        {!!budget && `Budget: ${new Intl.NumberFormat().format(budget)}`}
      </div>
      <div className="movie-details-stats">
        {!!revenue && `Revenue: ${new Intl.NumberFormat().format(revenue)}`}
      </div>

      <style jsx>{style}</style>
    </div>
  );
};

export default MediaDetailsInfo;
