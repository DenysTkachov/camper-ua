import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <nav className={styles.headerNavigation}>
        <NavLink to="/" className={styles.headerLink}>
          RentCampers
        </NavLink>
        <div className={styles.navContainer}>
          <NavLink to="/home" className={styles.headerLink}>
            Rent
          </NavLink>
          <NavLink to="/favourite" className={styles.headerLink}>
            Favourite
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Header;