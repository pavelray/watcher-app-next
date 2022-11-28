/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { Fragment, useCallback, useEffect, useState } from "react";
import { API_IMAGE_URL, MEDIA_TYPE } from "../../../utils/constants";
import { getProvidersAPIUrl } from "../../../utils/apiUtills";
import "./WatchProvider.scss";

const WatchProvider = ({ type = MEDIA_TYPE.MOVIE, id }) => {
  const USER_COUNTRY = "IN";
  const [providers, setProviderData] = useState({});
  // const [selectedProvider, setSelectedProvider] = useState([]);

  const getProviders = useCallback(() => {
    const fetchProviders = async (id) => {
      const url = getProvidersAPIUrl(type, id);
      const resp = await axios.get(url);
      const { data } = resp;
      setProviderData(data.results[USER_COUNTRY]);
    };
    fetchProviders(id);
  }, [id]);

  useEffect(() => {
    getProviders(id);
  }, [id]);

  const renderStreamingProvider = () => {
    return (
      providers?.flatrate && (
        <Fragment>
          <div className="provider-title">Streaming</div>
          <div className="provider-logo-wrapper">
            {providers?.flatrate.map((ott) => (
              <div key={ott.provider_id} className="provider-logo">
                <img
                  src={`${API_IMAGE_URL}/w45/${ott.logo_path}`}
                  alt={ott.provider_name}
                />
              </div>
            ))}
          </div>
        </Fragment>
      )
    );
  };

  const renderBuyProvider = () => {
    return (
      providers?.buy && (
        <Fragment>
          <div className="provider-title">Buy</div>
          <div className="provider-logo-wrapper">
            {providers?.buy.map((ott) => (
              <div key={ott.provider_id} className="provider-logo">
                <img
                  src={`${API_IMAGE_URL}/w45/${ott.logo_path}`}
                  alt={ott.provider_name}
                />
              </div>
            ))}
          </div>
        </Fragment>
      )
    );
  };

  const renderRentProvider = () => {
    return (
      providers?.rent && (
        <Fragment>
          <div className="provider-title">Rent</div>
          <div className="provider-logo-wrapper">
            {providers?.rent.map((ott) => (
              <div key={ott.provider_id} className="provider-logo">
                <img
                  src={`${API_IMAGE_URL}/w45/${ott.logo_path}`}
                  alt={ott.provider_name}
                />
              </div>
            ))}
          </div>
        </Fragment>
      )
    );
  };

  return (
    <div className="provider">
      {providers && renderStreamingProvider()}
      {providers && renderBuyProvider()}
      {providers && renderRentProvider()}
      {!providers && (
        <div className="provider-not-available">
          Not Available for streaming in your location
        </div>
      )}
    </div>
  );
};

export default WatchProvider;
