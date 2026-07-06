import { buildBubbleLayout } from "../layout/bubbleLayout";
import { useMemo } from "react";

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
    <div className="bubble-chart-wrapper">
      <div
        className="bubble-chart"
        ref={chartRef}
      >
        <div className="bubble-stage">
          {layout.map((bubble) => (
            <div
              key={bubble.id}
              className={`bubble ${
                selected?.id === bubble.id
                  ? "active"
                  : ""
              }`}
              
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
          className="tooltip"
        >
          <div className="tooltip-title" />
          <div className="tooltip-words" />
        </div>

      </div>
    </div>
  );
}