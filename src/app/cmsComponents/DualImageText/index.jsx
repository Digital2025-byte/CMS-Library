"use client";

import DualImageTextPanel from "./components/DualImageTextPanel";
import { getDualImageTextContent } from "./utils/helpers";

/**
 * Dual image + text blocks.
 *
 * @param {boolean} [blueLayer=false] - Offset blue plate behind images
 * @param {boolean} [underlineFirstWord=false] - Accent line under the first title word
 * @param {boolean} [animate=false] - In-view entrance animation
 * @param {string} [bgColor="bg-100"] - Section background Tailwind class
 * @param {boolean} [showExploreButton=false] - Show "Explore more" CTA under each description
 * @param {boolean} [showExtraImage=false] - Overlay extra image on both block images
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
      cId={cId}
    />
  );
};

export default DualImageText;
