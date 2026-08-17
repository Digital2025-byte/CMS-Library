"use client";

import CarouselImageText6Panel from "./components/CarouselImageText6Panel";
import { getCarouselImageText6Content } from "./utils/helpers";
import { DEFAULT_CAROUSEL_IMAGE_TEXT_STYLE } from "./utils/style";

const CarouselImageText6 = ({
  lang = "en",
  data,
  showTitle = DEFAULT_CAROUSEL_IMAGE_TEXT_STYLE.showTitle,
  showItemTitle = DEFAULT_CAROUSEL_IMAGE_TEXT_STYLE.showItemTitle,
  showItemDescription = DEFAULT_CAROUSEL_IMAGE_TEXT_STYLE.showItemDescription,
  grayscaleInactive = DEFAULT_CAROUSEL_IMAGE_TEXT_STYLE.grayscaleInactive,
  sectionBg = DEFAULT_CAROUSEL_IMAGE_TEXT_STYLE.sectionBg,
  titleAlign = DEFAULT_CAROUSEL_IMAGE_TEXT_STYLE.titleAlign,
  titleColor = DEFAULT_CAROUSEL_IMAGE_TEXT_STYLE.titleColor,
  overlayColor = DEFAULT_CAROUSEL_IMAGE_TEXT_STYLE.overlayColor,
  panelColor = DEFAULT_CAROUSEL_IMAGE_TEXT_STYLE.panelColor,
  cardBg = DEFAULT_CAROUSEL_IMAGE_TEXT_STYLE.cardBg,
  cardRadius = DEFAULT_CAROUSEL_IMAGE_TEXT_STYLE.cardRadius,
  itemTitleColor = DEFAULT_CAROUSEL_IMAGE_TEXT_STYLE.itemTitleColor,
  itemBodyColor = DEFAULT_CAROUSEL_IMAGE_TEXT_STYLE.itemBodyColor,
}) => {
  const { title, items, hasContent } = getCarouselImageText6Content(data, lang);

  if (!hasContent) {
    return null;
  }

  return (
    <CarouselImageText6Panel
      lang={lang}
      title={title}
      items={items}
      showTitle={showTitle}
      showItemTitle={showItemTitle}
      showItemDescription={showItemDescription}
      grayscaleInactive={grayscaleInactive}
      sectionBg={sectionBg}
      titleAlign={titleAlign}
      titleColor={titleColor}
      overlayColor={overlayColor}
      panelColor={panelColor}
      cardBg={cardBg}
      cardRadius={cardRadius}
      itemTitleColor={itemTitleColor}
      itemBodyColor={itemBodyColor}
    />
  );
};

export default CarouselImageText6;
