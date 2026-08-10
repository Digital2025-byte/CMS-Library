"use client";

import DualImageTextPanel from "./components/DualImageTextPanel";
import {
  DEFAULT_EXTRA_IMAGE_POSITION,
  getDualImageTextContent,
} from "./utils/helpers";

/**
 * Dual image + text blocks.
 *
 * @param {boolean} [showExtraImage=false]
 * @param {Array<string|Object>} [extraImagePositions] - Per-block position [first, second].
 *   Use `horizontal` (or `x`) to shift left/right without changing width.
 *   Example: { bottom: -12, start: 0, horizontal: 20 }
 */
const DualImageText = ({
  lang = "en",
  data,
  blueLayer = false,
  underlineFirstWord = false,
  animate = false,
  bgColor = "bg-100",
  showExploreButton = false,
  showExtraImage = false,
  extraImagePositions = [
    DEFAULT_EXTRA_IMAGE_POSITION,
    DEFAULT_EXTRA_IMAGE_POSITION,
  ],
  cId,
}) => {
  const {
    items,
    exploreButtonLabel,
    exploreButtonHref,
    extraImageUrl,
    extraImageAlt,
    hasContent,
  } = getDualImageTextContent(data, lang);

  if (!hasContent) {
    return null;
  }

  return (
    <DualImageTextPanel
      lang={lang}
      items={items}
      blueLayer={blueLayer}
      underlineFirstWord={underlineFirstWord}
      animate={animate}
      bgColor={bgColor}
      showExploreButton={showExploreButton}
      exploreButtonLabel={exploreButtonLabel}
      exploreButtonHref={exploreButtonHref}
      showExtraImage={showExtraImage}
      extraImageUrl={extraImageUrl}
      extraImageAlt={extraImageAlt}
      extraImagePositions={extraImagePositions}
      cId={cId}
    />
  );
};

export default DualImageText;
