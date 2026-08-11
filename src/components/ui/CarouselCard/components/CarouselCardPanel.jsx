import { BOTTOM_PANEL_CLASS } from "../utils/constants";
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
}) {
  return (
    <div
      className={`pointer-events-none absolute inset-x-0 bottom-0 ${BOTTOM_PANEL_CLASS} flex flex-col overflow-visible`}
    >
      <div
        className="absolute inset-0 overflow-hidden rounded-b-3xl"
        style={{
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(5px)",
        }}
      />
      <div className="absolute inset-0 overflow-hidden rounded-b-3xl bg-secondary-2/40" />

      <div className="relative z-10 flex h-full min-h-0 flex-1 flex-col overflow-visible">
        <CarouselCardHeader
          cityName={cityName}
          originLabel={originLabel}
          IATACode={IATACode}
          posParams={posParams}
          lang={lang}
        />
        <CarouselCardMeta
          numberOfFlightsPerWeek={numberOfFlightsPerWeek}
          duration={duration}
          lang={lang}
          description={description}
        />
      </div>
    </div>
  );
}
