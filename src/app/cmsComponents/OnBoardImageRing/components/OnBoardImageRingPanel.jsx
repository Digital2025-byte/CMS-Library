"use client";

import { getThemeColorCss } from "@/styles/themeColors";
import OnBoardImageRingHeader from "./OnBoardImageRingHeader";
import OnBoardImageRingTrack from "./OnBoardImageRingTrack";
import { RING_HEIGHT, SECTION_BG } from "../utils/constants";
import {
  CARD_GAP_VALUE,
  DEFAULT_ON_BOARD_IMAGE_RING_STYLE,
} from "../utils/style";

export default function OnBoardImageRingPanel({
  lang = "en",
  title,
  description,
  images,
  captions,
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
  const resolvedGap =
    imageGap ?? CARD_GAP_VALUE[cardGap] ?? CARD_GAP_VALUE.default;
  const backgroundColor = !showSectionBg
    ? "transparent"
    : sectionBg === DEFAULT_ON_BOARD_IMAGE_RING_STYLE.sectionBg
      ? SECTION_BG
      : getThemeColorCss(sectionBg, "primary-800");

  return (
    <section
      className="w-full overflow-hidden"
      style={{ backgroundColor }}
      lang={lang}
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <OnBoardImageRingHeader
        title={title}
        description={description}
        showTitle={showTitle}
        showDescription={showDescription}
        titleAlign={titleAlign}
        titleColor={titleColor}
        descriptionColor={descriptionColor}
        sectionPadding={sectionPadding}
      />

      <div className={`w-full ${RING_HEIGHT}`}>
        <OnBoardImageRingTrack
          images={images}
          captions={captions}
          lang={lang}
          imageGap={resolvedGap}
          showCaptions={showCaptions}
          showOverlay={showOverlay}
          showCardImage={showCardImage}
          cardRadius={cardRadius}
          captionColor={captionColor}
          overlayColor={overlayColor}
        />
      </div>
    </section>
  );
}
