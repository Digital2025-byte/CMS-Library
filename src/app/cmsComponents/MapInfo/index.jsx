"use client";

import MapInfoCitySelector from "./components/MapInfoCitySelector";
import MapInfoCountryTabs from "./components/MapInfoCountryTabs";
import MapInfoDetails from "./components/MapInfoDetails";
import MapInfoHeader from "./components/MapInfoHeader";
import MapInfoOfficeTabs from "./components/MapInfoOfficeTabs";
import { useMapInfoSelection } from "./hooks/useMapInfoSelection";
import {
  getContactFieldLabels,
  getMapInfoContent,
} from "./utils/helpers";

const MapInfo = ({ lang = "en", data }) => {
  const isArabic = lang === "ar";
  const labels = getContactFieldLabels(isArabic);
  const { title, description, branches, hasContent } = getMapInfoContent(
    data,
    lang
  );
  const {
    countries,
    cities,
    cityOffices,
    selectedCountry,
    selectedCity,
    selectedOfficeIndex,
    displayOffice,
    handleCountryClick,
    handleCityClick,
    setSelectedOfficeIndex,
  } = useMapInfoSelection(branches);

  if (!hasContent) {
    return null;
  }

  return (
    <>
      <MapInfoHeader title={title} description={description} />

      <MapInfoCountryTabs
        countries={countries}
        selectedCountry={selectedCountry}
        onCountryChange={handleCountryClick}
      />

      <MapInfoCitySelector
        cities={cities}
        selectedCity={selectedCity}
        onCityChange={handleCityClick}
        cityLabel={labels.city}
      />

      <MapInfoOfficeTabs
        offices={cityOffices}
        selectedOfficeIndex={selectedOfficeIndex}
        onOfficeChange={setSelectedOfficeIndex}
      />

      <MapInfoDetails
        office={displayOffice}
        citiesCount={cities.length}
        lang={lang}
        isArabic={isArabic}
      />
    </>
  );
};

export default MapInfo;
