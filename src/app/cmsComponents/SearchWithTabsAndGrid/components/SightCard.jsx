"use client";

import Image from "next/image";
import { BookOpenTextIcon } from "@phosphor-icons/react";
import Button from "@/components/ui/Button";
import { getThemeColorCss } from "@/styles/themeColors";
import { typography } from "@/styles/typography";
import { isUsableImageSrc } from "../utils/helpers";
import {
  CARD_RADIUS_CLASS,
  DEFAULT_SEARCH_GRID_STYLE,
} from "../utils/style";

export default function SightCard({
  card,
  lang = "en",
  posParams = "gb",
  cId,
  exploreLabel = "Explore",
  exploreMagazineLabel = "Explore as magazine",
  showCardImage = DEFAULT_SEARCH_GRID_STYLE.showCardImage,
  showCity = DEFAULT_SEARCH_GRID_STYLE.showCity,
  showName = DEFAULT_SEARCH_GRID_STYLE.showName,
  showTag = DEFAULT_SEARCH_GRID_STYLE.showTag,
  showOverlay = DEFAULT_SEARCH_GRID_STYLE.showOverlay,
  showButtons = DEFAULT_SEARCH_GRID_STYLE.showButtons,
  cardRadius = DEFAULT_SEARCH_GRID_STYLE.cardRadius,
  overlayColor = DEFAULT_SEARCH_GRID_STYLE.overlayColor,
  cityColor = DEFAULT_SEARCH_GRID_STYLE.cityColor,
  nameColor = DEFAULT_SEARCH_GRID_STYLE.nameColor,
  tagColor = DEFAULT_SEARCH_GRID_STYLE.tagColor,
  primaryBg = DEFAULT_SEARCH_GRID_STYLE.primaryBg,
  primaryText = DEFAULT_SEARCH_GRID_STYLE.primaryText,
  secondaryText = DEFAULT_SEARCH_GRID_STYLE.secondaryText,
}) {
  const isRtl = lang === "ar";
  const slug = String(card?.slug || "").startsWith("/")
    ? card.slug
    : `/${card?.slug || ""}`;
  const stackedHref = `/${posParams}/${lang}/sights${slug}?template=stacked`;
  const magazineHref = `/${posParams}/${lang}/sights${slug}`;
  const radiusClass = CARD_RADIUS_CLASS[cardRadius] ?? CARD_RADIUS_CLASS.full;
  const overlayCss = getThemeColorCss(overlayColor, "900");
  const cityCss = getThemeColorCss(cityColor, "white");
  const nameCss = getThemeColorCss(nameColor, "white");
  const tagCss = getThemeColorCss(tagColor, "white");
  const primaryPill = getThemeColorCss(primaryBg, "primary-2");
  const primaryFg = getThemeColorCss(primaryText, "white");
  const secondaryFg = getThemeColorCss(secondaryText, "white");
  const canShowImage = showCardImage && isUsableImageSrc(card?.image);

  return (
    <article
      className={`group relative aspect-[4/5] w-full overflow-hidden ${radiusClass}`}
      dir={isRtl ? "rtl" : "ltr"}
    >
      {canShowImage ? (
        <Image
          src={card.image}
          alt={card.name || ""}
          fill
          className="object-cover transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          unoptimized={String(card.image).startsWith("http")}
        />
      ) : (
        <div className="absolute inset-0 bg-surface-2" aria-hidden />
      )}

      {showOverlay ? (
        <div
          className="pointer-events-none absolute inset-0 top-70"
          style={{
            background: `linear-gradient(180deg, color-mix(in srgb, ${overlayCss} 0%, transparent) 0%, ${overlayCss} 100%)`,
          }}
          aria-hidden
        />
      ) : null}

      {showCity && card?.cityName ? (
        <p
          className={`${typography.body} absolute top-10 ${isRtl ? "right-5" : "left-5"} font-semibold`}
          style={{ color: cityCss, textShadow: "0 2px 8px rgba(0,0,0,0.45)" }}
        >
          {card.cityName}
        </p>
      ) : null}

      <div
        className="absolute inset-x-5 bottom-15 flex items-end justify-between gap-3 transition-all duration-500 group-hover:translate-y-3 group-hover:opacity-0"
      >
        {showName && card?.name ? (
          <h3
            className={`${typography.itemTitle} font-semibold`}
            style={{ color: nameCss, textShadow: "0 2px 8px rgba(0,0,0,0.45)" }}
          >
            {card.name}
          </h3>
        ) : null}
        {showTag && card?.tag ? (
          <span
            className={`${typography.body} shrink-0 font-medium`}
            style={{ color: tagCss, textShadow: "0 2px 8px rgba(0,0,0,0.45)" }}
          >
            {card.tag}
          </span>
        ) : null}
      </div>

      {showButtons ? (
        <div className="absolute inset-x-5 bottom-5 flex translate-y-4 flex-col items-center opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <Button
            label={exploreLabel}
            href={stackedHref}
            cId={cId}
            fullWidth
            className={`mt-2 ${typography.caption}`}
            style={{
              backgroundColor: primaryPill,
              borderColor: primaryPill,
              color: primaryFg,
            }}
          />
          <Button
            label={exploreMagazineLabel}
            href={magazineHref}
            cId={cId}
            icon={<BookOpenTextIcon size={20} weight="bold" aria-hidden />}
            iconPosition="start"
            variant="secondary"
            className={`mt-2 ${typography.caption}`}
            fullWidth
            style={{
              borderColor: secondaryFg,
              color: secondaryFg,
            }}
          />
        </div>
      ) : null}
    </article>
  );
}
