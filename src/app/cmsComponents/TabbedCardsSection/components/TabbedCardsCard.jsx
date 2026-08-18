import Image from "next/image";
import { typography } from "@/styles/typography";
import { getThemeColorCss } from "@/styles/themeColors";
import { isUsableImageSrc } from "../utils/helpers";
import { CARD_RADIUS_CLASS, DEFAULT_TABBED_CARDS_STYLE } from "../utils/style";

export default function TabbedCardsCard({
  card,
  showImage = DEFAULT_TABBED_CARDS_STYLE.showImage,
  showCardTitle = DEFAULT_TABBED_CARDS_STYLE.showCardTitle,
  showCardDescription = DEFAULT_TABBED_CARDS_STYLE.showCardDescription,
  showCardBg = DEFAULT_TABBED_CARDS_STYLE.showCardBg,
  cardRadius = DEFAULT_TABBED_CARDS_STYLE.cardRadius,
  cardBg = DEFAULT_TABBED_CARDS_STYLE.cardBg,
  nameColor = DEFAULT_TABBED_CARDS_STYLE.nameColor,
  bodyColor = DEFAULT_TABBED_CARDS_STYLE.bodyColor,
}) {
  if (!card) {
    return null;
  }

  const radiusClass = CARD_RADIUS_CLASS[cardRadius] ?? CARD_RADIUS_CLASS.full;
  const fillCss = showCardBg
    ? getThemeColorCss(cardBg, "primary-1")
    : "transparent";
  const titleCss = getThemeColorCss(nameColor, "secondary-2");
  const bodyCss = getThemeColorCss(bodyColor, "600");
  const mobileTitleCss = showCardBg ? "#ffffff" : titleCss;
  const mobileBodyCss = showCardBg
    ? "color-mix(in srgb, #ffffff 90%, transparent)"
    : bodyCss;

  return (
    <article
      className={`relative flex h-full flex-col overflow-hidden bg-[var(--card-fill)] ${radiusClass} lg:overflow-visible lg:rounded-none lg:bg-transparent`}
      style={{
        "--card-fill": fillCss,
        "--card-title": titleCss,
        "--card-title-mobile": mobileTitleCss,
        "--card-body": bodyCss,
        "--card-body-mobile": mobileBodyCss,
      }}
    >
      {showImage ? (
        <div
          className={`relative aspect-[4/3] w-full overflow-hidden lg:aspect-auto lg:h-62.5 ${radiusClass}`}
        >
          {isUsableImageSrc(card.imageSrc) ? (
            <Image
              src={card.imageSrc}
              alt={card.imageAlt || card.title || "Card image"}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 85vw, 33vw"
              priority
            />
          ) : (
            <div
              className="flex h-full w-full items-center justify-center bg-surface-1 text-sm text-muted"
              aria-hidden
            />
          )}
        </div>
      ) : null}

      <div className="flex flex-1 flex-col gap-2 px-5 py-6 text-center sm:px-6 sm:py-7 lg:gap-1 lg:px-0 lg:py-4">
        {showCardTitle && card.title ? (
          <h3
            className={`${typography.itemTitle} font-semibold wrap-break-word lg:font-medium [color:var(--card-title-mobile)] lg:[color:var(--card-title)]`}
          >
            {card.title}
          </h3>
        ) : null}
        {showCardDescription && card.description ? (
          <p
            className={`${typography.itemDescription} font-normal leading-relaxed wrap-break-word [color:var(--card-body-mobile)] lg:[color:var(--card-body)]`}
          >
            {card.description}
          </p>
        ) : null}
      </div>
    </article>
  );
}
