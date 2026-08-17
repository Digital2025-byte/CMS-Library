"use client";

import ServiceCardsSliderPanel from "./components/ServiceCardsSliderPanel";
import { getServiceCardsSliderContent } from "./utils/helpers";
import { DEFAULT_SERVICE_CARDS_STYLE } from "./utils/style";

const ServiceCardsSlider = ({
  lang = "en",
  data,
  posParams,
  cId,
  showTitle = DEFAULT_SERVICE_CARDS_STYLE.showTitle,
  showDescription = DEFAULT_SERVICE_CARDS_STYLE.showDescription,
  showItemTitle = DEFAULT_SERVICE_CARDS_STYLE.showItemTitle,
  showItemDescription = DEFAULT_SERVICE_CARDS_STYLE.showItemDescription,
  showIcon = DEFAULT_SERVICE_CARDS_STYLE.showIcon,
  showArrow = DEFAULT_SERVICE_CARDS_STYLE.showArrow,
  sectionBg = DEFAULT_SERVICE_CARDS_STYLE.sectionBg,
  sectionPadding = DEFAULT_SERVICE_CARDS_STYLE.sectionPadding,
  titleAlign = DEFAULT_SERVICE_CARDS_STYLE.titleAlign,
  titleColor = DEFAULT_SERVICE_CARDS_STYLE.titleColor,
  descriptionColor = DEFAULT_SERVICE_CARDS_STYLE.descriptionColor,
  cardBg = DEFAULT_SERVICE_CARDS_STYLE.cardBg,
  cardRadius = DEFAULT_SERVICE_CARDS_STYLE.cardRadius,
  cardPadding = DEFAULT_SERVICE_CARDS_STYLE.cardPadding,
  cardGap = DEFAULT_SERVICE_CARDS_STYLE.cardGap,
  iconBg,
  itemTitleColor = DEFAULT_SERVICE_CARDS_STYLE.itemTitleColor,
  itemBodyColor = DEFAULT_SERVICE_CARDS_STYLE.itemBodyColor,
  arrowColor = DEFAULT_SERVICE_CARDS_STYLE.arrowColor,
}) => {
  const { title, description, services, hasContent } =
    getServiceCardsSliderContent(data, lang, posParams, cId);

  if (!hasContent) {
    return null;
  }

  return (
    <ServiceCardsSliderPanel
      lang={lang}
      title={title}
      description={description}
      services={services}
      showTitle={showTitle}
      showDescription={showDescription}
      showItemTitle={showItemTitle}
      showItemDescription={showItemDescription}
      showIcon={showIcon}
      showArrow={showArrow}
      sectionBg={sectionBg}
      sectionPadding={sectionPadding}
      titleAlign={titleAlign}
      titleColor={titleColor}
      descriptionColor={descriptionColor}
      cardBg={cardBg}
      cardRadius={cardRadius}
      cardPadding={cardPadding}
      cardGap={cardGap}
      iconBg={iconBg}
      itemTitleColor={itemTitleColor}
      itemBodyColor={itemBodyColor}
      arrowColor={arrowColor}
    />
  );
};

export default ServiceCardsSlider;
