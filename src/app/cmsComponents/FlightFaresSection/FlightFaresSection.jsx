"use client";

import FlightFaresDesktopGrid from "./components/FlightFaresDesktopGrid";
import FlightFaresHeader from "./components/FlightFaresHeader";
import FlightFaresMobileSlider from "./components/FlightFaresMobileSlider";
import { getFlightFaresContent } from "./utils/helpers";
import { resolveFlightFaresStyle } from "./utils/style";

export default function FlightFaresSection({
  lang = "en",
  data,
  style,
  posParams,
}) {
  const resolvedStyle = resolveFlightFaresStyle(style);
  const content = getFlightFaresContent(data, lang, posParams);

  if (!content.hasContent) {
    return null;
  }

  return (
    <>
      <FlightFaresHeader title={content.title} style={resolvedStyle} />
      <FlightFaresMobileSlider
        cities={content.cities}
        lang={lang}
        oneWayLabel={content.oneWayLabel}
        newLabel={content.newLabel}
        fromTemplate={content.fromTemplate}
        style={resolvedStyle}
      />
      <FlightFaresDesktopGrid
        cities={content.cities}
        lang={lang}
        oneWayLabel={content.oneWayLabel}
        newLabel={content.newLabel}
        fromTemplate={content.fromTemplate}
        style={resolvedStyle}
      />
    </>
  );
}
