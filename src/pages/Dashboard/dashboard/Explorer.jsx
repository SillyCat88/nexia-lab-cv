import styles from "./Explorer.module.css";

export default function Explorer({
  selected,
  setSelected,
}) {
  return (
    <div className={styles.explorerColumn}>
      {selected ? (
        <div className={styles.explorer}>
          <button
            className={styles.explorerClose}
            onClick={() => setSelected(null)}
          >
            ×
          </button>

          <h3>{selected.title}</h3>

          <div className={styles.explorerRow}>
            <span>Words</span>
            <span>{selected.words}</span>
          </div>

          <div className={styles.explorerRow}>
            <span>Category</span>
            <span>{selected.category ?? "—"}</span>
          </div>

          <div className={styles.explorerRow}>
            <span>Service</span>
            <span>{selected.services ?? "MTPE / Translation"}</span>
          </div>

          <div className={styles.explorerRow}>
            <span>Type</span>
            <span>{selected.type ?? "Project"}</span>
          </div>

          <div className={styles.explorerRow}>
            <span>ID</span>
            <span>{selected.id}</span>
          </div>
        </div>
      ) : (
        <div className={styles.explorerPlaceholder}>
          Select a project bubble
        </div>
      )}
    </div>
  );
}