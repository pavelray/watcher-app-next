import Link from "next/link";
import React, { Fragment } from "react";
import { MEDIA_TYPE } from "../../../utils/constants";
import {
  formatCurrency,
  getLastAirDate,
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
  const { director = [], writer = [], creator = [] } = crew || {};

  const releaseDate = getReleaseDate(details, type);
  const lastAirDate = getLastAirDate(details);

  const getGenres = () => {
    if (!!genres.length) {
      return genres.map((x) => (
        <li key={x.id}>
          <Link href={`/genre/${type}/${x.id}/1`}>{x.name}</Link>
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

  const getCreators = () => {
    if (!!creator.length) {
      return creator.map((x) => (
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
        <li className="movie-details-stats">
          <div className="label">Country Origin: </div>
          <div className="value">
            {production_countries.map((x) => x.name).join(", ")}
          </div>
          <style jsx>{style}</style>
        </li>
      );
    }
    return null;
  };

  const getLanguage = () => {
    if (!!spoken_languages.length) {
      return (
        <li className="movie-details-stats">
          <div className="label">Languages: </div>
          <div className="value">
            {spoken_languages.map((x) => x.english_name).join(", ")}
          </div>
          <style jsx>{style}</style>
        </li>
      );
    }
    return null;
  };
  const getProductionCompanies = () => {
    if (!!production_companies.length) {
      return (
        <li className="movie-details-stats">
          <div className="label">Production Companies: </div>
          <div className="value">
            {production_companies.map((x) => x.name).join(", ")}
          </div>
          <style jsx>{style}</style>
        </li>
      );
    }
    return null;
  };

  const getWriters = (data, labelText) => {
    if (!!data.length) {
      return (
        <li className="movie-details-stats">
          <div className="label">{labelText}: </div>
          <div className="value">{data.map((x) => x.name).join(", ")}</div>
          <style jsx>{style}</style>
        </li>
      );
    }
    return null;
  };

  return (
    <ul className="movie-details">
      {tagline && (
        <li className="movie-details-stats">
          <div className="label">Tagline: </div>
          <div className="value">{tagline}</div>
        </li>
      )}
      {!!genres.length && (
        <li className="movie-details-stats">
          <div className="label">Genre: </div>
          <div className="value">
            <ul className="genre">{getGenres()}</ul>
          </div>
        </li>
      )}
      <li className="movie-details-stats">
        <div className="label">Status:</div>
        <div className="value"> {details.status}</div>
      </li>
      <li className="movie-details-stats">
        <div className="label">Release Date:</div>
        <div className="value"> {releaseDate}</div>
      </li>
      {lastAirDate && (
        <li className="movie-details-stats">
          <div className="label">Last Air Date:</div>
          <div className="value">{lastAirDate}</div>
        </li>
      )}

      {getCountryOrigin()}
      {getLanguage()}
      {!!director.length && (
        <div className="movie-details-stats">
          <div className="label">Director: </div>
          <div className="value">
            <ul className="genre">{getDirector()}</ul>
          </div>
        </div>
      )}
      {!!creator.length && (
        <div className="movie-details-stats">
          <div className="label">Creators: </div>
          <div className="value">
            <ul className="genre">{getCreators()}</ul>
          </div>
        </div>
      )}
      {getWriters(writer, "Writer")}
      {getProductionCompanies()}
      <li className="movie-details-stats">
        {!!budget && (
          <>
            <div className="label">Budget: </div>
            <div className="value">{formatCurrency(budget)}</div>
          </>
        )}
      </li>
      <li className="movie-details-stats">
        {!!revenue && (
          <Fragment>
            <div className="label">Revenue: </div>
            <div className="value">{formatCurrency(revenue)}</div>
          </Fragment>
        )}
      </li>

      <style jsx>{style}</style>
    </ul>
  );
};

export default MediaDetailsInfo;
