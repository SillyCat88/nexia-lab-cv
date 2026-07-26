import { Link } from "react-router-dom";
import { content } from "./data/contentWelcome";
import LanguageSwitcher from "../../components/LanguageSwitcher/LanguageSwitcher";
import styles from "./Welcome.module.css";


export default function Welcome({ lang, setLang }) {
  const t = content[lang];

  return (
    <main className={styles.mainLayout}>
      <LanguageSwitcher
        lang={lang}
        setLang={setLang}
      />

      <div className={styles.mainContainer}>
        <section className={styles.cardContainer}>
          <h1 className={styles.mainTitle}>{t.pageTitle}</h1>
          
          <Link to="/home" className={styles.cardLink}>
            {t.exploreLink}
          </Link>
        </section>
      </div>
    </main>
  );
}