import { content } from "./data/contentHome";
import LanguageSwitcher from "../../components/LanguageSwitcher/LanguageSwitcher";
import Footer from "../../components/Footer/Footer";
import styles from "./Home.module.css";


export default function Home({ lang, setLang }) {
  const t = content[lang];

  return (
    <div className={styles.mainContainer}>
      <LanguageSwitcher
        lang={lang}
        setLang={setLang}
      />
      
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
            <section className={styles.sectionContainer}>
              <h3 className={styles.sidebarLanguagesTitle}>{t.sectionLanguages}</h3>
              <p className={styles.sidebarLanguagesText}>{t.languages}</p>
            </section>

            <section className={styles.sectionContainer}>
              <h3>{t.sectionTools}</h3>
              <div className={styles.toolsLayout}>
                {t.tools.map((tool, i) => (
                  <span key={i} className={styles.toolsContainer}>{tool}</span>
                ))}
              </div>
            </section>
          </div>
        </aside>

        <main className={styles.mainContent}>
          <section className={styles.cardContainer}>
            <div className={styles.cardLayout}>
              <h3>{t.sectionAbout}</h3>
              <p className={styles.cardText}>{t.about}</p>
            </div>
          </section>

          <section className={styles.sectionContainer}>
            <h3>{t.sectionServices}</h3>
            <ul className={styles.tagsLayout}>
              {t.services.map((s, i) => (
                <li key={i}>
                  <span className={styles.tagsContainer}>{s}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.sectionContainer}>
            <h3>{t.sectionExperience}</h3>
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
          </section>
        </main>
      </div>

      <Footer 
        lang={lang}
      />
    </div>
  );
}