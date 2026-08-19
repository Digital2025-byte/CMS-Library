"use client";

import { ScrollCarousel as ScrollCarouselLib } from "@/components/lightswind/scroll-carousel";
import { getThemeColorCss } from "@/styles/themeColors";
import { CARD_RADIUS_CLASS } from "../utils/style";

export default function ScrollCarouselPanel({ lang = "en", content, style }) {
  const { features } = content;

  return (
    <section className="w-full" lang={lang}>
      <ScrollCarouselLib
        features={features}
        showTitle={style.showTitle}
        showDescription={style.showDescription}
        showCardImage={style.showCardImage}
        showOverlay={style.showOverlay}
        showProgress={style.showProgress}
        showDots={false}
        cardRadiusClass={
          CARD_RADIUS_CLASS[style.cardRadius] ?? CARD_RADIUS_CLASS.lg
        }
        stageBgCss={
          style.showSectionBg
            ? getThemeColorCss(style.sectionBg, "foreground")
            : "transparent"
        }
        titleCss={
          style.titleColor
            ? getThemeColorCss(style.titleColor, "white")
            : undefined
        }
        descriptionCss={
          style.descriptionColor
            ? getThemeColorCss(style.descriptionColor, "white")
            : undefined
        }
      />
    </section>
  );
}
