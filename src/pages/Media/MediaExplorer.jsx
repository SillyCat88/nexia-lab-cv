import { mediaItems } from "./data/contentMedia";
import styles from "./MediaExplorer.module.css";

export default function MediaExplorer({
  selected,
  setSelected,
  t
}) {
  if (!selected) {
    return (
      <aside className={styles.explorer}>
        <p className={styles.placeholder}>
          {t.explorerPlaceholder}
        </p>
      </aside>
    );
  }

  return (
    <aside className={styles.explorer}>
      <button
        type="button"
        className={styles.close}
        onClick={() => setSelected(null)}
        aria-label={t.closeExplorer}
      >
        ✕
      </button>

      <h2 className={styles.title}>
        {selected.title}
      </h2>

      <div className={styles.field}>
        <h3>{t.fieldDate}</h3>
        <p>{selected.date}</p>
      </div>

      <div className={styles.field}>
        <h3>{t.fieldSubject}</h3>
        <p>{selected.subject}</p>
      </div>

      <div className={styles.field}>
        <h3>{t.fieldDescription}</h3>
        <p>{selected.description}</p>
      </div>
    </aside>
  );
}
