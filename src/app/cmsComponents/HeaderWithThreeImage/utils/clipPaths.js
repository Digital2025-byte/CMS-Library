const LEFT_W = "35%";
const MID_W = "45%";
const RIGHT_W = "40%";
const SLANT = "8vw";

export function getHeaderClipPaths(lang = "en") {
  const isArabic = lang === "ar";

  const leftClipPath = isArabic
    ? `polygon(0% 0%, 100% 0%, 100% 100%, ${SLANT} 100%)`
    : `polygon(0% 0%, 100% 0%, calc(100% - ${SLANT}) 100%, 0% 100%)`;

  const midClipPath = isArabic
    ? `polygon(0% 0%, calc(100% - ${SLANT}) 0%, 100% 100%, ${SLANT} 100%)`
    : `polygon(${SLANT} 0%, 100% 0%, calc(100% - ${SLANT}) 100%, 0% 100%)`;

  const rightClipPath = isArabic
    ? `polygon(0% 0%, calc(100% - ${SLANT}) 0%, 100% 100%, 0% 100%)`
    : `polygon(${SLANT} 0%, 100% 0%, 100% 100%, 0% 100%)`;

  const overlapStyle = isArabic
    ? { marginRight: `calc(-1 * ${SLANT})` }
    : { marginLeft: `calc(-1 * ${SLANT})` };

  return {
    LEFT_W,
    MID_W,
    RIGHT_W,
    SLANT,
    leftClipPath,
    midClipPath,
    rightClipPath,
    overlapStyle,
  };
}
