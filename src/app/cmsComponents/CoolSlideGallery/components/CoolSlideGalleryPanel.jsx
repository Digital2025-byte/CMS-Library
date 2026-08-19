"use client";

import CoolSlideGalleryLib from "@/components/lightswind/cool-slide-gallery";
import { getThemeColorCss } from "@/styles/themeColors";
import {
  CARD_RADIUS_VALUE,
  GALLERY_EXTRAS,
} from "../utils/style";

export default function CoolSlideGalleryPanel({ content, style }) {
  const { slides } = content;

  return (
    <CoolSlideGalleryLib
      slides={slides}
      cardWidth={GALLERY_EXTRAS.cardWidth}
      cardHeight={GALLERY_EXTRAS.cardHeight}
      radius={CARD_RADIUS_VALUE[style.cardRadius] ?? CARD_RADIUS_VALUE.sm}
      tilt={GALLERY_EXTRAS.tilt}
      sideTilt={GALLERY_EXTRAS.sideTilt}
      gap={GALLERY_EXTRAS.gap}
      dimOpacity={GALLERY_EXTRAS.dimOpacity}
      showTitle={style.showTitle}
      showBadge={style.showBadge}
      titlePosition={GALLERY_EXTRAS.titlePosition}
      showArrows={style.showArrows}
      showDots={style.showDots}
      showCounter={GALLERY_EXTRAS.showCounter}
      showCardImage={style.showCardImage}
      clickable={GALLERY_EXTRAS.clickable}
      draggable={GALLERY_EXTRAS.draggable}
      keyboardNavigation={GALLERY_EXTRAS.keyboardNavigation}
      autoplay={GALLERY_EXTRAS.autoplay}
      animationDuration={GALLERY_EXTRAS.animationDuration}
      easing={GALLERY_EXTRAS.easing}
      maxVisible={GALLERY_EXTRAS.maxVisible}
      depth={GALLERY_EXTRAS.depth}
      scaleStep={GALLERY_EXTRAS.scaleStep}
      perspective={GALLERY_EXTRAS.perspective}
      titleCss={
        style.titleColor
          ? getThemeColorCss(style.titleColor, "white")
          : undefined
      }
      subtitleCss={
        style.subtitleColor
          ? getThemeColorCss(style.subtitleColor, "white")
          : undefined
      }
    />
  );
}
