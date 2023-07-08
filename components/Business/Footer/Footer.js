import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import {
  APP_NAME,
  LOGO_IMAGE_PATH,
  MENUS,
  STREAMING_API_URL,
} from "../../../utils/constants";
import { getUid } from "../../../utils/helperMethods";
import { style } from "./Footer.style";

const Footer = () => {
  return (
    <Fragment>
      <div className="footer">
        <div className="footer-content">
          <div className="link-wrapper">
            <div className="footer-links app">
              <div className="title">
                <Image
                  src={LOGO_IMAGE_PATH}
                  width={50}
                  height={50}
                  alt={APP_NAME}
                  title={APP_NAME}
                />
                {APP_NAME}
              </div>
              <p>
                The ultimate destination for movie enthusiasts. This product
                uses the{" "}
                <a
                  href="https://www.themoviedb.org/"
                  alt="TMDB"
                  className="link"
                  target="_blank"
                  rel="noreferrer"
                >
                  TMDB API
                </a>{" "}
                but is not endorsed or certified by TMDB and for streaming this
                product uses{" "}
                <a
                  href={`${STREAMING_API_URL}/`}
                  alt="2embed"
                  className="link"
                  target="_blank"
                  rel="noreferrer"
                >
                  2embed.org
                </a>
                .
                <br />
                Copywright @ thefilmmastery 2023.
              </p>
            </div>
            <div className="footer-links">
              <div className="title">Useful Links</div>
              <ul>
                {MENUS.map((menu) => (
                  <li key={getUid()} rel="canonical">
                    <Link href={menu.link}>{menu.text}</Link>
                  </li>
                ))}
                <li key={getUid()} rel="canonical">
                  <Link href="/policy/privacy">Privacy Policy</Link>
                </li>
                <li key={getUid()} rel="canonical">
                  <Link href="/policy/cookie-policy">Cookie Policy</Link>
                </li>
              </ul>
            </div>
            <div className="footer-links">
              <div className="title">Social</div>
              <ul>
                <li>
                  <a
                    href="https://www.instagram.com/film.mastery/"
                    target="_blank"
                    rel="noreferrer"
                  >
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
      </div>
      <div className="credit-bar">
        <div className="credit-image">
          <Image
            alt="TMDB Logo"
            width={40}
            height={40}
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"
          />
        </div>
        <div className="credit-image">
          <Image
            alt="TMDB Logo"
            width={20}
            height={20}
            src="https://www.2embed.cc/images/logo.png"
          />
        </div>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  );
};

export default Footer;
