"use client";

import { useMemo } from "react";
import CarouselItemPanel from "./components/CarouselItemPanel";
import { getCarouselItemContent } from "./utils/helpers";
import { DEFAULT_CAROUSEL_ITEM_STYLE } from "./utils/style";

/**
 * CarouselItem — destinations carousel (3-up desktop / 1-up mobile).
 */
export default function CarouselItem({
  lang = "en",
  data,
  posParams = "gb",
  cId,
  showTitle = DEFAULT_CAROUSEL_ITEM_STYLE.showTitle,
  showArrows = DEFAULT_CAROUSEL_ITEM_STYLE.showArrows,
  showDots = DEFAULT_CAROUSEL_ITEM_STYLE.showDots,
  showSectionBg = DEFAULT_CAROUSEL_ITEM_STYLE.showSectionBg,
  showCardImage = DEFAULT_CAROUSEL_ITEM_STYLE.showCardImage,
  showCity = DEFAULT_CAROUSEL_ITEM_STYLE.showCity,
  showIata = DEFAULT_CAROUSEL_ITEM_STYLE.showIata,
  showCountry = DEFAULT_CAROUSEL_ITEM_STYLE.showCountry,
  showOverlay = DEFAULT_CAROUSEL_ITEM_STYLE.showOverlay,
  showHoverDim = DEFAULT_CAROUSEL_ITEM_STYLE.showHoverDim,
  showButton = DEFAULT_CAROUSEL_ITEM_STYLE.showButton,
  sectionBg = DEFAULT_CAROUSEL_ITEM_STYLE.sectionBg,
  sectionPadding = DEFAULT_CAROUSEL_ITEM_STYLE.sectionPadding,
  titleAlign = DEFAULT_CAROUSEL_ITEM_STYLE.titleAlign,
  titleColor = DEFAULT_CAROUSEL_ITEM_STYLE.titleColor,
  cardRadius = DEFAULT_CAROUSEL_ITEM_STYLE.cardRadius,
  cityColor = DEFAULT_CAROUSEL_ITEM_STYLE.cityColor,
  countryColor = DEFAULT_CAROUSEL_ITEM_STYLE.countryColor,
  overlayColor = DEFAULT_CAROUSEL_ITEM_STYLE.overlayColor,
  buttonBg = DEFAULT_CAROUSEL_ITEM_STYLE.buttonBg,
  buttonText = DEFAULT_CAROUSEL_ITEM_STYLE.buttonText,
  navColor = DEFAULT_CAROUSEL_ITEM_STYLE.navColor,
  dotColor = DEFAULT_CAROUSEL_ITEM_STYLE.dotColor,
}) {
  const content = useMemo(
    () => getCarouselItemContent(data, lang),
    [data, lang]
  );

  if (!content) {
    return null;
  }

  return (
    <CarouselItemPanel
      lang={lang}
      content={content}
      posParams={posParams}
      cId={cId}
      showTitle={showTitle}
      showArrows={showArrows}
      showDots={showDots}
      showSectionBg={showSectionBg}
      showCardImage={showCardImage}
      showCity={showCity}
      showIata={showIata}
      showCountry={showCountry}
      showOverlay={showOverlay}
      showHoverDim={showHoverDim}
      showButton={showButton}
      sectionBg={sectionBg}
      sectionPadding={sectionPadding}
      titleAlign={titleAlign}
      titleColor={titleColor}
      cardRadius={cardRadius}
      cityColor={cityColor}
      countryColor={countryColor}
      overlayColor={overlayColor}
      buttonBg={buttonBg}
      buttonText={buttonText}
      navColor={navColor}
      dotColor={dotColor}
    />
  );
}
