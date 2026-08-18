import { typography } from "@/styles/typography";
import { getThemeColorCss } from "@/styles/themeColors";
import { CARDS_PER_PAGE } from "../utils/constants";
import {
  DEFAULT_SEARCH_GRID_STYLE,
  TITLE_ALIGN_CLASS,
} from "../utils/style";
import SightCard from "./SightCard";

export default function SightCardsGrid({
  lang = "en",
  posParams = "gb",
  cId,
  gridTitle = "",
  emptyMessage = "",
  exploreLabel,
  exploreMagazineLabel,
  paginatedCards = [],
  filteredCount = 0,
  activePageIndex = 0,
  showTitle = DEFAULT_SEARCH_GRID_STYLE.showTitle,
  showCardImage = DEFAULT_SEARCH_GRID_STYLE.showCardImage,
  showCity = DEFAULT_SEARCH_GRID_STYLE.showCity,
  showName = DEFAULT_SEARCH_GRID_STYLE.showName,
  showTag = DEFAULT_SEARCH_GRID_STYLE.showTag,
  showOverlay = DEFAULT_SEARCH_GRID_STYLE.showOverlay,
  showButtons = DEFAULT_SEARCH_GRID_STYLE.showButtons,
  titleAlign = DEFAULT_SEARCH_GRID_STYLE.titleAlign,
  titleColor = DEFAULT_SEARCH_GRID_STYLE.titleColor,
  cardRadius = DEFAULT_SEARCH_GRID_STYLE.cardRadius,
  overlayColor = DEFAULT_SEARCH_GRID_STYLE.overlayColor,
  cityColor = DEFAULT_SEARCH_GRID_STYLE.cityColor,
  nameColor = DEFAULT_SEARCH_GRID_STYLE.nameColor,
  tagColor = DEFAULT_SEARCH_GRID_STYLE.tagColor,
  primaryBg = DEFAULT_SEARCH_GRID_STYLE.primaryBg,
  primaryText = DEFAULT_SEARCH_GRID_STYLE.primaryText,
  secondaryText = DEFAULT_SEARCH_GRID_STYLE.secondaryText,
}) {
  const alignClass = TITLE_ALIGN_CLASS[titleAlign] ?? TITLE_ALIGN_CLASS.left;

  return (
    <div className="space-y-4">
      {showTitle && gridTitle ? (
        <h2
          className={`${typography.sectionTitle} font-bold ${alignClass}`}
          style={{ color: getThemeColorCss(titleColor, "white") }}
        >
          {gridTitle}
        </h2>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {paginatedCards.map((card, index) => (
          <SightCard
            key={
              card?.id ||
              `${card?.name || "card"}-${index + activePageIndex * CARDS_PER_PAGE}`
            }
            card={card}
            lang={lang}
            posParams={posParams}
            cId={cId}
            exploreLabel={exploreLabel}
            exploreMagazineLabel={exploreMagazineLabel}
            showCardImage={showCardImage}
            showCity={showCity}
            showName={showName}
            showTag={showTag}
            showOverlay={showOverlay}
            showButtons={showButtons}
            cardRadius={cardRadius}
            overlayColor={overlayColor}
            cityColor={cityColor}
            nameColor={nameColor}
            tagColor={tagColor}
            primaryBg={primaryBg}
            primaryText={primaryText}
            secondaryText={secondaryText}
          />
        ))}

        {filteredCount === 0 ? (
          <p
            className={`${typography.body} col-span-full`}
            style={{
              color: `color-mix(in srgb, ${getThemeColorCss(titleColor, "white")} 80%, transparent)`,
            }}
          >
            {emptyMessage}
          </p>
        ) : null}
      </div>
    </div>
  );
}
