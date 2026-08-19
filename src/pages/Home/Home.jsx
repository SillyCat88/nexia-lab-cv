import { content } from "./data/contentHome";
import styles from "./Home.module.css";


export default function Home({ lang }) {
  const t = content[lang];

  return (
    <div className={styles.mainContainer}>
      
      <header className={styles.heroLayout}>
        <h1 className={styles.heroName}>{t.name}</h1>
        <h2 className={styles.heroLanguagePair}>
          <span className={styles.heroRole}>{t.heroRole}</span>
          {" • "}{t.heroLanguagePair}
        </h2>
        <p className={styles.heroSubtitle}>
          {t.heroSubtitle}
        </p>
      </header>

      <div className={styles.mainGrid}>
        <aside className={styles.sidebarContent}>
          <div className={styles.sidebarLayout}>
            <div className={styles.contentContainer}>
              <h3 className={styles.sidebarLanguagesTitle}>{t.contentLanguages}</h3>
              <p className={styles.sidebarLanguagesText}>{t.languages}</p>
            </div>

            <div className={styles.contentContainer}>
              <h3>{t.contentTools}</h3>
              <div className={styles.toolsLayout}>
                {t.tools.map((tool, i) => (
                  <span key={i} className={styles.toolsContainer}>{tool}</span>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <section className={styles.mainContent}>
          <div className={styles.cardContainer}>
            <div className={styles.cardLayout}>
              <h3>{t.contentAbout}</h3>
              <p className={styles.cardText}>{t.about}</p>
            </div>
          </div>

          <div className={styles.contentContainer}>
            <h3>{t.contentServices}</h3>
            <ul className={styles.tagsLayout}>
              {t.services.map((s, i) => (
                <li key={i}>
                  <span className={styles.tagsContainer}>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.contentContainer}>
            <h3>{t.contentExperience}</h3>
            {t.experience.map((e, i) => (
              <div key={i} className={styles.cardContainer}>
                <div className={styles.cardLayout}>
                  <h4 className={styles.cardExperienceTitle}>{e.title}</h4>
                  <span className={styles.cardExperienceYears}>
                    {e.period}
                  </span>
                  <p className={styles.cardText}>{e.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

    </div>
  );
}