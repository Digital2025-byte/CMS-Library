import { typography } from "@/styles/typography";
import { getThemeColorCss } from "@/styles/themeColors";
import { getFontWeightValue } from "@/styles/fontWeight";
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
  exploreLabel,
  exploreMagazineLabel,
  paginatedCards = [],
  activePageIndex = 0,
  style = DEFAULT_SEARCH_GRID_STYLE,
}) {
  const alignClass =
    TITLE_ALIGN_CLASS[style.titleAlign] ?? TITLE_ALIGN_CLASS.left;

  return (
    <div className="space-y-4">
      {style.showTitle && gridTitle ? (
        <h2
          className={`${typography.sectionTitle} font-bold ${alignClass}`}
          style={{ color: getThemeColorCss(style.titleColor, "white"), fontWeight: getFontWeightValue(style.titleFontWeight) }}
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
            style={style}
          />
        ))}
      </div>
    </div>
  );
}
