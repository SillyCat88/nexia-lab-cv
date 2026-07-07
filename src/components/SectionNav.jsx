import { NavLink } from "react-router-dom";
import styles from "./SectionNav.module.css";

export default function SectionNav() {
  return (
    <nav className={styles.sectionNav}>
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `${styles.link} ${isActive ? styles.isActive : ""}`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          `${styles.link} ${isActive ? styles.isActive : ""}`
        }
      >
        Dashboard
      </NavLink>

      <NavLink
        to="/media"
        className={({ isActive }) =>
          `${styles.link} ${isActive ? styles.isActive : ""}`
        }
      >
        Media
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `${styles.link} ${isActive ? styles.isActive : ""}`
        }
      >
        Contact
      </NavLink>
    </nav>
  );
}