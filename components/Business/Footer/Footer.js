import Link from "next/link";
import React from "react";
import { APP_NAME } from "../../../utils/constants";
import { style } from "./Footer.style";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="link-wrapper">
          <div className="footer-links app">
            <div className="title">{APP_NAME}</div>
            <p>
              This app is developed using TMDB API. All data provided by the
              TMDB. This is an educational app which shows in which OTT platform
              the Movie/Tv series is available.
            </p>
          </div>
          <div className="footer-links">
            <div className="title">Usefull Links</div>
            <ul>
              <li>
                <Link href="/movie">Movies</Link>
              </li>
              <li>
                <Link href="/tv">Tv Series</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <div className="title">Social</div>
            <ul>
              <li>
                <Link href="/movie">Movies</Link>
              </li>
              <li>
                <Link href="/tv">Tv Series</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <style jsx>{style}</style>
    </div>
  );
};

export default Footer;
