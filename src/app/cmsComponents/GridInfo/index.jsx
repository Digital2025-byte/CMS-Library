"use client";

import GridInfoCityFilter from "./components/GridInfoCityFilter";
import GridInfoGrid from "./components/GridInfoGrid";
import GridInfoHeader from "./components/GridInfoHeader";
import { useGridInfoCities } from "./hooks/useGridInfoCities";
import { getGridInfoContent } from "./utils/helpers";

const GridInfo = ({ lang = "en", data }) => {
  const { title, description, items, hasContent } = getGridInfoContent(
    data,
    lang
  );
  const { cities, selectedCity, setSelectedCity, filteredItems } =
    useGridInfoCities(items);

  if (!hasContent) {
    return null;
  }

  return (
    <>
      <GridInfoHeader title={title} description={description} />
      <GridInfoCityFilter
        cities={cities}
        selectedCity={selectedCity}
        onCityChange={setSelectedCity}
      />
      <GridInfoGrid items={filteredItems} lang={lang} />
    </>
  );
};

export default GridInfo;
