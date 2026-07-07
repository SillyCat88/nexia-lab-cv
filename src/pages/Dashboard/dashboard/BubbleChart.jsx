import { useMemo } from "react";
import { buildBubbleLayout } from "../layout/bubbleLayout";
import styles from "./BubbleChart.module.css";

export default function BubbleChart({
  projects,
  selected,
  setSelected,
  chartRef,
  tooltipRef,
  dashboardVertices,
}) {
  const layout = useMemo(
    () => buildBubbleLayout(projects, dashboardVertices),
    [projects, dashboardVertices]
  );

  return (
    <div className={styles.bubbleChartWrapper}>
      <div
        className={styles.bubbleChart}
        ref={chartRef}
      >
        <div className={styles.bubbleStage}>
          {layout.map((bubble) => (
            <div
              key={bubble.id}
              className={`${styles.bubble} ${
                selected?.id === bubble.id ? styles.active : ""
              }`}
              data-role="bubble"
              data-title={bubble.title}
              data-words={bubble.words}
              data-hue={bubble.hue}
              style={bubble.style}
              onClick={(e) => {
                e.stopPropagation();
                setSelected(bubble.project);
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