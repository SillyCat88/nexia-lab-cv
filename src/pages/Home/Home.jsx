import { contentHome } from "./data/contentHome";
import styles from "./Home.module.css";


export default function Home({ lang }) {
  const t = contentHome[lang];

  return (
    <div className={styles.mainContainer}>
      <header className={styles.heroLayout}>
        <h1 className={styles.heroName}>{t.hero.name}</h1>
        <p className={styles.heroTitle}>{t.hero.title}</p>
        <p className={styles.heroIntro}>{t.hero.intro}</p>
        <p className={styles.heroDescription}>{t.hero.description}</p>
      </header>

      <main className={styles.mainContent}>
        <section className={styles.aboutContainer}>
          <div className={styles.aboutContent}>
            <h2 className={styles.sectionTitle}>{t.about.title}</h2>
            <p className={styles.aboutText}>{t.about.text}</p>
          </div>

          <div className={styles.languagesLayout}>
            <h2 className={styles.sectionTitle}>{t.languages.title}</h2>

            <div className={styles.languagesList}>
              {t.languages.items.map((item, index) => (
                <div key={index} className={styles.languageCard}>
                  <h3 className={styles.languageName}>{item.language}</h3>
                  <p className={styles.languageLevel}>{item.level}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.contentContainer}>
          <h2 className={styles.sectionTitle}>{t.experience.title}</h2>

          <div className={styles.experienceLayout}>
            {t.experience.items.map((item, index) => (
              <article key={index} className={styles.experienceCard}>
                <span className={styles.experiencePeriod}>
                  {item.period}
                </span>

                <div className={styles.experienceContent}>
                  <h3 className={styles.experienceRole}>{item.role}</h3>
                  <p className={styles.experienceDescription}>
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.contentContainer}>
          <h2 className={styles.sectionTitle}>{t.skills.title}</h2>

          <div className={styles.skillsLayout}>
            {t.skills.items.map((skill, index) => (
              <span key={index} className={styles.skillTag}>
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className={styles.contentContainer}>
          <h2 className={styles.sectionTitle}>{t.technicalSkills.title}</h2>

          <div className={styles.technicalSkillsLayout}>
            {t.technicalSkills.categories.map((category, index) => (
              <div key={index} className={styles.technicalCategory}>
                <h3 className={styles.technicalCategoryTitle}>
                  {category.title}
                </h3>

                <div className={styles.technicalItems}>
                  {category.items.map((item, itemIndex) => (
                    <span key={itemIndex} className={styles.technicalItem}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.contentContainer}>
          <h2 className={styles.sectionTitle}>{t.portfolio.title}</h2>

          <p className={styles.sectionIntro}>{t.portfolio.intro}</p>

          <div className={styles.portfolioLayout}>
            {t.portfolio.items.map((item, index) => (
              <article key={index} className={styles.portfolioCard}>
                <span className={styles.portfolioType}>{item.type}</span>

                <h3 className={styles.portfolioTitle}>{item.title}</h3>

                <p className={styles.portfolioDescription}>
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <a
            href="/samples"
            className={styles.portfolioButton}
          >
            {t.portfolio.button}
          </a>
        </section>


        <section className={styles.workflowContainer}>
          <h2 className={styles.sectionTitle}>{t.workflow.title}</h2>
          <p className={styles.workflowText}>{t.workflow.text}</p>
        </section>

        <section className={styles.ctaContainer}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>{t.cta.title}</h2>
            <p className={styles.ctaText}>{t.cta.text}</p>
          </div>

          <div className={styles.ctaActions}>
            <a
              href="/samples"
              className={styles.ctaPrimary}
            >
              {t.cta.samplesButton}
            </a>

            <a
              href="/contact"
              className={styles.ctaSecondary}
            >
              {t.cta.contactButton}
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
