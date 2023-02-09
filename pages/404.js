import styles from "../styles/error.module.scss";
import { ERROR_MESSAGE } from "../utils/constants";

const NotFoundPage = () => {
  const errorMessage = ERROR_MESSAGE.PAGE_NOT_FOUND;
  return (
    <div className={styles.error}>
      <div className={styles["error-message"]}>{errorMessage}</div>
    </div>
  );
};

export default NotFoundPage;
