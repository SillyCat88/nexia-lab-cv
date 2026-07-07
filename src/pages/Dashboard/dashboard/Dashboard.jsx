import { useState, useEffect, useRef } from "react";
import { projects } from "../data/projects";
import { dashboardVertices } from "../layout/dashboardVertices";
import createPointerEngine from "../engine/pointerEngine";
import BubbleChart from "./BubbleChart";
import Explorer from "./Explorer";
import styles from "./Dashboard.module.css";

export default function Dashboard() {
  const [selected, setSelected] = useState(null);

  const tooltipRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current || !tooltipRef.current) return;

    const cleanup = createPointerEngine({
      chartEl: chartRef.current,
      tooltipEl: tooltipRef.current,
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
    <section className={styles.projects}>
      <header className={styles.dashboardHeader}>
        <h1>Projects Dashboard</h1>

        <p>
          Interactive visualization of completed projects. Hover to preview,
          click to inspect details.
        </p>
      </header>

      <div className={styles.dashboardGrid}>
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

      <div className={styles.bubbleChartMobilePlaceholder}>
        Bubble chart, no mobile version currently
      </div>

      {/* SPACE */}
      <div className={styles.spacer} />
    </section>
  );
}