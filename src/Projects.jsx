import { projects } from "./projects.js";
import "./Projects.css";

export default function Projects() {
  return (
    <section className="projects">

      {/* BUBBLE CHART */}
      <div className="bubble-chart">

        {projects.map((p, i) => {

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
              className="bubble"
              style={{
                width: size,
                height: size,
                left: v.x + jitterX,
                top: v.y + jitterY,
              }}
            >
              {p.words}
            </div>
          );
        })}

      </div>

      {/* TOOLTIP AREA (optional layer) */}
      <div className="tooltip-layer" />

      {/* SPACE */}
      <div className="spacer" />

      {/* EXPLORER */}
      <div className="explorer">
        {/* click details */}
      </div>

      {/* SPACE */}
      <div className="spacer" />

      {/* CARDS */}
      <div className="stats-cards">
        {/* stats */}
      </div>

    </section>
  );
}