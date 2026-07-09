import { useState } from "react";
import { content } from "../../data";
import styles from "./Home.module.css";

export default function Home() {
  const [lang, setLang] = useState("en");
  const t = content[lang];

  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <h1>{t.name}</h1>

        <h2>
          <span className={styles.accent}>Language Specialist</span>
          {" • "}EN↔UA Translator
        </h2>

        <p className={styles.heroSubtitle}>
          MTPE • UX/UI Localization • Technical Translation • Content Writing
        </p>

        <div className={styles.buttons}>
          <button onClick={() => setLang("en")}>EN</button>
          <button onClick={() => setLang("ua")}>UA</button>
        </div>
      </header>

      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <section>
            <h3>Languages</h3>
            <p>{t.languages}</p>
          </section>

          <section>
            <h3>Tools & Technologies</h3>

            <div className={styles.toolsList}>
              {t.tools.map((tool, i) => (
                <span key={i}>{tool}</span>
              ))}
            </div>
          </section>
        </aside>

        <main className={styles.mainContent}>
          <section className={styles.card}>
            <h3>About</h3>
            <p>{t.about}</p>
          </section>

          <section>
            <h3>Services</h3>

            <ul className={styles.tags}>
              {t.services.map((s, i) => (
                <li key={i}>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3>Experience</h3>

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
          <span className={styles.accent}>OLENA KULIKOVA</span>
          {" • "}Translator & Language Specialist
        </p>
      </footer>
    </div>
  );
}