import { content } from "./data/contentHome";
import LanguageSwitcher from "../../components/LanguageSwitcher/LanguageSwitcher";
import styles from "./Home.module.css";


export default function Home({ lang, setLang }) {
  const t = content[lang];

  return (
    <div className={styles.container}>
      <LanguageSwitcher
        lang={lang}
        setLang={setLang}
      />
      
      <header className={styles.hero}>
        <h1>{t.name}</h1>
        <h2>
          <span className={styles.accent}>{t.heroRole}</span>
          {" • "}{t.heroLanguagePair}
        </h2>
        <p className={styles.heroSubtitle}>
          {t.heroSubtitle}
        </p>
      </header>

      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <section>
            <h3>{t.sectionLanguages}</h3>
            <p>{t.languages}</p>
          </section>

          <section>
            <h3>{t.sectionTools}</h3>
            <div className={styles.toolsList}>
              {t.tools.map((tool, i) => (
                <span key={i}>{tool}</span>
              ))}
            </div>
          </section>
        </aside>

        <main className={styles.mainContent}>
          <section className={styles.card}>
            <h3>{t.sectionAbout}</h3>
            <p>{t.about}</p>
          </section>

          <section>
            <h3>{t.sectionServices}</h3>
            <ul className={styles.tags}>
              {t.services.map((s, i) => (
                <li key={i}>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3>{t.sectionExperience}</h3>
            {t.experience.map((e, i) => (
              <div key={i} className={styles.card}>
                <h4>{e.title}</h4>
                <span className={styles.highlight}>
                  {e.period}
                </span>
                <p>{e.text}</p>
              </div>
            ))}
          </section>
        </main>
      </div>

      <footer>
        <p>
          <span className={styles.accent}>{t.name}</span>
          {" • "}{t.footerRole}
        </p>
      </footer>
    </div>
  );
}