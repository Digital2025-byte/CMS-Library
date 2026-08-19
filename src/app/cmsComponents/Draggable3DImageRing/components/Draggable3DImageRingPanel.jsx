"use client";

import { ThreeDImageRing } from "@/components/lightswind/draggable-3d-image-ring";
import { getThemeColorCss } from "@/styles/themeColors";
import {
  CARD_RADIUS_CLASS,
  RING_EXTRAS,
} from "../utils/style";

export default function Draggable3DImageRingPanel({
  content,
  style,
}) {
  const frameRadius =
    CARD_RADIUS_CLASS[style.frameRadius] ?? CARD_RADIUS_CLASS.lg;
  const cardRadius =
    CARD_RADIUS_CLASS[style.cardRadius] ?? CARD_RADIUS_CLASS.none;
  const dotsCss = style.dotsColor
    ? getThemeColorCss(style.dotsColor, "300")
    : "#d4d4d8";

  const frame = (
    <div className={style.containerHeight || RING_EXTRAS.containerHeight}>
      <ThreeDImageRing
        images={content.images}
        width={style.width ?? RING_EXTRAS.width}
        perspective={style.perspective ?? RING_EXTRAS.perspective}
        imageDistance={style.imageDistance ?? RING_EXTRAS.imageDistance}
        showCardImage={style.showCardImage}
        imageClassName={cardRadius}
        backgroundColor="transparent"
      />
    </div>
  );

  if (!style.showFrame) {
    return frame;
  }

  return (
    <div
      className={`relative mx-4 overflow-hidden border border-zinc-200/80 sm:mx-6 lg:mx-auto lg:max-w-5xl ${frameRadius}`}
      style={{
        backgroundColor: getThemeColorCss(style.stageBg, "white"),
        backgroundImage: style.showStageDots
          ? `radial-gradient(circle, ${dotsCss} 1px, transparent 1.2px)`
          : "none",
        backgroundSize: style.showStageDots ? "18px 18px" : undefined,
      }}
    >
      {frame}
    </div>
  );
}
