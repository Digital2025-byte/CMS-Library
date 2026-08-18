"use client";

import PageContentContainer from "@/components/layout/PageContentContainer";
import { getThemeColorCss } from "@/styles/themeColors";
import DestinationsCitiesIntro from "./DestinationsCitiesIntro";
import DestinationsCitiesStack from "./DestinationsCitiesStack";
import {
  DEFAULT_DESTINATIONS_CITIES_STYLE,
  SECTION_PADDING_CLASS,
} from "../utils/style";

export default function DestinationsCitiesPanel({
  lang = "en",
  title = "",
  description = "",
  cities = [],
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
  if (!title && !description && !cities.length) {
    return null;
  }

  const paddingClass =
    SECTION_PADDING_CLASS[sectionPadding] ?? SECTION_PADDING_CLASS.default;
  const showIntro = showTitle || showDescription;

  return (
    <section
      className={`overflow-hidden ${paddingClass}`}
      dir={lang === "ar" ? "rtl" : "ltr"}
      style={{
        backgroundColor: showSectionBg
          ? getThemeColorCss(sectionBg, "primary-800")
          : "transparent",
      }}
    >
      <PageContentContainer className="flex flex-col gap-8 lg:grid lg:grid-cols-[minmax(0,32%)_minmax(0,68%)] lg:items-center lg:gap-10 xl:gap-16">
        {showIntro ? (
          <DestinationsCitiesIntro
            title={title}
            description={description}
            showTitle={showTitle}
            showDescription={showDescription}
            align={titleAlign}
            titleColor={titleColor}
            descriptionColor={descriptionColor}
          />
        ) : (
          <div className="hidden lg:block" />
        )}
        <DestinationsCitiesStack
          cities={cities}
          lang={lang}
          posParams={posParams}
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
      </PageContentContainer>
    </section>
  );
}
