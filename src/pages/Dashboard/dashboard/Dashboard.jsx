import { useState, useEffect, useRef } from "react";
import { projects } from "../data/contentDashboard";
import { dashboardVertices } from "../layout/dashboardVertices";
import createPointerEngine from "../engine/pointerEngine";
import BubbleChart from "./BubbleChart";
import Explorer from "./Explorer";
import LanguageSwitcher from "../../../components/LanguageSwitcher/LanguageSwitcher";
import Footer from "../../../components/Footer/Footer";
import styles from "./Dashboard.module.css";


export default function Dashboard({ lang, setLang }) {
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
    <section className={styles.mainContainer}>
      <div className={styles.mainLayout}>
        <LanguageSwitcher
          lang={lang}
          setLang={setLang}
        />

        <header className={styles.headerContainer}>
          <h1 className={styles.headerTitle}>{t.pageTitle}</h1>
          <p className={styles.headerText}>{t.pageDescription}</p>
        </header>

        <div className={styles.mainGrid}>
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

        <div className={styles.bubbleChartPlaceholder}>
          {t.mobilePlaceholder}
        </div>

        {/* SPACE */}
        <div className={styles.spacer} />

        <Footer 
          lang={lang}
        />
      </div>
    </section>
  );
}