import { contentApp } from "./data/contentApp";
import styles from "./AppLocalize.module.css";

export default function AppLocalize({ lang }) {
  const t = contentApp[lang];

  return (
    <div className={styles.mainContainer}>
      <header className={styles.hero}>
        <p className={styles.pageTitle}>{t.hero.pageTitle}</p>

        <h1 className={styles.heroTitle}>{t.hero.title}</h1>

        <p className={styles.heroLead}>{t.hero.lead}</p>

        <div className={styles.meta}>
          {t.hero.meta.map((item, index) => (
            <span key={index} className={styles.metaItem}>
              {item}
            </span>
          ))}
        </div>
      </header>

      <main className={styles.mainContent}>
        <section className={styles.sampleSection}>
          <div className={styles.sampleText}>
            <h2 className={styles.sectionTitle}>{t.sample.title}</h2>

            {t.sample.text.map((paragraph, index) => (
              <p key={index} className={styles.bodyText}>
                {paragraph}
              </p>
            ))}

            <ul className={styles.list}>
              {t.sample.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <p className={styles.bodyText}>{t.sample.closing}</p>
          </div>

          <div className={styles.infoCard}>
            <span className={styles.infoLabel}>APP LOCALIZATION</span>
            <span className={styles.infoValue}>Android</span>
            <span className={styles.infoValue}>Kotlin + Jetpack Compose</span>
            <span className={styles.infoValue}>XML resources</span>
            <span className={styles.infoValue}>English → Ukrainian</span>
          </div>
        </section>

        <section className={styles.workflowSection}>
          <h2 className={styles.sectionTitle}>{t.workflow.title}</h2>

          <div className={styles.workflow}>
            {t.workflow.steps.map((step) => (
              <article key={step.number} className={styles.step}>
                <div className={styles.stepHeader}>
                  <span className={styles.stepNumber}>{step.number}</span>

                  <h3 className={styles.stepTitle}>{step.title}</h3>
                </div>

                <div className={styles.stepContent}>
                  <div className={styles.stepText}>
                    {step.text.map((paragraph, index) => (
                      <p key={index} className={styles.bodyText}>
                        {paragraph}
                      </p>
                    ))}

                    {step.items && (
                      <ul className={styles.list}>
                        {step.items.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    )}

                    {step.details && (
                      <div className={styles.details}>
                        {step.details.map(([label, value], index) => (
                          <div key={index} className={styles.detail}>
                            <span className={styles.detailLabel}>
                              {label}
                            </span>

                            <span className={styles.detailValue}>
                              {value}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {step.examples && (
                      <div className={styles.examples}>
                        <h4 className={styles.subTitle}>
                          {step.examplesTitle}
                        </h4>

                        {step.examples.map(([source, target], index) => (
                          <div key={index} className={styles.example}>
                            <span className={styles.source}>{source}</span>
                            <span className={styles.arrow}>→</span>
                            <span className={styles.target}>{target}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {step.file && (
                      <code className={styles.file}>{step.file}</code>
                    )}

                    {step.closing && (
                      <p className={styles.bodyText}>{step.closing}</p>
                    )}
                  </div>

                  {step.image && (
                    <figure className={styles.workflowImage}>
                      <img
                        src={step.image}
                        alt={step.imageAlt}
                        loading="lazy"
                      />
                    </figure>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.resultSection}>
          <h2 className={styles.sectionTitle}>{t.result.title}</h2>

          <p className={styles.resultIntro}>{t.result.text}</p>

          <div className={styles.resultGrid}>
            {t.result.images.map((image, index) => (
              <figure key={index} className={styles.resultCard}>
                <figcaption>{image.label}</figcaption>

                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        </section>

        <section className={styles.toolsSection}>
          <h2 className={styles.sectionTitle}>{t.tools.title}</h2>

          <div className={styles.toolsGrid}>
            {t.tools.items.map(([label, value], index) => (
              <div key={index} className={styles.toolItem}>
                <span className={styles.toolLabel}>{label}</span>
                <span className={styles.toolValue}>{value}</span>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.demonstratesSection}>
          <h2 className={styles.sectionTitle}>
            {t.demonstrates.title}
          </h2>

          <p className={styles.workflowLine}>
            {t.demonstrates.workflow}
          </p>

          <p className={styles.demonstratesText}>
            {t.demonstrates.text}
          </p>
        </section>
      </main>
    </div>
  );
}
