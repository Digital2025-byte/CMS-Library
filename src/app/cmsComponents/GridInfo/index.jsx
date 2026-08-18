"use client";

import GridInfoCityFilter from "./components/GridInfoCityFilter";
import GridInfoGrid from "./components/GridInfoGrid";
import GridInfoHeader from "./components/GridInfoHeader";
import { useGridInfoCities } from "./hooks/useGridInfoCities";
import { getGridInfoContent } from "./utils/helpers";
import { DEFAULT_GRID_INFO_STYLE } from "./utils/style";

const GridInfo = ({
  lang = "en",
  data,
  showTitle = DEFAULT_GRID_INFO_STYLE.showTitle,
  showDescription = DEFAULT_GRID_INFO_STYLE.showDescription,
  showFilter = DEFAULT_GRID_INFO_STYLE.showFilter,
  showName = DEFAULT_GRID_INFO_STYLE.showName,
  showAddress = DEFAULT_GRID_INFO_STYLE.showAddress,
  showPhone = DEFAULT_GRID_INFO_STYLE.showPhone,
  showEmail = DEFAULT_GRID_INFO_STYLE.showEmail,
  showHours = DEFAULT_GRID_INFO_STYLE.showHours,
  showCardBg = DEFAULT_GRID_INFO_STYLE.showCardBg,
  titleAlign = DEFAULT_GRID_INFO_STYLE.titleAlign,
  titleColor = DEFAULT_GRID_INFO_STYLE.titleColor,
  descriptionColor = DEFAULT_GRID_INFO_STYLE.descriptionColor,
  chipColor = DEFAULT_GRID_INFO_STYLE.chipColor,
  chipActiveText = DEFAULT_GRID_INFO_STYLE.chipActiveText,
  chipIdleBg = DEFAULT_GRID_INFO_STYLE.chipIdleBg,
  cardRadius = DEFAULT_GRID_INFO_STYLE.cardRadius,
  cardGap = DEFAULT_GRID_INFO_STYLE.cardGap,
  cardBg = DEFAULT_GRID_INFO_STYLE.cardBg,
  nameColor = DEFAULT_GRID_INFO_STYLE.nameColor,
  bodyColor = DEFAULT_GRID_INFO_STYLE.bodyColor,
  iconColor = DEFAULT_GRID_INFO_STYLE.iconColor,
}) => {
  const { title, description, items, hasContent } = getGridInfoContent(
    data,
    lang
  );
  const { cities, selectedCity, setSelectedCity, filteredItems } =
    useGridInfoCities(items);

  if (!hasContent) {
    return null;
  }

  const visibleItems = showFilter ? filteredItems : items;

  return (
    <>
      <GridInfoHeader
        title={title}
        description={description}
        showTitle={showTitle}
        showDescription={showDescription}
        titleAlign={titleAlign}
        titleColor={titleColor}
        descriptionColor={descriptionColor}
      />
      {showFilter ? (
        <GridInfoCityFilter
          cities={cities}
          selectedCity={selectedCity}
          onCityChange={setSelectedCity}
          chipColor={chipColor}
          chipActiveText={chipActiveText}
          chipIdleBg={chipIdleBg}
        />
      ) : null}
      <GridInfoGrid
        items={visibleItems}
        lang={lang}
        showName={showName}
        showAddress={showAddress}
        showPhone={showPhone}
        showEmail={showEmail}
        showHours={showHours}
        showCardBg={showCardBg}
        cardRadius={cardRadius}
        cardGap={cardGap}
        cardBg={cardBg}
        nameColor={nameColor}
        bodyColor={bodyColor}
        iconColor={iconColor}
      />
    </>
  );
};

export default GridInfo;
