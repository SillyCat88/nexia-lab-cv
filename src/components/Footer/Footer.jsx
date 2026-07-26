import { content } from "./data/contentFooter";
import styles from "./Footer.module.css";
 
export default function Footer ({ lang }) {
  const t = content[lang];

  return (
    <footer className={styles.footerContainer}>
      <p>
        <span className={styles.accent}>{t.name}</span>
        {" • "}{t.footerRole}
      </p>
    </footer>
  ) 
}