"use client";

import DualImageTextPanel from "./components/DualImageTextPanel";
import {
  DEFAULT_EXTRA_IMAGE_POSITION,
  getDualImageTextContent,
} from "./utils/helpers";

/**
 * Dual image + text blocks.
 *
 * @param {boolean} [showFirstSection=false] - Show leading section (image left, text right, ph4)
 * @param {boolean} [showExtraImage=false]
 * @param {Array<string|Object>} [extraImagePositions]
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
  showFirstSection = false,
  extraImagePositions = [
    DEFAULT_EXTRA_IMAGE_POSITION,
    DEFAULT_EXTRA_IMAGE_POSITION,
  ],
  cId,
}) => {
  const {
    items,
    firstSection,
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
      firstSection={firstSection}
      showFirstSection={showFirstSection}
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
