"use client";

import OppositeScrollPanel from "./components/OppositeScrollPanel";
import { getOppositeScrollCarouselContent } from "./utils/helpers";
import { DEFAULT_OPPOSITE_SCROLL_STYLE } from "./utils/style";

const ImageCarouselsWithOppositeScrollDirections = ({
  lang = "en",
  data,
  cId,
  showTitleDescription = DEFAULT_OPPOSITE_SCROLL_STYLE.showTitleDescription,
  showDescription = DEFAULT_OPPOSITE_SCROLL_STYLE.showDescription,
  showExploreButton = DEFAULT_OPPOSITE_SCROLL_STYLE.showExploreButton,
  showCardTitles = DEFAULT_OPPOSITE_SCROLL_STYLE.showCardTitles,
  showOverlay = DEFAULT_OPPOSITE_SCROLL_STYLE.showOverlay,
  dimOnHover = DEFAULT_OPPOSITE_SCROLL_STYLE.dimOnHover,
  pauseOnHover = DEFAULT_OPPOSITE_SCROLL_STYLE.pauseOnHover,
  reverseRows = DEFAULT_OPPOSITE_SCROLL_STYLE.reverseRows,
  sectionBg = DEFAULT_OPPOSITE_SCROLL_STYLE.sectionBg,
  sectionPadding = DEFAULT_OPPOSITE_SCROLL_STYLE.sectionPadding,
  titleAlign = DEFAULT_OPPOSITE_SCROLL_STYLE.titleAlign,
  titleColor = DEFAULT_OPPOSITE_SCROLL_STYLE.titleColor,
  descriptionColor = DEFAULT_OPPOSITE_SCROLL_STYLE.descriptionColor,
  cardSize = DEFAULT_OPPOSITE_SCROLL_STYLE.cardSize,
  cardRadius = DEFAULT_OPPOSITE_SCROLL_STYLE.cardRadius,
  cardGap = DEFAULT_OPPOSITE_SCROLL_STYLE.cardGap,
  rowGap = DEFAULT_OPPOSITE_SCROLL_STYLE.rowGap,
  cardTitleColor = DEFAULT_OPPOSITE_SCROLL_STYLE.cardTitleColor,
  overlayColor = DEFAULT_OPPOSITE_SCROLL_STYLE.overlayColor,
  speed = DEFAULT_OPPOSITE_SCROLL_STYLE.speed,
  buttonBg = DEFAULT_OPPOSITE_SCROLL_STYLE.buttonBg,
  buttonColor = DEFAULT_OPPOSITE_SCROLL_STYLE.buttonColor,
}) => {
  const {
    title,
    description,
    exploreLabel,
    exploreHref,
    topRow,
    bottomRow,
    hasContent,
  } = getOppositeScrollCarouselContent(data, lang);

  if (!hasContent) {
    return null;
  }

  return (
    <OppositeScrollPanel
      title={title}
      description={description}
      exploreLabel={exploreLabel}
      exploreHref={exploreHref}
      topRow={topRow}
      bottomRow={bottomRow}
      cId={cId}
      showTitleDescription={showTitleDescription}
      showDescription={showDescription}
      showExploreButton={showExploreButton}
      showCardTitles={showCardTitles}
      showOverlay={showOverlay}
      dimOnHover={dimOnHover}
      pauseOnHover={pauseOnHover}
      reverseRows={reverseRows}
      sectionBg={sectionBg}
      sectionPadding={sectionPadding}
      titleAlign={titleAlign}
      titleColor={titleColor}
      descriptionColor={descriptionColor}
      cardSize={cardSize}
      cardRadius={cardRadius}
      cardGap={cardGap}
      rowGap={rowGap}
      cardTitleColor={cardTitleColor}
      overlayColor={overlayColor}
      speed={speed}
      buttonBg={buttonBg}
      buttonColor={buttonColor}
    />
  );
};

export default ImageCarouselsWithOppositeScrollDirections;
