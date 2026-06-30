import { useState, useEffect, useRef } from "react";
import { projects } from "../../projects";
import "./Dashboard.css";
import "./DashboardResponsive.css";

export default function Dashboard() {

  const [selected, setSelected] = useState(null);
  const tooltipRef = useRef(null);
  const raf = useRef(null); 

  const chartRef = useRef(null);
  const bubblesRef = useRef([]);

  const hues = useRef([]);
    if (hues.current.length === 0) {
      hues.current = projects.map((_, i) => {
        const palette = [238, 248];
        return palette[i % palette.length] + (Math.sin(i * 12.9898) * 3);
      });
    }
  
  useEffect(() => {
    const chart = chartRef.current;
    const tooltip = tooltipRef.current;
    if (!chart || !tooltip) return;

    let raf = null;

    const handleMove = (e) => {
      if (raf) cancelAnimationFrame(raf);

      raf = requestAnimationFrame(() => {
        const el = document.elementFromPoint(e.clientX, e.clientY);

        if (!el || !el.classList.contains("bubble")) {
          tooltip.style.opacity = "0";
          return;
        }

        const title = el.getAttribute("data-title");
        const words = el.getAttribute("data-words");
        const hue = el.getAttribute("data-hue");

        tooltip.style.opacity = "1";
        tooltip.querySelector(".tooltip-title").textContent = title;
        tooltip.querySelector(".tooltip-words").textContent = `${words} words`;

        const x = e.clientX + 16;
        const y = e.clientY + 16;

        tooltip.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        tooltip.style.borderColor = `hsla(${hue}, 90%, 60%, 0.6)`;
      });
    };

    window.addEventListener("pointermove", handleMove);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

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
      <header className="dashboard-header">
        <h1>Projects Dashboard</h1>
        <p>
          Interactive visualization of completed projects.
          Hover to preview, click to inspect details.
        </p>
      </header>

      <div className="dashboard-grid">
        {/* LEFT: BUBBLES */}
        <div className="bubble-chart-wrapper">
          <div className="bubble-chart" ref={chartRef}>
            <div className="bubble-stage">
              {projects.map((p, i) => {
                
                const hue = hues.current[i];
                
                let size;
                  if (p.words > 10000) size = 140;
                  else if (p.words > 5000) size = 110;
                  else if (p.words > 1000) size = 85;
                  else size = 60;

                const v = vertices[i];

                const jitterX = Math.sin(i * 12.9898) * 6;
                const jitterY = Math.cos(i * 78.233) * 6;
                
                return (
                  <div
                    key={p.id}
                    className={`bubble ${selected?.id === p.id ? "active" : ""}`}
                    data-title={p.title}
                    data-words={p.words}
                    data-hue={hue}
                    style={{
                      width: size,
                      height: size,
                      left: v.x + jitterX,
                      top: v.y + jitterY,
                      background: `radial-gradient(
                        circle at 30% 30%,
                        hsla(${hue}, 60%, 55%, 0.6),
                        hsla(${hue}, 55%, 72%, 0.18)
                      )`,
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelected(p);
                    }}
                  >
                    {p.words}
                  </div>
                );
              })}
            </div>

            <div ref={tooltipRef} className="tooltip">
              <div className="tooltip-title"></div>
              <div className="tooltip-words"></div>
            </div>
          </div>
        </div>
        
        {/* RIGHT: EXPLORER */}
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
          ) : (
            <div className="explorer-placeholder">
              Select a project bubble
            </div>
          )}
        </div>

      </div>

      <div className="bubble-chart-mobile-placeholder">
        Bubble chart, no mobile version currently
      </div>

      {/* SPACE */}
      <div className="spacer" />

    </section>
  );
}