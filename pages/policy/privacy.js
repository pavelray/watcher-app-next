import React from "react";
import styles from "../../styles/Policy.module.scss";

const Privacy = () => {
  return (
    <div className={styles.policyContainer}>
      <div className={styles.title}>Privacy Policy</div>
      <div className={styles.subtitle}>Last Updated: 15/02/2023</div>
      <p>
        Protecting the privacy of our users is a top priority for our movie
        streaming website. This Privacy Policy is intended to inform our users
        about the collection, use, and disclosure of their personal information
        while using our website.
      </p>
      <p>
        <span className={styles.heading}>Personal Information Collection:</span>{" "}
        We may collect personal information about our users when they register
        for an account on our website. This information may include their name,
        email address, and billing information. We use cookies to collect
        information about our users&apos; viewing history and preferences, which
        helps us provide personalized recommendations, improve our services and
        to provide analytics.
      </p>
      <p>
        <span className={styles.heading}>TMDB API:</span> Our website uses the
        TMDB API to provide information about movies and TV shows. We do not
        collect or share any personal information from the TMDB API.
      </p>
      <p>
        <span className={styles.heading}>2Embed Streaming API:</span> We use
        2Embed as our streaming api, which may collects user data such as IP
        addresses, browser type, device type, and viewing history. This data may
        be collected to improve streaming quality. We do not collect or share
        any personal information from the 2embed. Please refer to 2embed legal{" "}
        <a href="https://2embed.biz/legal" alt="Legal" className="link">
          link
        </a>{" "}
        for more information about their service.
      </p>
      <p>
        <span className={styles.heading}>Data Sharing:</span> We do not share
        our users&apos; personal information with third parties for marketing or
        advertising purposes. Presently, we do not share any user data with our
        service providers, such as 2Embed and TMDB, for the purpose of providing
        our services. We may share user data if required by law or in response
        to legal requests in future.
      </p>
      <p>
        <span className={styles.heading}>Data Security:</span> We take
        reasonable measures to protect our users&apos; personal information from
        unauthorized access, disclosure, and misuse. We use industry-standard
        encryption and authentication techniques to protect user data. However,
        no data transmission over the internet can be guaranteed to be
        completely secure, and we cannot guarantee the security of our
        users&apos; personal information.
      </p>
      <p>
        <span className={styles.heading}>Changes to this Policy:</span> We may
        update this Privacy Policy from time to time to reflect changes in our
        practices or in applicable laws. We encourage our users to review this
        Policy periodically.
      </p>
      <p>
        By using our website, our users consent to the collection and use of
        their personal information as described in this Privacy Policy. If our
        users have any questions or concerns about this Policy, they may contact
        us at any time. <br />
        hello@thefilmmastery.com
      </p>
    </div>
  );
};

export default Privacy;
