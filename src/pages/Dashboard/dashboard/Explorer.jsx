export default function Explorer({
  selected,
  setSelected,
}) {
  return (
    <div className="explorer-column">
      {selected ? (
        <div className="explorer">
          <button
            className="explorer-close"
            onClick={() => setSelected(null)}
          >
            ×
          </button>

          <h3>{selected.title}</h3>

          <div className="explorer-row">
            <span>Words</span>
            <span>{selected.words}</span>
          </div>

          <div className="explorer-row">
            <span>Category</span>
            <span>{selected.category ?? "—"}</span>
          </div>

          <div className="explorer-row">
            <span>Service</span>
            <span>{selected.service ?? "MTPE / Translation"}</span>
          </div>

          <div className="explorer-row">
            <span>Type</span>
            <span>{selected.type ?? "Project"}</span>
          </div>

          <div className="explorer-row">
            <span>ID</span>
            <span>{selected.id}</span>
          </div>
        </div>
      ) : (
        <div className="explorer-placeholder">
          Select a project bubble
        </div>
      )}
    </div>
  );
}