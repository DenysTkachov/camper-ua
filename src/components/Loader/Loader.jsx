import { RotatingLines } from "react-loader-spinner";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.loaderContainer}>
        <RotatingLines
          strokeColor="#D84343"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </div>
    </div>
  );
};

export default Loader;