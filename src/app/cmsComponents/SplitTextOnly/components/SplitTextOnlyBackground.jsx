import { getThemeColorCss } from "@/styles/themeColors";
import {
  DEFAULT_SPLIT_TEXT_ONLY_STYLE,
  IMAGE_FIT_CSS,
  IMAGE_POSITION_CSS,
} from "../utils/style";

function buildMobileGradient(overlayCss) {
  return `linear-gradient(180deg, color-mix(in srgb, ${overlayCss} 15%, transparent) 0%, color-mix(in srgb, ${overlayCss} 55%, transparent) 55%, color-mix(in srgb, ${overlayCss} 85%, transparent) 100%)`;
}

function buildDesktopGradient(overlayCss) {
  return `linear-gradient(90deg, color-mix(in srgb, ${overlayCss} 88%, transparent) 0%, color-mix(in srgb, ${overlayCss} 55%, transparent) 40%, color-mix(in srgb, ${overlayCss} 15%, transparent) 70%, transparent 100%)`;
}

export default function SplitTextOnlyBackground({
  imageUrl,
  mobileGradient = true,
  desktopGradient = true,
  style = DEFAULT_SPLIT_TEXT_ONLY_STYLE,
  className = "",
  children,
}) {
  const fallbackBg = getThemeColorCss(style.sectionBg, "main");
  const overlayCss = getThemeColorCss(style.overlayColor, "primary-1");
  const backgroundSize =
    IMAGE_FIT_CSS[style.imageFit] ?? IMAGE_FIT_CSS.cover;
  const backgroundPosition =
    IMAGE_POSITION_CSS[style.imagePosition] ?? IMAGE_POSITION_CSS.center;

  return (
    <div
      className={`relative w-full overflow-hidden bg-no-repeat ${className}`}
      style={{
        backgroundImage: imageUrl ? `url(${imageUrl})` : undefined,
        backgroundColor: imageUrl
          ? undefined
          : style.showSectionBg
            ? fallbackBg
            : undefined,
        backgroundSize: imageUrl ? backgroundSize : undefined,
        backgroundPosition: imageUrl ? backgroundPosition : undefined,
      }}
    >
      {mobileGradient ? (
        <div
          className="pointer-events-none absolute inset-0 lg:hidden"
          style={{ backgroundImage: buildMobileGradient(overlayCss) }}
          aria-hidden
        />
      ) : null}

      {desktopGradient ? (
        <div
          className="pointer-events-none absolute inset-0 hidden lg:block"
          style={{ backgroundImage: buildDesktopGradient(overlayCss) }}
          aria-hidden
        />
      ) : null}

      <div className="relative z-10">{children}</div>
    </div>
  );
}
