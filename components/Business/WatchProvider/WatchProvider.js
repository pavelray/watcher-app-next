import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { API_IMAGE_URL } from "../../../utils/constants";
import { style } from "./WatchProvider.style";

const WatchProvider = ({ providers, homepage }) => {

  return (
    <Fragment>
      <div className="provider">
        {providers?.flatrate && (
          <Fragment>
            <div className="provider-title">Streaming</div>
            <div className="provider-logo-wrapper">
              {providers?.flatrate.map((ott) => (
                <div key={ott.provider_id} className="provider-logo">
                  <Link href={homepage} passHref legacyBehavior>
                    <a target="_blank">
                      <Image
                        src={`${API_IMAGE_URL}/w45/${ott.logo_path}`}
                        alt={ott.provider_name}
                        width="45"
                        height="45"
                      />
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </Fragment>
        )}
        {!providers?.flatrate && (
          <div className="provider-not-available">
            Sorry !! Not Available for streaming in your location.
          </div>
        )}
      </div>
      <style jsx>{style}</style>
    </Fragment>
  );
};

export default WatchProvider;
