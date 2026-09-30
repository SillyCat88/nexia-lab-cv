import { useState, useEffect } from "react";
import { contentLocalize } from "./data/contentLocalize";
import styles from "./Localization.module.css";


export default function Localization ({ lang }) {
  
  const t = contentLocalize[lang];
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (!selectedItem) return;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedItem(null);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedItem]);

  const handleCardClick = (item) => {
    const selection = window.getSelection();
    if (selection && selection.toString().length > 0) {
      return;
    }
    setSelectedItem(item);
  };


  return (
    <div className={styles.mainContainer}>

      <header className={styles.headerLayout}>
        <h1 className={styles.headerTitle}>
          {t.pageTitle}
        </h1>
        <p className={styles.headerText}>
          {t.pageDescription}
        </p>
      </header>

      <section className={styles.cardsSection}>
        <div 
          className={styles.cardsGrid}
          tabIndex={0}
        >
          {t.items.map((item) => (
            <article
              key={item.id}
              className={styles.faceCard}
              onClick={() => handleCardClick(item)}
            >
              <h3 className={styles.cardTitle}>{item.card.title}</h3>
              <p className={styles.cardDescription}>
                {item.card.description}
              </p>

              <ul className={styles.cardPoints}>
                {item.card.points.map((point) => (
                  <li key={point.label}>
                    <strong>{point.label}</strong>
                    <span>{point.text}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className={styles.cardButton}
                onClick={(event) => {
                  event.stopPropagation();
                  setSelectedItem(item);
                }}
              >
                {t.readMore}
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.fileFormatsSection}>
        <h2 className={styles.sectionTitle}>{t.fileFormatsTitle}</h2>

        <div 
          className={styles.fileFormatsGrid}
          tabIndex={0}
        >
          {t.fileFormats.map((item) => (
            <article
              key={item.id}
              className={styles.fileFormatCard}
            >
              <div className={styles.fileFormatHeader}>
                <span className={styles.fileFormatLabel}>
                  {item.format}
                </span>
                <h3 className={styles.fileFormatTitle}>
                  {item.title}
                </h3>
              </div>

              <p className={styles.fileFormatDescription}>
                {item.description}
              </p>

              <pre className={styles.fileFormatExample}>
                <code>{item.example}</code>
              </pre>

              <ul className={styles.fileFormatPoints}>
                {item.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {selectedItem && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelectedItem(null)}
        >
          <div
            className={styles.modal}
            tabIndex={0}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={styles.modalClose}
              onClick={() => setSelectedItem(null)}
              aria-label="Close"
            >
              ×
            </button>

            <h2 className={styles.modalTitle}>
              {selectedItem.title}
            </h2>

            <p className={styles.modalLead}>
              {selectedItem.lead}
            </p>

            <div className={styles.modalContent}>
              {selectedItem.sections.map((section) => (
                <section
                  key={section.heading}
                  className={styles.modalSection}
                >
                  <h3 className={styles.modalSectionTitle}>
                    {section.heading}
                  </h3>
                  <p className={styles.modalSectionText}>
                    {section.text}
                  </p>
                </section>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
