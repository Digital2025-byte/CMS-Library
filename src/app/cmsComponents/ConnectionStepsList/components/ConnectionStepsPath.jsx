import {
  CONNECTION_STEPS_LAYOUT,
  buildConnectionPathD,
} from "../utils/layout";

/**
 * Dashed gold connectors between steps.
 * Geometry comes from layout.js (rim-to-rim + per-gap bend).
 */
export default function ConnectionStepsPath({ isRtl = false }) {
  const { path } = CONNECTION_STEPS_LAYOUT;
  const d = buildConnectionPathD(CONNECTION_STEPS_LAYOUT, isRtl);

  if (!d) {
    return null;
  }

  return (
    <svg
      className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-visible"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden
    >
      <path
        d={d}
        stroke={path.color}
        strokeWidth={path.strokeWidth}
        strokeDasharray={path.dasharray}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
