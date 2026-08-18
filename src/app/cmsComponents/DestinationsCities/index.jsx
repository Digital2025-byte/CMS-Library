"use client";

import DestinationsCitiesPanel from "./components/DestinationsCitiesPanel";
import { getDestinationsCitiesContent } from "./utils/helpers";
import { DEFAULT_DESTINATIONS_CITIES_STYLE } from "./utils/style";

/**
 * DestinationsCities — stacked destination cards with drag / tap navigation.
 */
export default function DestinationsCities({
  lang = "en",
  data,
  posParams = "gb",
  showTitle = DEFAULT_DESTINATIONS_CITIES_STYLE.showTitle,
  showDescription = DEFAULT_DESTINATIONS_CITIES_STYLE.showDescription,
  showSectionBg = DEFAULT_DESTINATIONS_CITIES_STYLE.showSectionBg,
  showCardImage = DEFAULT_DESTINATIONS_CITIES_STYLE.showCardImage,
  showCity = DEFAULT_DESTINATIONS_CITIES_STYLE.showCity,
  showOrigin = DEFAULT_DESTINATIONS_CITIES_STYLE.showOrigin,
  showNew = DEFAULT_DESTINATIONS_CITIES_STYLE.showNew,
  showFlights = DEFAULT_DESTINATIONS_CITIES_STYLE.showFlights,
  showDuration = DEFAULT_DESTINATIONS_CITIES_STYLE.showDuration,
  showCardDescription = DEFAULT_DESTINATIONS_CITIES_STYLE.showCardDescription,
  showPanel = DEFAULT_DESTINATIONS_CITIES_STYLE.showPanel,
  showInactiveDim = DEFAULT_DESTINATIONS_CITIES_STYLE.showInactiveDim,
  showButton = DEFAULT_DESTINATIONS_CITIES_STYLE.showButton,
  sectionBg = DEFAULT_DESTINATIONS_CITIES_STYLE.sectionBg,
  sectionPadding = DEFAULT_DESTINATIONS_CITIES_STYLE.sectionPadding,
  titleAlign = DEFAULT_DESTINATIONS_CITIES_STYLE.titleAlign,
  titleColor = DEFAULT_DESTINATIONS_CITIES_STYLE.titleColor,
  descriptionColor = DEFAULT_DESTINATIONS_CITIES_STYLE.descriptionColor,
  cardRadius = DEFAULT_DESTINATIONS_CITIES_STYLE.cardRadius,
  cityColor = DEFAULT_DESTINATIONS_CITIES_STYLE.cityColor,
  originColor = DEFAULT_DESTINATIONS_CITIES_STYLE.originColor,
  originBg = DEFAULT_DESTINATIONS_CITIES_STYLE.originBg,
  metaColor = DEFAULT_DESTINATIONS_CITIES_STYLE.metaColor,
  bodyColor = DEFAULT_DESTINATIONS_CITIES_STYLE.bodyColor,
  panelBg = DEFAULT_DESTINATIONS_CITIES_STYLE.panelBg,
  overlayColor = DEFAULT_DESTINATIONS_CITIES_STYLE.overlayColor,
  buttonBg = DEFAULT_DESTINATIONS_CITIES_STYLE.buttonBg,
  buttonText = DEFAULT_DESTINATIONS_CITIES_STYLE.buttonText,
}) {
  const { title, description, cities, hasContent } =
    getDestinationsCitiesContent(data, lang);

  if (!hasContent) {
    return null;
  }

  return (
    <DestinationsCitiesPanel
      lang={lang}
      title={title}
      description={description}
      cities={cities}
      posParams={posParams}
      showTitle={showTitle}
      showDescription={showDescription}
      showSectionBg={showSectionBg}
      showCardImage={showCardImage}
      showCity={showCity}
      showOrigin={showOrigin}
      showNew={showNew}
      showFlights={showFlights}
      showDuration={showDuration}
      showCardDescription={showCardDescription}
      showPanel={showPanel}
      showInactiveDim={showInactiveDim}
      showButton={showButton}
      sectionBg={sectionBg}
      sectionPadding={sectionPadding}
      titleAlign={titleAlign}
      titleColor={titleColor}
      descriptionColor={descriptionColor}
      cardRadius={cardRadius}
      cityColor={cityColor}
      originColor={originColor}
      originBg={originBg}
      metaColor={metaColor}
      bodyColor={bodyColor}
      panelBg={panelBg}
      overlayColor={overlayColor}
      buttonBg={buttonBg}
      buttonText={buttonText}
    />
  );
}
