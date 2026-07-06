import { useState, useEffect, useRef } from "react";
import "./Dashboard.css";
import "./DashboardResponsive.css";
import { projects } from "../data/projects";
import { dashboardVertices } from "../layout/dashboardVertices";
import createPointerEngine from "../engine/pointerEngine";
import BubbleChart from "./BubbleChart";
import Explorer from "./Explorer";


export default function Dashboard() {
  
  const [selected, setSelected] = useState(null);

  const tooltipRef = useRef(null);
  const chartRef = useRef(null);
  
  useEffect(() => {
    if (!chartRef.current || !tooltipRef.current) return;
    const cleanup = createPointerEngine({
      chartEl: chartRef.current,
      tooltipEl: tooltipRef.current
    });
    return cleanup;
  }, []);
 
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);
 

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
        <BubbleChart
          projects={projects}
          selected={selected}
          setSelected={setSelected}
          chartRef={chartRef}
          tooltipRef={tooltipRef}
          dashboardVertices={dashboardVertices}
        />

        {/* RIGHT: EXPLORER */}
        <Explorer 
          selected={selected}
          setSelected={setSelected}
        />
      </div>

      <div className="bubble-chart-mobile-placeholder">
        Bubble chart, no mobile version currently
      </div>

      {/* SPACE */}
      <div className="spacer" />

    </section>
  );
}