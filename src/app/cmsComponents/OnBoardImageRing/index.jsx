"use client";

import OnBoardImageRingPanel from "./components/OnBoardImageRingPanel";
import { getOnBoardImageRingContent } from "./utils/helpers";
import { DEFAULT_ON_BOARD_IMAGE_RING_STYLE } from "./utils/style";

/**
 * OnBoardImageRing — full-width navy 3D image strip with title and captions.
 */
export default function OnBoardImageRing({
  lang = "en",
  data,
  imageGap,
  showTitle = DEFAULT_ON_BOARD_IMAGE_RING_STYLE.showTitle,
  showDescription = DEFAULT_ON_BOARD_IMAGE_RING_STYLE.showDescription,
  showSectionBg = DEFAULT_ON_BOARD_IMAGE_RING_STYLE.showSectionBg,
  showCaptions = DEFAULT_ON_BOARD_IMAGE_RING_STYLE.showCaptions,
  showOverlay = DEFAULT_ON_BOARD_IMAGE_RING_STYLE.showOverlay,
  showCardImage = DEFAULT_ON_BOARD_IMAGE_RING_STYLE.showCardImage,
  sectionBg = DEFAULT_ON_BOARD_IMAGE_RING_STYLE.sectionBg,
  sectionPadding = DEFAULT_ON_BOARD_IMAGE_RING_STYLE.sectionPadding,
  titleAlign = DEFAULT_ON_BOARD_IMAGE_RING_STYLE.titleAlign,
  titleColor = DEFAULT_ON_BOARD_IMAGE_RING_STYLE.titleColor,
  descriptionColor = DEFAULT_ON_BOARD_IMAGE_RING_STYLE.descriptionColor,
  cardRadius = DEFAULT_ON_BOARD_IMAGE_RING_STYLE.cardRadius,
  cardGap = DEFAULT_ON_BOARD_IMAGE_RING_STYLE.cardGap,
  captionColor = DEFAULT_ON_BOARD_IMAGE_RING_STYLE.captionColor,
  overlayColor = DEFAULT_ON_BOARD_IMAGE_RING_STYLE.overlayColor,
}) {
  const { title, description, images, captions, hasContent } =
    getOnBoardImageRingContent(data, lang);

  if (!hasContent) return null;

  return (
    <OnBoardImageRingPanel
      lang={lang}
      title={title}
      description={description}
      images={images}
      captions={captions}
      imageGap={imageGap}
      showTitle={showTitle}
      showDescription={showDescription}
      showSectionBg={showSectionBg}
      showCaptions={showCaptions}
      showOverlay={showOverlay}
      showCardImage={showCardImage}
      sectionBg={sectionBg}
      sectionPadding={sectionPadding}
      titleAlign={titleAlign}
      titleColor={titleColor}
      descriptionColor={descriptionColor}
      cardRadius={cardRadius}
      cardGap={cardGap}
      captionColor={captionColor}
      overlayColor={overlayColor}
    />
  );
}
