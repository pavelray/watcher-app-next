/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/google-font-display */
import Head from "next/head";
import { Fragment } from "react";
import { usePageLoading } from "../../../hooks/usePageLoading";
import { useUserLocation } from "../../../utils/apiHelper";
import Loader from "../../UI/Loader/Loader";
import NavBar from "../../UI/Navbar/NavBar";

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
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4497828949688741"
          crossorigin="anonymous"
        ></script>
      </Head>
      <LayoutProvider location={location}>
        <NavBar />
        {isPageLoading && <Loader />}
        {!isPageLoading && !isLoading && (
          <div className={styles.container}>{children}</div>
        )}
      </LayoutProvider>
    </Fragment>
  );
};

export default Layout;
