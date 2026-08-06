import PageContentContainer from "@/components/layout/PageContentContainer";
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
}) {
  const isRtl = lang === "ar";

  return (
    <section
      className="relative w-full overflow-hidden bg-main py-8 lg:py-12"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <PageContentContainer>
        <div ref={search.componentTopRef} className="flex flex-col gap-6">
          <div className="order-2 sm:order-1">
            <SearchFields
              namePlaceholder={content.namePlaceholder}
              cityPlaceholder={content.cityPlaceholder}
              searchName={search.searchName}
              onSearchNameChange={search.setSearchName}
              searchCity={search.searchCity}
              onSearchCityChange={search.setSearchCity}
            />
          </div>

          <div className="order-1 sm:order-2">
            <FilterTabs
              filterNames={search.filterNames}
              filterIconMap={search.filterIconMap}
              activeFilter={search.activeFilter}
              onFilterChange={search.setActiveFilter}
              allLabel={content.allLabel}
            />
          </div>

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
            />
          </div>

          <div className="order-4">
            <SearchPagination
              pageCount={search.pageCount}
              activePageIndex={search.activePageIndex}
              onPrev={search.handlePrevPage}
              onNext={search.handleNextPage}
              onGoToPage={search.setActivePageIndex}
            />
          </div>
        </div>
      </PageContentContainer>
    </section>
  );
}
