"use client";

import SearchWithTabsAndGridPanel from "./components/SearchWithTabsAndGridPanel";
import { useSearchWithTabsAndGrid } from "./hooks/useSearchWithTabsAndGrid";
import { getSearchWithTabsAndGridContent } from "./utils/helpers";
import { DEFAULT_SEARCH_GRID_STYLE } from "./utils/style";

const SearchWithTabsAndGrid = ({
  lang = "en",
  data,
  posParams = "gb",
  cId,
  showTitle = DEFAULT_SEARCH_GRID_STYLE.showTitle,
  showSearch = DEFAULT_SEARCH_GRID_STYLE.showSearch,
  showTabs = DEFAULT_SEARCH_GRID_STYLE.showTabs,
  showSectionBg = DEFAULT_SEARCH_GRID_STYLE.showSectionBg,
  showCardImage = DEFAULT_SEARCH_GRID_STYLE.showCardImage,
  showCity = DEFAULT_SEARCH_GRID_STYLE.showCity,
  showName = DEFAULT_SEARCH_GRID_STYLE.showName,
  showTag = DEFAULT_SEARCH_GRID_STYLE.showTag,
  showOverlay = DEFAULT_SEARCH_GRID_STYLE.showOverlay,
  showButtons = DEFAULT_SEARCH_GRID_STYLE.showButtons,
  showArrows = DEFAULT_SEARCH_GRID_STYLE.showArrows,
  showDots = DEFAULT_SEARCH_GRID_STYLE.showDots,
  sectionBg = DEFAULT_SEARCH_GRID_STYLE.sectionBg,
  sectionPadding = DEFAULT_SEARCH_GRID_STYLE.sectionPadding,
  titleAlign = DEFAULT_SEARCH_GRID_STYLE.titleAlign,
  titleColor = DEFAULT_SEARCH_GRID_STYLE.titleColor,
  searchBg = DEFAULT_SEARCH_GRID_STYLE.searchBg,
  searchText = DEFAULT_SEARCH_GRID_STYLE.searchText,
  chipColor = DEFAULT_SEARCH_GRID_STYLE.chipColor,
  chipActiveText = DEFAULT_SEARCH_GRID_STYLE.chipActiveText,
  cardRadius = DEFAULT_SEARCH_GRID_STYLE.cardRadius,
  overlayColor = DEFAULT_SEARCH_GRID_STYLE.overlayColor,
  cityColor = DEFAULT_SEARCH_GRID_STYLE.cityColor,
  nameColor = DEFAULT_SEARCH_GRID_STYLE.nameColor,
  tagColor = DEFAULT_SEARCH_GRID_STYLE.tagColor,
  primaryBg = DEFAULT_SEARCH_GRID_STYLE.primaryBg,
  primaryText = DEFAULT_SEARCH_GRID_STYLE.primaryText,
  secondaryText = DEFAULT_SEARCH_GRID_STYLE.secondaryText,
  navColor = DEFAULT_SEARCH_GRID_STYLE.navColor,
  dotColor = DEFAULT_SEARCH_GRID_STYLE.dotColor,
}) => {
  const content = getSearchWithTabsAndGridContent(data, lang);
  const search = useSearchWithTabsAndGrid({
    sights: content.sights,
    tags: content.tags,
    allLabel: content.allLabel,
  });

  if (!content.hasContent) {
    return null;
  }

  return (
    <SearchWithTabsAndGridPanel
      lang={lang}
      posParams={posParams}
      cId={cId}
      content={content}
      search={search}
      showTitle={showTitle}
      showSearch={showSearch}
      showTabs={showTabs}
      showSectionBg={showSectionBg}
      showCardImage={showCardImage}
      showCity={showCity}
      showName={showName}
      showTag={showTag}
      showOverlay={showOverlay}
      showButtons={showButtons}
      showArrows={showArrows}
      showDots={showDots}
      sectionBg={sectionBg}
      sectionPadding={sectionPadding}
      titleAlign={titleAlign}
      titleColor={titleColor}
      searchBg={searchBg}
      searchText={searchText}
      chipColor={chipColor}
      chipActiveText={chipActiveText}
      cardRadius={cardRadius}
      overlayColor={overlayColor}
      cityColor={cityColor}
      nameColor={nameColor}
      tagColor={tagColor}
      primaryBg={primaryBg}
      primaryText={primaryText}
      secondaryText={secondaryText}
      navColor={navColor}
      dotColor={dotColor}
    />
  );
};

export default SearchWithTabsAndGrid;
