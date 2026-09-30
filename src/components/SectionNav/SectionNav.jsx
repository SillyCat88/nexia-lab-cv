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
        to="/samples"
        className={({ isActive }) =>
          `${styles.navLink} ${isActive ? styles.isActive : ""}`
        }
      >
        {t.samples}
      </NavLink>

      <NavLink
        to="/localization"
        className={({ isActive }) =>
          `${styles.navLink} ${isActive ? styles.isActive : ""}`
        }
      >
        {t.localization}
      </NavLink>

      <NavLink
        to="/documents"
        className={({ isActive }) =>
          `${styles.navLink} ${isActive ? styles.isActive : ""}`
        }
      >
        {t.documents}
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