import { Link } from "react-router-dom";
import { content } from "./data/contentWelcome";
import LanguageSwitcher from "../../components/LanguageSwitcher/LanguageSwitcher";
import styles from "./Welcome.module.css";


export default function Welcome({ lang, setLang }) {
  const t = content[lang];

  return (
    <main className={styles.page}>
      <LanguageSwitcher
        lang={lang}
        setLang={setLang}
      />

      <div className={styles.container}>
        <section className={styles.panel}>
          <h1 className={styles.title}>{t.pageTitle}</h1>
          
          <Link to="/home" className={styles.link}>
            {t.exploreLink}
          </Link>
        </section>
      </div>
    </main>
  );
}