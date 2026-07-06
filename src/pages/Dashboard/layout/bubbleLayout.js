const PALETTE = [238, 248];

export function buildBubbleLayout(projects, dashboardVertices) {
  return projects.map((p, i) => {

    const hue =
      PALETTE[i % PALETTE.length] +
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
        "--hue": hue,
        width: size,
        height: size,
        left: v.x + jitterX,
        top: v.y + jitterY,
      },
    };
  });
}         

                