import { typography } from "@/styles/typography";
import { CARDS_PER_PAGE } from "../utils/constants";
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
}) {
  return (
    <div className="space-y-4">
      {gridTitle ? (
        <h2 className={`${typography.sectionTitle} font-bold text-white`}>
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
          />
        ))}

        {filteredCount === 0 ? (
          <p className={`${typography.body} col-span-full text-white/80`}>
            {emptyMessage}
          </p>
        ) : null}
      </div>
    </div>
  );
}
