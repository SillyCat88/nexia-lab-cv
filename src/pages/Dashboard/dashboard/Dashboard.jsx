import { useState, useEffect, useRef } from "react";
import { projects } from "../data/contentDashboard";
import { dashboardVertices } from "../layout/dashboardVertices";
import createPointerEngine from "../engine/pointerEngine";
import BubbleChart from "./BubbleChart";
import Explorer from "./Explorer";
import styles from "./Dashboard.module.css";


export default function Dashboard() {
  const [lang, setLang] = useState("en");
  const [selectedId, setSelectedId] = useState(null);

  const tooltipRef = useRef(null);
  const chartRef = useRef(null);

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
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const t = projects[lang];
  const selected = t.items.find((project) => project.id === selectedId) ?? null;
  
  return (
    <section className={styles.projects}>
      <header className={styles.dashboardHeader}>
        <h1>{t.pageTitle}</h1>
        <p>{t.pageDescription}</p>
      </header>

      <div className={styles.buttons}>
        <button onClick={() => setLang("en")}>EN</button>
        <button onClick={() => setLang("ua")}>UA</button>
      </div>

      <div className={styles.dashboardGrid}>
        {/* LEFT: BUBBLES */}
        <BubbleChart
          projects={t.items}
          selected={selected}
          setSelected={setSelectedId}
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

      <div className={styles.bubbleChartMobilePlaceholder}>
        {t.mobilePlaceholder}
      </div>

      {/* SPACE */}
      <div className={styles.spacer} />
    </section>
  );
}