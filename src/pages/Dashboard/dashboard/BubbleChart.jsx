import { useMemo } from "react";
import { buildBubbleLayout } from "../layout/bubbleLayout";
import styles from "./BubbleChart.module.css";

export default function BubbleChart({
  projects,
  selectedId,
  setSelectedId,
  chartRef,
  tooltipRef,
  dashboardVertices,
}) {
  const layout = useMemo(
    () => buildBubbleLayout(projects, dashboardVertices),
    [projects, dashboardVertices]
  );

  return (
    <div className={styles.bubbleChartLayout}>
      <div
        className={styles.bubbleChartContainer}
        ref={chartRef}
      >
        <div 
          className={styles.bubbleStage}
          onClick={() => setSelectedId(null)}
        >
          {layout.map((bubble) => (
            <div
              key={bubble.id}
              className={`${styles.bubble} ${
                selectedId === bubble.project.id ? styles.active : ""
              }`}
              data-role="bubble"
              data-title={bubble.title}
              data-words={bubble.words}
              data-hue={bubble.hue}
              style={bubble.style}
              onClick={(e) => {
                e.stopPropagation();

                setSelectedId(
                  selectedId === bubble.project.id
                    ? null
                    : bubble.project.id
                );
              }}
            >
              {bubble.words}
            </div>
          ))}
        </div>

        <div
          ref={tooltipRef}
          className={styles.tooltip}
        >
          <div
              data-role="tooltip-title"
              className={styles.tooltipTitle}
          />
          <div
              data-role="tooltip-words"
              className={styles.tooltipWords}
          />
        </div>
      </div>
    </div>
  );
}