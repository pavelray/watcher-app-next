import React from "react";
import { APP_NAME } from "../../../utils/constants";
import { style } from "./AboutComponent.style";

const AboutComponent = () => {
  return (
    <div className="about">
      <div className="about-title">{APP_NAME}</div>
      <div className="about-sub-heading">All about entertenment</div>
      <div className="about-body">
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
          We are using TMDB api to provide all information regarding the Movies
          and Tv Series.
        </p>
        <p>
          Our team is made up of dedicated movie enthusiasts who bring their
          expertise and passion to the website. We are committed to providing
          our visitors with the best possible experience and welcome feedback
          and suggestions to improve our site.
        </p>
        <p>
          Thank you for visiting {APP_NAME}. We hope you enjoy your time on our
          website and find the information and community here as enjoyable as we
          do.
        </p>
        <p>
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
          <span className="material-symbols-outlined">coffee</span>
        </div>
      </div>
      <style jsx>{style}</style>
    </div>
  );
};

export default AboutComponent;
