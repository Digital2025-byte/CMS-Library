"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider-hero.css";
import SliderPanel from "./components/SliderPanel";
import { DEFAULT_THEME } from "./utils/themes";
import { DEFAULT_IMAGE_OVERLAY } from "./utils/imageOverlay";
import { getSliderContent } from "./utils/helpers";
import { mergeSliderSettings } from "./utils/sliderSettings";

/**
 * Hero image Slider (react-slick).
 *
 * @param {Object} props
 * @param {string} [props.lang="en"]
 * @param {Object} props.data - CMS translations with `content.slides[]`
 * @param {string} [props.posParams="gb"]
 * @param {string|number} [props.cId]
 * @param {Object} [props.settings] - react-slick overrides merged over defaults
 * @param {"primary-1"|"primary-2"|"secondary-1"|"secondary-2"} [props.theme]
 *   Theme for arrows, active dots, and CTA button
 * @param {Object} [props.imageOverlay] - Gradient overlay on slide images
 *
 * @example
 * <Slider
 *   lang={lang}
 *   data={sliderData}
 *   theme="primary-1"
 *   imageOverlay={{
 *     color: "main",
 *     fromOpacity: 0.7,
 *     viaOpacity: 0.2,
 *     direction: "to top",
 *   }}
 *   settings={{ arrows: true, dots: true }}
 * />
 */
const Slider = ({
  lang = "en",
  data,
  posParams = "gb",
  cId,
  settings: parentSettings = {},
  theme = DEFAULT_THEME,
  imageOverlay = DEFAULT_IMAGE_OVERLAY,
}) => {
  const { slides, hasContent } = getSliderContent(data, lang);

  if (!hasContent) {
    return null;
  }

  // Keep slick LTR — `rtl: true` breaks the track under document RTL.
  // Arabic text direction is handled on slide content via `dir` / alignment.
  const settings = mergeSliderSettings(parentSettings);

  // Single slide: disable loop / autoplay noise
  if (slides.length <= 1) {
    settings.infinite = false;
    settings.autoplay = false;
    settings.dots = false;
    settings.swipe = false;
    settings.arrows = false;
  }

  const showArrows = settings.arrows !== false && slides.length > 1;

  return (
    <SliderPanel
      lang={lang}
      posParams={posParams}
      cId={cId}
      slides={slides}
      settings={settings}
      showArrows={showArrows}
      theme={theme}
      imageOverlay={imageOverlay}
    />
  );
};

export default Slider;
export { DEFAULT_SLIDER_SETTINGS } from "./utils/sliderSettings";
export { default as SliderArrowNav } from "./components/SliderArrow";
export {
  SLIDER_THEMES,
  DEFAULT_THEME,
  resolveTheme,
} from "./utils/themes";
export {
  DEFAULT_IMAGE_OVERLAY,
  resolveImageOverlay,
} from "./utils/imageOverlay";
