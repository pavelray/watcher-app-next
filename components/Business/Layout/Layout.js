import { Fragment } from "react";
import { useUserLocation } from "../../../utils/apiHelper";
import Loader from "../../UI/Loader/Loader";
import NavBar from "../../UI/Navbar/NavBar";

import styles from "./Layout.module.scss";
import { LayoutContext } from "./LayoutContext";

const Layout = ({ children }) => {
  const { isLoading, location, error } = useUserLocation();

  return (
    <LayoutContext.Provider location={location}>
      <NavBar />
      {isLoading && <Loader />}
      {!isLoading && <div className={styles.container}>{children}</div>}
    </LayoutContext.Provider>
  );
};

export default Layout;
