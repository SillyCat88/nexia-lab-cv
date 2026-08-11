import { useState, useEffect, useRef } from "react";
import { projects } from "../data/contentDashboard";
import { dashboardVertices } from "../layout/dashboardVertices";
import createPointerEngine from "../engine/pointerEngine";
import BubbleChart from "./BubbleChart";
import Explorer from "./Explorer";
import styles from "./Dashboard.module.css";

export default function Dashboard({ lang }) {
  const tooltipRef = useRef(null);
  const chartRef = useRef(null);

  const STORAGE_KEY = "dashboard-state";

  const [selectedId, setSelectedId] = useState(() => {
    const saved = sessionStorage.getItem(STORAGE_KEY);

    if (!saved) return null;

    try {
      return JSON.parse(saved).selectedId ?? null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    sessionStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ selectedId })
    );
  }, [selectedId]);

  useEffect(() => {
    if (!chartRef.current || !tooltipRef.current) return;
    const cleanup = createPointerEngine({
      chartEl: chartRef.current,
      tooltipEl: tooltipRef.current,
      wordsLabel: t.wordsLabel,
    });
    return cleanup;
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") {
        setSelectedId(null);
      }
    };

    window.addEventListener("keydown", handler);
    
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const t = projects[lang];

  const selected = t.items.find((project) => project.id === selectedId) ?? null;
  
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainLayout}>

        <header className={styles.headerLayout}>
          <h1 className={styles.headerTitle}>{t.pageTitle}</h1>
          <p className={styles.headerText}>{t.pageDescription}</p>
        </header>

        <div className={styles.mainGrid}>
          {/* LEFT: BUBBLES */}
          <BubbleChart
            projects={t.items}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            chartRef={chartRef}
            tooltipRef={tooltipRef}
            dashboardVertices={dashboardVertices}
          />

          {/* RIGHT: EXPLORER */}
          <Explorer
            t={t}
            selected={selected}
            setSelected={setSelectedId}
          />
        </div>

        <div className={styles.bubbleChartContainer}>
          <p className={styles.bubbleChartPlaceholder}>
          {t.mobilePlaceholder}
          </p>
        </div>

      </div>
    </div>
  );
}