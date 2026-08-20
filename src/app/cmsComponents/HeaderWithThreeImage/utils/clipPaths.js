const LEFT_W = "35%";
const MID_W = "45%";
const RIGHT_W = "40%";
const EQUAL_W = "33.334%";
const SLANT = "8vw";

/**
 * Slice divider direction:
 * - right: \ diagonal seams
 * - left: / diagonal seams
 * - none: straight vertical cuts, no overlap
 */
export function getHeaderClipPaths(direction = "right") {
  const normalized =
    direction === "left" || direction === "none" || direction === "right"
      ? direction
      : direction === "reverse"
        ? "left"
        : "right";

  if (normalized === "none") {
    const rect = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
    return {
      LEFT_W: EQUAL_W,
      MID_W: EQUAL_W,
      RIGHT_W: EQUAL_W,
      SLANT: "0px",
      leftClipPath: rect,
      midClipPath: rect,
      rightClipPath: rect,
      overlapStyle: undefined,
    };
  }

  // Both slant directions nest via a leftward overlap in LTR flex.
  const overlapStyle = { marginLeft: `calc(-1 * ${SLANT})` };

  if (normalized === "left") {
    // / seams — top inset on the right edge of each join
    return {
      LEFT_W,
      MID_W,
      RIGHT_W,
      SLANT,
      leftClipPath: `polygon(0% 0%, calc(100% - ${SLANT}) 0%, 100% 100%, 0% 100%)`,
      midClipPath: `polygon(0% 0%, calc(100% - ${SLANT}) 0%, 100% 100%, ${SLANT} 100%)`,
      rightClipPath: `polygon(0% 0%, 100% 0%, 100% 100%, ${SLANT} 100%)`,
      overlapStyle,
    };
  }

  // \ seams — bottom inset on the right edge of each join
  return {
    LEFT_W,
    MID_W,
    RIGHT_W,
    SLANT,
    leftClipPath: `polygon(0% 0%, 100% 0%, calc(100% - ${SLANT}) 100%, 0% 100%)`,
    midClipPath: `polygon(${SLANT} 0%, 100% 0%, calc(100% - ${SLANT}) 100%, 0% 100%)`,
    rightClipPath: `polygon(${SLANT} 0%, 100% 0%, 100% 100%, 0% 100%)`,
    overlapStyle,
  };
}
