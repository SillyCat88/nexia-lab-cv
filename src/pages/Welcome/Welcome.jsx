import { Link } from "react-router-dom";
import { content } from "./data/contentWelcome";
import LanguageSwitcher from "../../components/LanguageSwitcher/LanguageSwitcher";
import styles from "./Welcome.module.css";


export default function Welcome({ lang }) {
  const t = content[lang];

  return (
    <div className={styles.mainLayout}>

      <div className={styles.mainContainer}>
        <section className={styles.cardContainer}>
          <h1 className={styles.mainTitle}>{t.pageTitle}</h1>
          
          <Link to="/home" className={styles.cardLink}>
            {t.exploreLink}
          </Link>
        </section>
      </div>

    </div>
  );
}