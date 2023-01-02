import Link from "next/link";
import React, { Fragment } from "react";
import { MEDIA_TYPE } from "../../../utils/constants";
import {
  formatCurrency,
  getReleaseDate,
  slugify,
} from "../../../utils/helperMethods";
import { style } from "./MediaDetails.style";

const MediaDetailsInfo = ({ details, type = MEDIA_TYPE.MOVIE, crew }) => {
  const {
    production_countries = [],
    spoken_languages = [],
    production_companies = [],
    budget,
    revenue,
    tagline,
    genres = [],
  } = details;
  const { director = [], writer = [] } = crew || {};

  const releaseDate = getReleaseDate(details, type);

  const getGenres = () => {
    if (!!genres.length) {
      return genres.map((x) => (
        <li key={x.id}>
          <Link href={`/discover/${type}/${x.id}/1`}>{x.name}</Link>
          <style jsx>{style}</style>
        </li>
      ));
    }
    return null;
  };

  const getDirector = () => {
    if (!!director.length) {
      return director.map((x) => (
        <li key={x.id}>
          <Link href={`/person/${x.id}/${slugify(x.name)}`}>{x.name}</Link>
          <style jsx>{style}</style>
        </li>
      ));
    }
    return null;
  };

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

  const getCreators = (data, labelText) => {
    if (!!data.length) {
      return (
        <div className="movie-details-stats">
          <label>{labelText}: </label>
          {data.map((x) => x.name).join(", ")}
          <style jsx>{style}</style>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="movie-details">
      {tagline && (
        <div className="movie-details-stats">
          <label>Tagline: </label>
          {tagline}
        </div>
      )}
      {!!genres.length && (
        <div className="movie-details-stats">
          <div className="genre-container">
            <label>Genre: </label>
            <ul className="genre">{getGenres()}</ul>
          </div>
        </div>
      )}
      <div className="movie-details-stats">
        <label>Status: {details.status}</label>
      </div>
      <div className="movie-details-stats">
        <label>Release Date: {releaseDate}</label>
      </div>

      {getCountryOrigin()}
      {getLanguage()}
      {!!genres.length && (
        <div className="movie-details-stats">
          <div className="genre-container">
            <label>Director: </label>
            <ul className="genre">{getDirector()}</ul>
          </div>
        </div>
      )}
      {getCreators(writer, "Writer")}
      {getProductionCompanies()}
      <div className="movie-details-stats">
        {!!budget && (
          <Fragment>
            <label>Budget: </label>
            {formatCurrency(budget)}
          </Fragment>
        )}
      </div>
      <div className="movie-details-stats">
        {!!revenue && (
          <Fragment>
            <label>Revenue: </label>
            {formatCurrency(revenue)}
          </Fragment>
        )}
      </div>

      <style jsx>{style}</style>
    </div>
  );
};

export default MediaDetailsInfo;
