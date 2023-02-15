import React from "react";
import styles from "../../styles/Policy.module.scss";

const CookiePolicy = () => {
  return (
    <div className={styles.policyContainer}>
      <div className={styles.title}>Cookie Policy</div>
      <div className={styles.subtitle}>Last Updated: 15/02/2023</div>
      <p>
        Our The Film Mastery website uses cookies to enhance the user experience
        and to provide personalized content to our users. This Cookie Policy
        explains what cookies are, how we use them, and how our users can manage
        their cookie preferences.
      </p>
      <p>
        <span className={styles.heading}>What are Cookies?</span> <br /> Cookies
        are small text files that are stored on a user&apos;s device when they
        visit a website. Cookies help websites to remember user preferences and
        settings, and to provide personalized content to users.
      </p>
      <p>
        <span className={styles.heading}>How We Use Cookies:</span> When you use
        and access the Service, we may place a number of cookies files in your
        web browser.
        <br />
        We use cookies for the following purposes: <br /> To enable certain
        functions of the Service
        <br /> To provide analytics <br /> We use both session and persistent
        cookies on the Service and we use different types of cookies to run the
        Service: <br />{" "}
        <span className={styles.heading}>Essential cookies.</span> We may use
        cookies to remember information that changes the way the Service behaves
        or looks, such as a user&apos;s language preference on the Service.{" "}
        <br />
        <span className={styles.heading}>Analytics cookies.</span> We may use
        analytics cookies to track information how the Service is used so that
        we can make improvements. We may also use analytics cookies to test new
        advertisements, pages, features or new functionality of the Service to
        see how our users react to them.
      </p>
      <p>
        <span className={styles.heading}>TMDB API:</span> Our website uses the
        TMDB API, which may also set cookies on our users&apos; devices. These
        cookies are used to authenticate user sessions and to provide
        personalized content to users.
      </p>
      <p>
        <span className={styles.heading}>2Embed:</span> Our streaming api,
        2Embed, may uses cookies to improve streaming quality and to prevent
        fraud. These cookies may collect user data, such as IP addresses and
        device type.
      </p>
      <p>
        <span className={styles.heading}>Managing Cookies:</span> Users can
        manage their cookie preferences through their web browser settings. Most
        web browsers allow users to accept or reject cookies, or to delete
        cookies from their devices. However, disabling cookies may affect the
        functionality of our website, and may prevent users from accessing
        certain features.
      </p>
      <p>
        <span className={styles.heading}>Changes to this Policy:</span> We may
        update this Cookie Policy from time to time to reflect changes in our
        practices or in applicable laws. We encourage our users to review this
        Policy periodically.
      </p>
      <p>
        By using our website, our users consent to the use of cookies as
        described in this Cookie Policy. If our users have any questions or
        concerns about this Policy, they may contact us at any time.
        <br />
        hello@thefilmmastery.com
      </p>
    </div>
  );
};

export default CookiePolicy;
