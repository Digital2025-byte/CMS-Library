"use client";

import ThreeDSlider from "@/components/lightswind/3d-slider";
import { getThemeColorCss } from "@/styles/themeColors";
import { getThreeDSliderContent } from "./utils/helpers";
import {
  CARD_RADIUS_CLASS,
  DEFAULT_THREE_D_SLIDER_STYLE,
  DRAG_SPEED_VALUE,
  HEIGHT_CLASS,
  WHEEL_SPEED_VALUE,
} from "./utils/style";

/**
 * Lightswind 3D slider — destination cards on a dotted stage.
 */
export default function ThreeDSliderSection({
  lang = "en",
  data,
  showDots = DEFAULT_THREE_D_SLIDER_STYLE.showDots,
  showCardImage = DEFAULT_THREE_D_SLIDER_STYLE.showCardImage,
  showCardTitle = DEFAULT_THREE_D_SLIDER_STYLE.showCardTitle,
  showNumber = DEFAULT_THREE_D_SLIDER_STYLE.showNumber,
  showOverlay = DEFAULT_THREE_D_SLIDER_STYLE.showOverlay,
  sectionBg,
  sectionHeight = DEFAULT_THREE_D_SLIDER_STYLE.sectionHeight,
  cardRadius = DEFAULT_THREE_D_SLIDER_STYLE.cardRadius,
  cardTitleColor,
  numberColor,
  overlayColor,
  dotsColor,
  wheelSpeed = DEFAULT_THREE_D_SLIDER_STYLE.wheelSpeed,
  dragSpeed = DEFAULT_THREE_D_SLIDER_STYLE.dragSpeed,
}) {
  const { items, hasContent } = getThreeDSliderContent(data, lang);

  if (!hasContent) {
    return null;
  }

  return (
    <section className="w-full" lang={lang}>
      <ThreeDSlider
        items={items}
        speedWheel={WHEEL_SPEED_VALUE[wheelSpeed] ?? WHEEL_SPEED_VALUE.default}
        speedDrag={DRAG_SPEED_VALUE[dragSpeed] ?? DRAG_SPEED_VALUE.default}
        heightClass={HEIGHT_CLASS[sectionHeight] ?? HEIGHT_CLASS.default}
        cardRadiusClass={
          CARD_RADIUS_CLASS[cardRadius] ?? CARD_RADIUS_CLASS.lg
        }
        showDots={showDots}
        showCardImage={showCardImage}
        showCardTitle={showCardTitle}
        showNumber={showNumber}
        showOverlay={showOverlay}
        stageBgCss={sectionBg ? getThemeColorCss(sectionBg, "foreground") : undefined}
        dotsColorCss={dotsColor ? getThemeColorCss(dotsColor, "white") : undefined}
        titleCss={
          cardTitleColor ? getThemeColorCss(cardTitleColor, "white") : undefined
        }
        numberCss={
          numberColor ? getThemeColorCss(numberColor, "white") : undefined
        }
        overlayCss={
          overlayColor ? getThemeColorCss(overlayColor, "foreground") : undefined
        }
      />
    </section>
  );
}
