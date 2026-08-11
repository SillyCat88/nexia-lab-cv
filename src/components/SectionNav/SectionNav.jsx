import { NavLink } from "react-router-dom";
import { content } from "./data/contentNav";
import styles from "./SectionNav.module.css";

export default function SectionNav({ lang }) {
  const t = content[lang];

  return (
    <nav className={styles.navContainer}>
      <NavLink
        to="/home"
        className={({ isActive }) =>
          `${styles.navLink} ${isActive ? styles.isActive : ""}`
        }
      >
        {t.home}
      </NavLink>

      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          `${styles.navLink} ${isActive ? styles.isActive : ""}`
        }
      >
        {t.dashboard}
      </NavLink>

      <NavLink
        to="/media"
        className={({ isActive }) =>
          `${styles.navLink} ${isActive ? styles.isActive : ""}`
        }
      >
        {t.media}
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `${styles.navLink} ${isActive ? styles.isActive : ""}`
        }
      >
        {t.contact}
      </NavLink>
    </nav>
  );
}