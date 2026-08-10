import styles from "./Explorer.module.css";

export default function Explorer({
  t,
  selected,
  setSelected,
}) {
  return (
    <div className={styles.explorerLayout}>
      {selected ? (
        <div className={styles.explorerContainer}>
          <button
            className={styles.explorerClose}
            onClick={() => setSelected(null)}
          >
            ×
          </button>

          <h3 className={styles.explorerTitle}>{selected.title}</h3>

          <div className={styles.explorerRow}>
            <span>{t.explorerWords}</span>
            <span>{selected.words}</span>
          </div>

          <div className={styles.explorerRow}>
            <span>{t.explorerCategory}</span>
            <span>{selected.category ?? "—"}</span>
          </div>

          <div className={styles.explorerRow}>
            <span>{t.explorerService}</span>
            <span>{selected.services ?? "MTPE / Translation"}</span>
          </div>

          <div className={styles.explorerRow}>
            <span>{t.explorerTopic}</span>
            <span>{selected.topic ?? "Project"}</span>
          </div>

          <div className={styles.explorerRow}>
            <span>{t.explorerLanguagePair}</span>
            <span>{selected.languagePair}</span>
          </div>
        </div>
      ) : (
        <div className={styles.explorerContainer}>
          <p className={styles.explorerPlaceholder}>
            {t.explorerPlaceholder}
          </p>
        </div>
      )}
    </div>
  );
}
