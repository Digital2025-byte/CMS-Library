"use client";

import { ThreeDImageRing } from "@/components/lightswind/3d-image-ring";
import { getThemeColorCss } from "@/styles/themeColors";
import TitleDescription from "../TitleDescription";
import {
  CARD_RADIUS_CLASS,
  DEFAULT_THREE_D_IMAGE_RING_STYLE,
  RING_EXTRAS,
  SECTION_BG,
} from "../utils/style";

export default function ThreeDImageRingPanel({
  lang = "en",
  content,
  style = DEFAULT_THREE_D_IMAGE_RING_STYLE,
}) {
  const backgroundColor = !style.showSectionBg
    ? "transparent"
    : style.sectionBg === DEFAULT_THREE_D_IMAGE_RING_STYLE.sectionBg
      ? style.backgroundColor || SECTION_BG
      : getThemeColorCss(style.sectionBg, "primary-800");

  return (
    <section
      className={`w-full ${style.sectionClassName || ""}`.trim()}
      style={{ backgroundColor }}
      lang={lang}
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <TitleDescription
        title={content.title}
        description={content.description}
        style={style}
      />
      <div
        className={`flex w-full flex-col ${
          style.containerHeight || RING_EXTRAS.containerHeight
        }`}
      >
        <ThreeDImageRing
          images={content.images}
          captions={content.captions}
          lang={lang}
          width={style.width ?? RING_EXTRAS.width}
          perspective={style.perspective ?? RING_EXTRAS.perspective}
          imageDistance={style.imageDistance ?? RING_EXTRAS.imageDistance}
          draggable={RING_EXTRAS.draggable}
          containerClassName="h-full w-full"
          backgroundColor={backgroundColor}
          imageClassName={
            CARD_RADIUS_CLASS[style.cardRadius] ?? CARD_RADIUS_CLASS.none
          }
          showCaptions={style.showCaptions}
          showOverlay={style.showOverlay}
          showCardImage={style.showCardImage}
          captionCss={
            style.captionColor
              ? getThemeColorCss(style.captionColor, "white")
              : undefined
          }
        />
      </div>
    </section>
  );
}
