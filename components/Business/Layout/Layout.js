import Head from "next/head";
import { Fragment } from "react";
import { usePageLoading } from "../../../hooks/usePageLoading";
import { useUserLocation } from "../../../utils/apiHelper";
import Loader from "../../UI/Loader/Loader";
import NavBar from "../../UI/Navbar/NavBar";
import Footer from "../Footer/Footer";

import styles from "./Layout.module.scss";
import { LayoutProvider } from "./LayoutContext";

const Layout = ({ children }) => {
  const { isPageLoading } = usePageLoading();
  const { isLoading, location, error } = useUserLocation();

  return (
    <Fragment>
      <Head>
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
        {/* <link rel="manifest" href="/site.webmanifest"></link> */}
      </Head>
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
