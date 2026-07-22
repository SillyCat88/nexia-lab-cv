import { useState } from "react";
import { content } from "./data/contentHome";
import styles from "./Home.module.css";

export default function Home() {
  const [lang, setLang] = useState("en");
  const t = content[lang];

  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <h1>{t.name}</h1>

        <h2>
          <span className={styles.accent}>{t.heroRole}</span>
          {" • "}{t.heroLanguagePair}
        </h2>

        <p className={styles.heroSubtitle}>
          {t.heroSubtitle}
        </p>

        <div className={styles.buttons}>
          <button onClick={() => setLang("en")}>EN</button>
          <button onClick={() => setLang("ua")}>UA</button>
        </div>
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