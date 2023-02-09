import Image from "next/image";
import Link from "next/link";
import React from "react";
import { APP_NAME, LOGO_IMAGE_PATH } from "../../../utils/constants";
import { style } from "./Footer.style";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="link-wrapper">
          <div className="footer-links app">
            <div className="title">
            <Image src={LOGO_IMAGE_PATH} width={100} height={65} alt={APP_NAME} title={APP_NAME} />{APP_NAME}
            </div>
            <p>
             The ultimate destination for movie enthusiasts.
             This app is using data from TMDB api.
             Copywright @ thefilmmastery 2023.
            </p>
          </div>
          <div className="footer-links">
            <div className="title">Useful Links</div>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
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
                <a href="https://www.instagram.com/film.mastery/" target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <Link href="/facebook">Facebook</Link>
              </li>
              <li>
                <Link href="/youtube">Youtube</Link>
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
