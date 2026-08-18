import PageContentContainer from "@/components/layout/PageContentContainer";
import { getThemeColorCss } from "@/styles/themeColors";
import {
  DEFAULT_SEARCH_GRID_STYLE,
  SECTION_PADDING_CLASS,
} from "../utils/style";
import FilterTabs from "./FilterTabs";
import SearchFields from "./SearchFields";
import SearchPagination from "./SearchPagination";
import SightCardsGrid from "./SightCardsGrid";

export default function SearchWithTabsAndGridPanel({
  lang = "en",
  posParams = "gb",
  cId,
  content,
  search,
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
}) {
  const isRtl = lang === "ar";
  const paddingClass =
    SECTION_PADDING_CLASS[sectionPadding] ?? SECTION_PADDING_CLASS.default;

  return (
    <section
      className={`relative w-full overflow-hidden ${paddingClass}`}
      dir={isRtl ? "rtl" : "ltr"}
      style={
        showSectionBg
          ? { backgroundColor: getThemeColorCss(sectionBg, "main") }
          : undefined
      }
    >
      <PageContentContainer>
        <div ref={search.componentTopRef} className="flex flex-col gap-6 md:gap-8">
          {showSearch ? (
            <div className="order-2 sm:order-1">
              <SearchFields
                placeholder={content.searchPlaceholder}
                searchQuery={search.searchQuery}
                onSearchQueryChange={search.setSearchQuery}
                searchBg={searchBg}
                searchText={searchText}
              />
            </div>
          ) : null}

          {showTabs ? (
            <div className="order-1 sm:order-2">
              <FilterTabs
                filterNames={search.filterNames}
                filterIconMap={search.filterIconMap}
                activeFilter={search.activeFilter}
                onFilterChange={search.setActiveFilter}
                allLabel={content.allLabel}
                chipColor={chipColor}
                chipActiveText={chipActiveText}
              />
            </div>
          ) : null}

          <div className="order-3">
            <SightCardsGrid
              lang={lang}
              posParams={posParams}
              cId={cId}
              gridTitle={content.gridTitle}
              emptyMessage={content.emptyMessage}
              exploreLabel={content.exploreLabel}
              exploreMagazineLabel={content.exploreMagazineLabel}
              paginatedCards={search.paginatedCards}
              filteredCount={search.filteredCards.length}
              activePageIndex={search.activePageIndex}
              showTitle={showTitle}
              showCardImage={showCardImage}
              showCity={showCity}
              showName={showName}
              showTag={showTag}
              showOverlay={showOverlay}
              showButtons={showButtons}
              titleAlign={titleAlign}
              titleColor={titleColor}
              cardRadius={cardRadius}
              overlayColor={overlayColor}
              cityColor={cityColor}
              nameColor={nameColor}
              tagColor={tagColor}
              primaryBg={primaryBg}
              primaryText={primaryText}
              secondaryText={secondaryText}
            />
          </div>

          <div className="order-4">
            <SearchPagination
              pageCount={search.pageCount}
              activePageIndex={search.activePageIndex}
              onPrev={search.handlePrevPage}
              onNext={search.handleNextPage}
              onGoToPage={search.setActivePageIndex}
              showArrows={showArrows}
              showDots={showDots}
              navColor={navColor}
              dotColor={dotColor}
            />
          </div>
        </div>
      </PageContentContainer>
    </section>
  );
}
