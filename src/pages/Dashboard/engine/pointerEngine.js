function createPointerEngine({
  chartEl,
  tooltipEl,
  wordsLabel,
}) {
  let raf = null;

  let lastX = -1;
  let lastY = -1;
  let latestX = 0;
  let latestY = 0;

  const EPS = 1; // стабілізація мікрорухів
  const TOOLTIP_OFFSET = 16;

  const titleEl = tooltipEl.querySelector('[data-role="tooltip-title"]');
  const wordsEl = tooltipEl.querySelector('[data-role="tooltip-words"]');

  function handleMove(e) {

    // 1. завжди оновлюємо latest input
    latestX = e.clientX;
    latestY = e.clientY;

    // 2. якщо кадр вже запланований — нічого не робимо
    if (raf) return;

    raf = requestAnimationFrame(() => {
      raf = null;

      const x = latestX;
      const y = latestY;

      // 3. EPS-фільтр (стабілізація jitter)
      if (
        Math.abs(x - lastX) <= EPS &&
        Math.abs(y - lastY) <= EPS
      ) return;

      lastX = x;
      lastY = y;

      const el = document.elementFromPoint(x, y);

      if (!el || el.dataset.role !== "bubble") {
   	    tooltipEl.style.opacity = "0";
        return;
      }

      const { title, words, hue } = el.dataset;

      tooltipEl.style.opacity = "1";

      titleEl.textContent = title;
      wordsEl.textContent = `${words} ${wordsLabel}`;

      tooltipEl.style.transform =
	      `translate3d(${x + TOOLTIP_OFFSET}px, ${y + TOOLTIP_OFFSET}px, 0)`;

      tooltipEl.style.borderColor =
        `hsla(${hue}, 90%, 60%, 0.6)`;
    });
  }

  chartEl.addEventListener("pointermove", handleMove);

  return () => {
    chartEl.removeEventListener("pointermove", handleMove);
    if (raf !== null) {
      cancelAnimationFrame(raf);
      raf = null;
    }
  };

}

export default createPointerEngine;


