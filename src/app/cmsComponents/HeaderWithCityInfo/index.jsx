"use client";

import HeaderWithCityInfoPanel from "./components/HeaderWithCityInfoPanel";
import { getHeaderWithCityInfoContent } from "./utils/helpers";
import { DEFAULT_HEADER_WITH_CITY_INFO_STYLE } from "./utils/style";

const HeaderWithCityInfo = ({
  lang = "en",
  data,
  showTitle = DEFAULT_HEADER_WITH_CITY_INFO_STYLE.showTitle,
  showDescription = DEFAULT_HEADER_WITH_CITY_INFO_STYLE.showDescription,
  showCityCard = DEFAULT_HEADER_WITH_CITY_INFO_STYLE.showCityCard,
  showHeroImage = DEFAULT_HEADER_WITH_CITY_INFO_STYLE.showHeroImage,
  showOverlay = DEFAULT_HEADER_WITH_CITY_INFO_STYLE.showOverlay,
  showCardHeading = DEFAULT_HEADER_WITH_CITY_INFO_STYLE.showCardHeading,
  showCardDescription = DEFAULT_HEADER_WITH_CITY_INFO_STYLE.showCardDescription,
  showTiles = DEFAULT_HEADER_WITH_CITY_INFO_STYLE.showTiles,
  showNextFlight = DEFAULT_HEADER_WITH_CITY_INFO_STYLE.showNextFlight,
  titleAlign = DEFAULT_HEADER_WITH_CITY_INFO_STYLE.titleAlign,
  titleColor = DEFAULT_HEADER_WITH_CITY_INFO_STYLE.titleColor,
  descriptionColor = DEFAULT_HEADER_WITH_CITY_INFO_STYLE.descriptionColor,
  overlayColor = DEFAULT_HEADER_WITH_CITY_INFO_STYLE.overlayColor,
  cardRadius = DEFAULT_HEADER_WITH_CITY_INFO_STYLE.cardRadius,
  cardHeadingColor = DEFAULT_HEADER_WITH_CITY_INFO_STYLE.cardHeadingColor,
  cardBodyColor = DEFAULT_HEADER_WITH_CITY_INFO_STYLE.cardBodyColor,
  tileLabelColor = DEFAULT_HEADER_WITH_CITY_INFO_STYLE.tileLabelColor,
  tileValueColor = DEFAULT_HEADER_WITH_CITY_INFO_STYLE.tileValueColor,
  nextFlightColor = DEFAULT_HEADER_WITH_CITY_INFO_STYLE.nextFlightColor,
}) => {
  const content = getHeaderWithCityInfoContent(data, lang);

  if (!content.hasContent) {
    return null;
  }

  return (
    <HeaderWithCityInfoPanel
      lang={lang}
      title={content.title}
      countryName={content.countryName}
      weatherTitle={content.weatherTitle}
      description={content.description}
      weather={content.weather}
      localTime={content.localTime}
      duration={content.duration}
      numberOfFlightPerWeek={content.numberOfFlightPerWeek}
      nextFlight={content.nextFlight}
      labels={content.labels}
      backgroundImage={content.backgroundImage}
      imageAlt={content.imageAlt}
      hasCityCard={content.hasCityCard}
      showTitle={showTitle}
      showDescription={showDescription}
      showCityCard={showCityCard}
      showHeroImage={showHeroImage}
      showOverlay={showOverlay}
      showCardHeading={showCardHeading}
      showCardDescription={showCardDescription}
      showTiles={showTiles}
      showNextFlight={showNextFlight}
      titleAlign={titleAlign}
      titleColor={titleColor}
      descriptionColor={descriptionColor}
      overlayColor={overlayColor}
      cardRadius={cardRadius}
      cardHeadingColor={cardHeadingColor}
      cardBodyColor={cardBodyColor}
      tileLabelColor={tileLabelColor}
      tileValueColor={tileValueColor}
      nextFlightColor={nextFlightColor}
    />
  );
};

export default HeaderWithCityInfo;
