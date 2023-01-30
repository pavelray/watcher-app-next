/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/google-font-display */
import Head from "next/head";
import Script from "next/script";
import { Fragment } from "react";
import { usePageLoading } from "../../../hooks/usePageLoading";
import { useUserLocation } from "../../../utils/apiHelper";
import Loader from "../../UI/Loader/Loader";
import NavBar from "../../UI/Navbar/NavBar";
import Footer from "../Footer/Footer";

import styles from "./Layout.module.scss";
import { LayoutContext, LayoutProvider } from "./LayoutContext";

const Layout = ({ children }) => {
  const { isPageLoading } = usePageLoading();
  const { isLoading, location, error } = useUserLocation();

  return (
    <Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="keywords" content="titla, meta, nextjs" />
        <meta name="author" content="Pavel Ray" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <Script
        id="google-ads"
        strategy="afterInteractive"
        onError={(e) => {
          console.error("Adsense Script failed to load", e);
        }}
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4497828949688741"
        crossOrigin="anonymous"
      />
      <Script
        src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"
        async
      />
      <LayoutProvider location={location}>
        <NavBar />
        {(isPageLoading || isLoading) && <Loader />}
        {!isPageLoading && !isLoading && (
          <div className={styles.container}>{children}</div>
        )}
        <Footer />
      </LayoutProvider>
    </Fragment>
  );
};

export default Layout;
