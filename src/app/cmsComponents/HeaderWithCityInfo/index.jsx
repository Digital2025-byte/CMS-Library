"use client";

import HeaderWithCityInfoPanel from "./components/HeaderWithCityInfoPanel";
import { getHeaderWithCityInfoContent } from "./utils/helpers";

const HeaderWithCityInfo = ({ lang = "en", data }) => {
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
      hasCityCard={content.hasCityCard}
    />
  );
};

export default HeaderWithCityInfo;
