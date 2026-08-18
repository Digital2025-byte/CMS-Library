"use client";

import FlightFaresDesktopGrid from "./components/FlightFaresDesktopGrid";
import FlightFaresHeader from "./components/FlightFaresHeader";
import FlightFaresMobileSlider from "./components/FlightFaresMobileSlider";
import { getFlightFaresContent } from "./utils/helpers";
import { DEFAULT_FLIGHT_FARES_STYLE } from "./utils/style";

const FlightFaresSection = ({
  lang = "en",
  data,
  posParams,
  showTitle = DEFAULT_FLIGHT_FARES_STYLE.showTitle,
  showImage = DEFAULT_FLIGHT_FARES_STYLE.showImage,
  showOverlay = DEFAULT_FLIGHT_FARES_STYLE.showOverlay,
  showOneWay = DEFAULT_FLIGHT_FARES_STYLE.showOneWay,
  showNew = DEFAULT_FLIGHT_FARES_STYLE.showNew,
  showCity = DEFAULT_FLIGHT_FARES_STYLE.showCity,
  showPrice = DEFAULT_FLIGHT_FARES_STYLE.showPrice,
  titleAlign = DEFAULT_FLIGHT_FARES_STYLE.titleAlign,
  titleColor = DEFAULT_FLIGHT_FARES_STYLE.titleColor,
  cardRadius = DEFAULT_FLIGHT_FARES_STYLE.cardRadius,
  overlayColor = DEFAULT_FLIGHT_FARES_STYLE.overlayColor,
  cityColor = DEFAULT_FLIGHT_FARES_STYLE.cityColor,
  priceColor = DEFAULT_FLIGHT_FARES_STYLE.priceColor,
  badgeColor = DEFAULT_FLIGHT_FARES_STYLE.badgeColor,
  badgeText = DEFAULT_FLIGHT_FARES_STYLE.badgeText,
}) => {
  const content = getFlightFaresContent(data, lang, posParams);

  if (!content.hasContent) {
    return null;
  }

  const cardProps = {
    lang,
    oneWayLabel: content.oneWayLabel,
    newLabel: content.newLabel,
    fromTemplate: content.fromTemplate,
    showImage,
    showOverlay,
    showOneWay,
    showNew,
    showCity,
    showPrice,
    cardRadius,
    overlayColor,
    cityColor,
    priceColor,
    badgeColor,
    badgeText,
  };

  return (
    <>
      <FlightFaresHeader
        title={content.title}
        showTitle={showTitle}
        titleAlign={titleAlign}
        titleColor={titleColor}
      />
      <FlightFaresMobileSlider cities={content.cities} {...cardProps} />
      <FlightFaresDesktopGrid cities={content.cities} {...cardProps} />
    </>
  );
};

export default FlightFaresSection;
