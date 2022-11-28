import Head from "next/head";
import { Fragment } from "react";
import { useUserLocation } from "../../../utils/apiHelper";
import Loader from "../../UI/Loader/Loader";
import NavBar from "../../UI/Navbar/NavBar";

import styles from "./Layout.module.scss";
import { LayoutContext } from "./LayoutContext";

const Layout = ({ children }) => {
  const { isLoading, location, error } = useUserLocation();

  return (
    <Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="keywords" content="titla, meta, nextjs" />
        <meta name="author" content="Pavel Ray" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <LayoutContext.Provider location={location}>
        <NavBar />
        {isLoading && <Loader />}
        {!isLoading && <div className={styles.container}>{children}</div>}
      </LayoutContext.Provider>
    </Fragment>
  );
};

export default Layout;
