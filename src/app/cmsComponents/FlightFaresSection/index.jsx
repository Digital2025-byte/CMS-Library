"use client";

import FlightFaresDesktopGrid from "./components/FlightFaresDesktopGrid";
import FlightFaresHeader from "./components/FlightFaresHeader";
import FlightFaresMobileSlider from "./components/FlightFaresMobileSlider";
import { getFlightFaresContent } from "./utils/helpers";

const FlightFaresSection = ({ lang = "en", data, posParams }) => {
  const { title, cities, hasContent } = getFlightFaresContent(
    data,
    lang,
    posParams
  );

  if (!hasContent) {
    return null;
  }

  return (
    <>
      <FlightFaresHeader title={title} />
      <FlightFaresMobileSlider cities={cities} lang={lang} />
      <FlightFaresDesktopGrid cities={cities} lang={lang} />
    </>
  );
};

export default FlightFaresSection;
