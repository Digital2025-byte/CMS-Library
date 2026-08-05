/**
 * ============================================================
 * EDIT POSITIONS HERE — single source of truth for desktop layout
 * ============================================================
 *
 * steps[].x / y  → circle CENTER as % of the desktop track (0–100)
 * steps[].label  → "Step N" offset relative to the circle box
 *
 * path.*         → dashed connector between circle rims
 * path.segments  → one entry per gap (1→2, 2→3, 3→4); tweak `bend`
 */

export const CONNECTION_STEPS_LAYOUT = {
  trackHeight: "24rem",
  circleSize: 130,

  path: {
    color: "#D1B883",
    strokeWidth: 2,
    /** Short dash + wide gap ≈ design’s dotted gold line. */
    dasharray: "1.5 9",
    /**
     * Circle radius as % of the track box (keep in sync if you resize circles).
     *   x ≈ (circleSize/2) / trackWidth * 100
     *   y ≈ (circleSize/2) / trackHeight * 100
     */
    radiusPct: { x: 5.6, y: 16.5 },
    /** 0 = stroke meets the rim; raise slightly for a hairline gap. */
    rimGap: 0.04,
    /**
     * Extra vertical pull on each gap’s curve (in % of track height).
     * Positive = pull DOWN, negative = pull UP.
     * Makes the U / ∩ between steps deeper or flatter.
     */
    segments: [
      { bend: 4 }, // 1 → 2
      { bend: -4 }, // 2 → 3
      { bend: 4 }, // 3 → 4
    ],
  },

  steps: [
    {
      x: 12.5,
      y: 32,
      label: { top: "0", left: "100%", translateX: "-10%" },
    },
    {
      x: 37.5,
      y: 62,
      label: { top: "-1.75rem", left: "50%", translateX: "-50%" },
    },
    {
      x: 62.5,
      y: 32,
      label: { top: "0", left: "-25%", translateX: "-10%" },
    },
    {
      x: 87.5,
      y: 62,
      label: { top: "-1.75rem", left: "-25%", translateX: "0%" },
    },
  ],
};

/** Point on the ellipse rim of `from`, facing toward `to`. */
function rimPoint(from, to, radiusPct, rimGap) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const len = Math.hypot(dx, dy) || 1;
  const scale = 1 + rimGap;

  return {
    x: from.x + (dx / len) * radiusPct.x * scale,
    y: from.y + (dy / len) * radiusPct.y * scale,
  };
}

/**
 * One subpath per gap (rim → rim). Circles sit above, so strokes
 * only show in the spaces between steps — matching the design.
 */
export function buildConnectionPathD(
  layout = CONNECTION_STEPS_LAYOUT,
  isRtl = false
) {
  const centers = layout.steps.map((step) => ({
    x: isRtl ? 100 - step.x : step.x,
    y: step.y,
  }));

  if (centers.length < 2) {
    return "";
  }

  const { radiusPct, rimGap = 0, segments = [] } = layout.path;
  const parts = [];

  for (let i = 0; i < centers.length - 1; i += 1) {
    const a = centers[i];
    const b = centers[i + 1];
    const start = rimPoint(a, b, radiusPct, rimGap);
    const end = rimPoint(b, a, radiusPct, rimGap);

    const midX = (start.x + end.x) / 2;
    const bend = segments[i]?.bend ?? 0;

    // Horizontal handles at start/end Y (+ bend) → smooth sine-like U / ∩
    const c1y = start.y + bend;
    const c2y = end.y + bend;

    parts.push(
      [
        `M ${start.x.toFixed(2)} ${start.y.toFixed(2)}`,
        `C ${midX.toFixed(2)} ${c1y.toFixed(2)}`,
        `${midX.toFixed(2)} ${c2y.toFixed(2)}`,
        `${end.x.toFixed(2)} ${end.y.toFixed(2)}`,
      ].join(" ")
    );
  }

  return parts.join(" ");
}
