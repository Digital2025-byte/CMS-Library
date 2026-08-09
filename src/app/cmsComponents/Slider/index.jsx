"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderPanel from "./components/SliderPanel";
import { DEFAULT_ARROW_THEME } from "./utils/arrowThemes";
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
 * @param {"primary-1"|"primary-2"|"secondary-1"|"secondary-2"} [props.arrowTheme]
 *   Theme for arrows and active dots
 *
 * @example
 * <Slider
 *   lang={lang}
 *   data={sliderData}
 *   arrowTheme="primary-1"
 *   settings={{ arrows: true, dots: true }}
 * />
 */
const Slider = ({
  lang = "en",
  data,
  posParams = "gb",
  cId,
  settings: parentSettings = {},
  arrowTheme = DEFAULT_ARROW_THEME,
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
      arrowTheme={arrowTheme}
    />
  );
};

export default Slider;
export { DEFAULT_SLIDER_SETTINGS } from "./utils/sliderSettings";
export { default as SliderArrowNav } from "./components/SliderArrow";
export {
  ARROW_THEMES,
  DEFAULT_ARROW_THEME,
  resolveArrowTheme,
} from "./utils/arrowThemes";
