import Image from "next/image";
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
          the details in our website and 2embed for steaming the content. We do
          not store any copyright-protected content on our website. We highly
          ENCOURAGE users to BUY the CDs or DVDs of the movie or the tv series
          they like.
        </p>
        <h4>TMDB API Usage:</h4>
        <p>
          Our website is a licensed user of the TMDB API, and we abide by all of
          TMDB&apos;s terms and conditions regarding the use of their API and
          the data it provides. We do not own any of the data provided by the
          <a
            className="link"
            href="https://www.themoviedb.org/documentation/api/terms-of-use"
            alt="API"
          >
            TMDB API
          </a>{" "}
          and all rights belong to their respective owners.
          <br />
          Copyright Infringement: If you believe that your copyright or
          trademark has been infringed upon by any of the content displayed on
          our website, please contact us immediately. We take all claims of
          copyright infringement seriously and will take appropriate action to
          remove infringing content.
          <br />
          <br />
          Accuracy of Information: We make every effort to ensure the accuracy
          of the information provided on our website, however, we cannot
          guarantee that it is error-free. The information provided by the TMDB
          API is subject to change without notice and we cannot be held
          responsible for any inaccuracies.
          <br />
          <br />
          Disclaimer: Our website is for informational purposes only and does
          not endorse or support any particular content or viewpoints. We are
          not responsible for any errors or omissions in the content displayed
          on our website, or for any losses or damages that may result from
          using the information provided.
          <br />
          <br />
          Changes to Policy: We reserve the right to change this policy at any
          time, and we encourage users to review this policy periodically for
          any updates. Your continued use of our website following any changes
          to this policy constitutes your acceptance of the new terms.
        </p>
        <h4>2embed Usage:</h4>
        <p>
          2embed crawls various websites and search engines to find movie
          streaming links which are then stored into our 2embed database and
          served to you through our API service. We are using 2embed API to
          stream the content in our website. Please refer to 2embed legal{" "}
          <a href="https://2embed.biz/legal" alt="Legal" className="link">
            link
          </a>{" "}
          for more information about their service.
        </p>
        <p>
          If you have any questions or concerns about our copyright policy or
          the usage of TMDB API on our website, please contact us at
          hello@thefilmmastery.com.
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
          <span><Image
            src="/icons/common/coffee-cup.png"
            alt=""
            width={25}
            height={25}
            title="Show Menu"
          /></span>
        </div>
      </div>

      <br />
      <br />
      <style jsx>{style}</style>
    </div>
  );
};

export default AboutComponent;
