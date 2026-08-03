import { mediaItems } from "./data/contentMedia";
import styles from "./MediaExplorer.module.css";

export default function MediaExplorer({
  selected,
  setSelected,
  t
}) {
  if (!selected) {
    return (
      <aside className={styles.explorerContainer}>
        <div className={styles.explorerLayout}>
          <p className={styles.explorerPlaceholder}>
            {t.explorerPlaceholder}
          </p>
        </div>
      </aside>
    );
  }

  return (
    <aside className={styles.explorerContainer}>
      <div className={styles.explorerLayout}>
        <button
          type="button"
          className={styles.closeButton}
          onClick={() => setSelected(null)}
          aria-label={t.closeExplorer}
        >
          ✕
        </button>

        <h2 className={styles.explorerTitle}>
          {selected.title}
        </h2>

        <div className={styles.fieldLayout}>
          <h3 className={styles.fieldLabel}>{t.fieldDate}</h3>
          <p className={styles.fieldText}>{selected.date}</p>
        </div>

        <div className={styles.fieldLayout}>
          <h3 className={styles.fieldLabel}>{t.fieldSubject}</h3>
          <p className={styles.fieldText}>{selected.subject}</p>
        </div>

        <div className={styles.fieldLayout}>
          <h3 className={styles.fieldLabel}>{t.fieldDescription}</h3>
          <p className={styles.fieldText}>{selected.description}</p>
        </div>
      </div>
    </aside>
  );
}
