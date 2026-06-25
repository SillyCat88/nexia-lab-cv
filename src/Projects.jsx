import { useState } from "react";
import { useEffect } from "react";
import { projects } from "./projects.js";
import "./Projects.css";

export default function Projects() {
  const [tooltip, setTooltip] = useState(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const vertices = [
    { x: 200, y: 60 },
    { x: 320, y: 100 },
    { x: 420, y: 180 },
    { x: 380, y: 300 },
    { x: 260, y: 360 },
    { x: 140, y: 320 },
    { x: 80, y: 200 },

    { x: 220, y: 140 },
    { x: 340, y: 200 },
    { x: 300, y: 260 },
    { x: 180, y: 260 },

    { x: 120, y: 120 },
    { x: 260, y: 20 },
    { x: 400, y: 260 },

    { x: 160, y: 420 },
    { x: 320, y: 420 },

    { x: 500, y: 180 },
    { x: 40, y: 260 },
    { x: 240, y: 220 },
  ];

  return (
    <section className="projects">

      {/* BUBBLE CHART */}
      <div className="bubble-chart">

        {projects.map((p, i) => {
          const palette = [90, 55]; // lime, lemon
          const hue = palette[i % palette.length] + (Math.random() * 4 - 2);

          let size;
            if (p.words > 10000) size = 140;
            else if (p.words > 5000) size = 110;
            else if (p.words > 1000) size = 85;
            else size = 60;

          const v = vertices[i];

          // легкий "хаос", але контрольований
          const jitterX = (Math.sin(i * 999) * 10);
          const jitterY = (Math.cos(i * 777) * 10);
          
          return (
            <div
              key={p.id}
              className={`bubble ${selected?.id === p.id ? "active" : ""}`}
              style={{
                width: size,
                height: size,
                left: v.x + jitterX,
                top: v.y + jitterY,
                background: `radial-gradient(
                  circle at 30% 30%,
                  hsla(${hue}, 95%, 62%, 0.6),
                  hsla(${hue}, 95%, 48%, 0.18)
                )`,
              }}
              onMouseEnter={(e) => {
                setTooltip({
                  x: e.clientX,
                  y: e.clientY,
                  title: p.title,
                  words: p.words,
                  hue,
                });
              }}
              onMouseMove={(e) => {
                setTooltip((prev) => prev ? { ...prev, x: e.clientX, y: e.clientY } : null);
              }}
              onMouseLeave={() => setTooltip(null)}
              onClick={() => setSelected(p)}
              onClick={(e) => {
                e.stopPropagation();
                setSelected(p);
              }}
            >
              {p.words}
            </div>
          );
        })}

        {tooltip && (
          <div
            className="tooltip"
            style={{
              position: "fixed",
              left: tooltip.x + 12,
              top: tooltip.y + 12,
              borderColor: `hsla(${tooltip.hue}, 90%, 60%, 0.6)`,
            }}
          >
            <div className="tooltip-title">{tooltip.title}</div>
            <div className="tooltip-words">
              {tooltip.words} words
            </div>
          </div>
        )}
      </div>

      {selected && (
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
            <span>{selected.category || "—"}</span>
          </div>

          <div className="explorer-row">
            <span>Service</span>
            <span>{selected.service || "MTPE / Translation"}</span>
          </div>

          <div className="explorer-row">
            <span>Type</span>
            <span>{selected.type || "Project"}</span>
          </div>

          <div className="explorer-row">
            <span>ID</span>
            <span>{selected.id}</span>
          </div>
        </div>
      )}

      {/* SPACE */}
      <div className="spacer" />

      {/* CARDS */}
      <div className="stats-cards">
        {/* stats */}
      </div>

    </section>
  );
}