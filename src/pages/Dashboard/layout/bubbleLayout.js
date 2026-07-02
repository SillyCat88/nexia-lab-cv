export function buildBubbleLayout(projects, dashboardVertices) {
  return projects.map((p, i) => {
    const palette = [238, 248];

    const hue =
      palette[i % palette.length] +
      Math.sin(i * 12.9898) * 3;

    let size;

    if (p.words > 10000) size = 140;
    else if (p.words > 5000) size = 110;
    else if (p.words > 1000) size = 85;
    else size = 60;

    const v = dashboardVertices[i];

    const jitterX = Math.sin(i * 12.9898) * 6;
    const jitterY = Math.cos(i * 78.233) * 6;

    return {
      id: p.id,
      project: p,
      title: p.title,
      words: p.words,
      hue,
      style: {
        width: size,
        height: size,
        left: v.x + jitterX,
        top: v.y + jitterY,

        background: `radial-gradient(
          circle at 30% 30%,
          hsla(${hue}, 60%, 55%, 0.6),
          hsla(${hue}, 55%, 72%, 0.18)
        )`,
      },
    };
  });
}         

                