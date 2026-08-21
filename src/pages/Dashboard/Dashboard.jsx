import { useEffect, useRef } from "react";
import { projects } from "./data/contentDashboard";
import { dashboardVertices } from "./layout/dashboardVertices";
import createPointerEngine from "./engine/pointerEngine";

import BubbleChart from "./BubbleChart";
import Explorer from "./Explorer";
import useSessionStorage from "../../hooks/useSessionStorage";

import styles from "./Dashboard.module.css";


export default function Dashboard({ lang }) {
  const tooltipRef = useRef(null);
  const chartRef = useRef(null);

  const t = projects[lang];

  const [dashboardState, setDashboardState] = useSessionStorage(
    "dashboard-state",
    {
      selectedId: null
    }
  );

  const { selectedId } = dashboardState;

  const setSelectedId = (id) => {
    setDashboardState((prev) => ({
      ...prev,
      selectedId: id,
    }));
  };

  const selected = 
    t.items.find((project) => project.id === selectedId) ?? null;


  useEffect(() => {
    if (!chartRef.current || !tooltipRef.current) return;
    const cleanup = createPointerEngine({
      chartEl: chartRef.current,
      tooltipEl: tooltipRef.current,
      wordsLabel: t.wordsLabel,
    });

    return cleanup;
  }, [t.wordsLabel]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") {
        setSelectedId(null);
      }
    };

    window.addEventListener("keydown", handler);
    
    return () => window.removeEventListener("keydown", handler);
  }, []);
 

  return (
    <div className={styles.mainContainer}>

      <header className={styles.headerLayout}>
        <h1 className={styles.headerTitle}>{t.pageTitle}</h1>
        <p className={styles.headerText}>{t.pageDescription}</p>
      </header>

      <section className={styles.mainGrid}>
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
      </section>

      <div className={styles.bubbleChartContainer}>
        <p className={styles.bubbleChartPlaceholder}>
        {t.mobilePlaceholder}
        </p>
      </div>

    </div>
  );
}