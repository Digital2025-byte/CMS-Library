import { BOTTOM_PANEL_CLASS } from "../utils/constants";
import { getThemeColorCss } from "@/styles/themeColors";
import CarouselCardHeader from "./CarouselCardHeader";
import CarouselCardMeta from "./CarouselCardMeta";

export default function CarouselCardPanel({
  cityName,
  originLabel,
  IATACode,
  posParams,
  lang,
  numberOfFlightsPerWeek,
  duration,
  description,
  buttonLabel,
  showCity = true,
  showOrigin = true,
  showNew = true,
  showFlights = true,
  showDuration = true,
  showDescription = true,
  showButton = true,
  cityColor = "50",
  originColor = "50",
  metaColor = "50",
  bodyColor = "50",
  panelBg = "secondary-2",
  buttonBg = "main",
  buttonText = "white",
  panelRadiusClass = "rounded-b-3xl",
}) {
  const panelCss = getThemeColorCss(panelBg, "secondary-2");

  return (
    <div
      className={`pointer-events-none absolute inset-x-0 bottom-0 ${BOTTOM_PANEL_CLASS} flex flex-col overflow-visible`}
    >
      <div
        className={`absolute inset-0 overflow-hidden ${panelRadiusClass}`}
        style={{
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(5px)",
        }}
      />
      <div
        className={`absolute inset-0 overflow-hidden ${panelRadiusClass}`}
        style={{
          backgroundColor: `color-mix(in srgb, ${panelCss} 40%, transparent)`,
        }}
      />

      <div className="relative z-10 flex h-full min-h-0 flex-1 flex-col overflow-visible">
        <CarouselCardHeader
          cityName={cityName}
          originLabel={originLabel}
          IATACode={IATACode}
          posParams={posParams}
          lang={lang}
          buttonLabel={buttonLabel}
          showCity={showCity}
          showOrigin={showOrigin}
          showButton={showButton}
          cityColor={cityColor}
          originColor={originColor}
          buttonBg={buttonBg}
          buttonText={buttonText}
        />
        <CarouselCardMeta
          numberOfFlightsPerWeek={numberOfFlightsPerWeek}
          duration={duration}
          lang={lang}
          description={description}
          showNew={showNew}
          showFlights={showFlights}
          showDuration={showDuration}
          showDescription={showDescription}
          metaColor={metaColor}
          bodyColor={bodyColor}
        />
      </div>
    </div>
  );
}
