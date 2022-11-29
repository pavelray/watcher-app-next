import Image from "next/image";
import { Fragment } from "react";
import { API_IMAGE_URL } from "../../../utils/constants";
import { style } from "./WatchProvider.style";

const WatchProvider = ({ providers }) => {
  const renderStreamingProvider = () => {
    return (
      providers?.flatrate && (
        <Fragment>
          <div className="provider-title">Streaming</div>
          <div className="provider-logo-wrapper">
            {providers?.flatrate.map((ott) => (
              <div key={ott.provider_id} className="provider-logo">
                <Image
                  src={`${API_IMAGE_URL}/w45/${ott.logo_path}`}
                  alt={ott.provider_name}
                  width="45"
                  height="45"
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
                <Image
                  src={`${API_IMAGE_URL}/w45/${ott.logo_path}`}
                  alt={ott.provider_name}
                  width="45"
                  height="45"
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
                <Image
                  src={`${API_IMAGE_URL}/w45/${ott.logo_path}`}
                  alt={ott.provider_name}
                  width="45"
                  height="45"
                />
              </div>
            ))}
          </div>
        </Fragment>
      )
    );
  };

  return (
    <Fragment>
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
      <style jsx>{style}</style>
    </Fragment>
  );
};

export default WatchProvider;
