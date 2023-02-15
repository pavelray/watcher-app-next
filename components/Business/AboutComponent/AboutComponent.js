import Image from "next/image";
import Link from "next/link";
import React from "react";
import { APP_NAME } from "../../../utils/constants";
import { style } from "./AboutComponent.style";

const AboutComponent = () => {
  return (
    <div className="about">
      <div className="about-title">{APP_NAME}</div>
      <div className="about-sub-heading">All about entertenment</div>
      <div className="about-body">
        <h3>About</h3>
        <p>
          {APP_NAME}, the ultimate destination for movie enthusiasts! We are a
          community-driven website that provides in-depth information on the
          latest and greatest movies, as well as classics from the past.
        </p>
        <p>
          Our mission is to provide our visitors with accurate and up-to-date
          information on movies, as well as a platform for movie lovers to
          connect and share their passion for cinema. We believe that movies
          have the power to entertain, educate, and inspire, and we are
          dedicated to sharing that power with our audience.
        </p>
        <p>
          Our website features a wide range of content, including reviews,
          trailers, cast and crew information, and box office data. We also have
          a vibrant community of contributors who share their thoughts and
          opinions on movies through our forum and social media channels.
        </p>
        <p>
          Our team is made up of dedicated movie enthusiasts who bring their
          expertise and passion to the website. We are committed to providing
          our visitors with the best possible experience and welcome feedback
          and suggestions to improve our site.
        </p>
        <h3>Data and Privacy Policy</h3>
        <p>
          This website is completly free and We are using TMDB api to show all
          the data in our website and 2Embed for steaming api. We do not store
          any copyright-protected content on our website. For more details
          please visit our policy links
          <ul>
            <li className="link">
              <Link href="/policy/privacy">Privacy Policy</Link>
            </li>
            <li className="link">
              <Link href="/policy/cookie-policy">Cookie Policy</Link>
            </li>
          </ul>
        </p>
        <p>
          Thank you for visiting {APP_NAME}. We hope you enjoy your time on our
          website and find the information and community here as enjoyable as we
          do.
        </p>
        <p className="comming-soon">
          <b>Mobile App - Comming Soon !!</b>
        </p>
      </div>
      <div className="about-extra">
        <div className="coffee">
          <a
            href="https://www.buymeacoffee.com/pavelray"
            title="If you like my effort, you can buy me a coffee :)"
            target="_blank"
            rel="noreferrer"
          >
            Buy me a Coffee
          </a>
          <span>
            <Image
              src="/icons/common/coffee-cup.png"
              alt=""
              width={25}
              height={25}
              title="Show Menu"
            />
          </span>
        </div>
      </div>

      <br />
      <br />
      <style jsx>{style}</style>
    </div>
  );
};

export default AboutComponent;
