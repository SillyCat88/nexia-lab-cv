import { content } from "./data/contentFooter";
import styles from "./Footer.module.css";
 
export default function Footer ({ lang }) {
  const t = content[lang];
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footerContainer}>
      <p>
        {"© "}{year} <span className={styles.footerAccent}>{t.name}</span>
        {" • "}{t.footerRole}
      </p>
    </footer>
  ) 
}