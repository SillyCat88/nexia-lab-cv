import { NavLink } from "react-router-dom";
import styles from "./SectionNav.module.css";

export default function SectionNav() {
  return (
    <nav className={styles.navContainer}>
      <NavLink
        to="/home"
        className={({ isActive }) =>
          `${styles.navLink} ${isActive ? styles.isActive : ""}`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          `${styles.navLink} ${isActive ? styles.isActive : ""}`
        }
      >
        Dashboard
      </NavLink>

      <NavLink
        to="/media"
        className={({ isActive }) =>
          `${styles.navLink} ${isActive ? styles.isActive : ""}`
        }
      >
        Media
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `${styles.navLink} ${isActive ? styles.isActive : ""}`
        }
      >
        Contact
      </NavLink>
    </nav>
  );
}