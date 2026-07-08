import styles from "./MediaExplorer.module.css";

export default function MediaExplorer({
  selected,
  setSelected,
}) {
  if (!selected) {
    return (
      <aside className={styles.explorer}>
        <p className={styles.placeholder}>
          Select Preview to explore the article.
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
        aria-label="Close explorer"
      >
        ✕
      </button>

      <div className={styles.language}>
        EN <span>|</span> UA
      </div>

      <h2 className={styles.title}>
        {selected.title.en}
      </h2>

      <div className={styles.field}>
        <h3>Date</h3>
        <p>{selected.date.en}</p>
      </div>

      <div className={styles.field}>
        <h3>Subject</h3>
        <p>{selected.subject.en}</p>
      </div>

      <div className={styles.field}>
        <h3>Description</h3>
        <p>{selected.description.en}</p>
      </div>
    </aside>
  );
}
