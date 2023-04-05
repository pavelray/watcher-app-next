import React, { Fragment, useState } from "react";
import Router from "next/router";
import Dropdown from "../../components/UI/Dropdown/Dropdown";
import styles from "../../styles/Discover.module.scss";
import {
  DEFAULT_COUNTRY_CODE,
  FILTER_OPTIONS,
  MOVIE_GENRE,
  TV_GENRE,
} from "../../utils/constants";
import {
  formatDiscoverFilterData,
  getLocationCookie,
  getUid,
} from "../../utils/helperMethods";
import { MEDIA_TYPE as MediaType } from "../../utils/constants";
import {
  ButtonPrimary,
  ButtonSecondary,
} from "../../components/UI/Buttons/Buttons";
import { getDiscoverMediaUrl } from "../../utils/apiUtills";
import httpService from "../../utils/httpService";
import ViewAll from "../../components/Business/ViewAll";
import COUNTRIES from "../../data/countries_data.json";

const Discover = (props) => {
  const [defaultGenre, setGenre] = useState(
    props.type === MediaType.TV_SERIES ? TV_GENRE : MOVIE_GENRE
  );
  const [selectedMediaType, setSelectedMediaType] = useState(
    props.type || MediaType.MOVIE
  );
  const filterData = formatDiscoverFilterData(props.filterDataStr);

  const { MEDIA_TYPE, SORT_BY, SORT_ORDER } = FILTER_OPTIONS;
  const { countryCode = DEFAULT_COUNTRY_CODE } = getLocationCookie({});
  const initialFilterValues = {
    genre: filterData.genre || MOVIE_GENRE[0].id,
    sortBy: filterData.sortBy || SORT_BY[0].value,
    sortOrder: filterData.sortOrder || SORT_ORDER[0].value,
    region: filterData.region || countryCode,
  };
  const [filterValues, setFilterValues] = useState(initialFilterValues);

  const onMediaTypeChange = (event) => {
    const { value } = event.target;
    setGenre(() => (value === MediaType.TV_SERIES ? TV_GENRE : MOVIE_GENRE));
    setSelectedMediaType(value);
    setFilterValues({
      ...filterValues,
      genre: MediaType.TV_SERIES ? TV_GENRE[0].id : MOVIE_GENRE[0].id,
    });
  };

  const onHandleChange = (event) => {
    const { value, name } = event.target;
    setFilterValues({ ...filterValues, [name]: value });
  };

  const discoverData = () => {
    const filterQuery = `mediaType=${selectedMediaType}&filterDataStr=${encodeURIComponent(
      `&region=${filterValues.region}&sort_by=${filterValues.sortBy}.${filterValues.sortOrder}&vote_count.gte=10&include_video=false&with_genres=${filterValues.genre}&include_adult=true`
    )}`;
    Router.push(`/discover?${filterQuery}&page=1`);
  };

  const clearFilter = () => {
    setSelectedMediaType(MediaType.MOVIE);
    setFilterValues(initialFilterValues);
  };

  const handlePageClick = (page) => {
    const filterQuery = `mediaType=${selectedMediaType}&filterDataStr=${encodeURIComponent(
      `&region=${filterValues.region}&sort_by=${filterValues.sortBy}.${filterValues.sortOrder}&vote_count.gte=10&include_video=false&with_genres=${filterValues.genre}&include_adult=true`
    )}`;
    Router.push(`/discover?${filterQuery}&page=${page}`);
  };

  return (
    <Fragment>
      <div className={styles.discoverContainer}>
        <div className={styles.filterWrapper}>
          <div className={styles.dropDownContainer}>
            <Dropdown
              handleOnChange={onMediaTypeChange}
              defaultValue={selectedMediaType}
              title="Media Type"
            >
              {MEDIA_TYPE.map((data) => (
                <option key={getUid()} value={data.value}>
                  {data.text}
                </option>
              ))}
            </Dropdown>
          </div>
          <div className={styles.dropDownContainer}>
            <Dropdown
              handleOnChange={onHandleChange}
              defaultValue={filterValues.genre}
              name="genre"
              title="Genre"
            >
              {defaultGenre.map((data) => (
                <option key={getUid()} value={data.id}>
                  {data.name}
                </option>
              ))}
            </Dropdown>
          </div>
          <div className={styles.dropDownContainer}>
            <Dropdown
              handleOnChange={onHandleChange}
              defaultValue={filterValues.sortBy}
              name="sortBy"
              title="Sort By"
            >
              {SORT_BY.map((data) => (
                <option key={getUid()} value={data.value}>
                  {data.text}
                </option>
              ))}
            </Dropdown>
          </div>
          <div className={styles.dropDownContainer}>
            <Dropdown
              handleOnChange={onHandleChange}
              defaultValue={filterValues.sortOrder}
              name="sortOrder"
              title="Order By"
            >
              {SORT_ORDER.map((data) => (
                <option key={getUid()} value={data.value}>
                  {data.text}
                </option>
              ))}
            </Dropdown>
          </div>
          <div className={styles.dropDownContainer}>
            <Dropdown
              handleOnChange={onHandleChange}
              defaultValue={filterValues.region}
              name="region"
              title="Released Counrty"
            >
              {COUNTRIES.map((data) => (
                <option key={getUid()} value={data.Code}>
                  {data.Name}
                </option>
              ))}
            </Dropdown>
          </div>

          <div className={styles.filterBtnWrapper}>
            <ButtonPrimary handleOnClick={discoverData} text="Discover" />
            <ButtonSecondary handleOnClick={clearFilter} text="Clear Filter" />
          </div>
        </div>
      </div>
      {props.results && (
        <ViewAll {...props} handlePageClick={handlePageClick} />
      )}
    </Fragment>
  );
};
export async function getServerSideProps(context) {
  const { query } = context;

  const { mediaType = "", filterDataStr = "", page = "1" } = query || {};
  const apiUrl = getDiscoverMediaUrl(mediaType, page, filterDataStr);
  const response = await httpService.get(apiUrl);

  return {
    props: {
      ...response,
      type: mediaType,
      filterDataStr,
      page,
    },
  };
}
export default Discover;
