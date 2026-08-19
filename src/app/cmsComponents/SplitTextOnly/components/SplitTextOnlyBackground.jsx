import { getThemeColorCss } from "@/styles/themeColors";
import { DEFAULT_SPLIT_TEXT_ONLY_STYLE } from "../utils/style";

const MOBILE_GRADIENT =
  "linear-gradient(180deg, rgba(5, 78, 114, 0.15) 0%, rgba(5, 78, 114, 0.55) 55%, rgba(5, 78, 114, 0.85) 100%)";

const DESKTOP_GRADIENT =
  "linear-gradient(90deg, rgba(5, 78, 114, 0.88) 0%, rgba(5, 78, 114, 0.55) 40%, rgba(5, 78, 114, 0.15) 70%, rgba(5, 78, 114, 0) 100%)";

export default function SplitTextOnlyBackground({
  imageUrl,
  mobileGradient = true,
  desktopGradient = true,
  style = DEFAULT_SPLIT_TEXT_ONLY_STYLE,
  className = "",
  children,
}) {
  const fallbackBg = getThemeColorCss(style.sectionBg, "main");

  return (
    <div
      className={`relative w-full overflow-hidden bg-cover bg-center bg-no-repeat ${className}`}
      style={{
        backgroundImage: imageUrl ? `url(${imageUrl})` : undefined,
        backgroundColor: imageUrl ? undefined : fallbackBg,
      }}
    >
      {mobileGradient ? (
        <div
          className="pointer-events-none absolute inset-0 lg:hidden"
          style={{ backgroundImage: MOBILE_GRADIENT }}
          aria-hidden
        />
      ) : null}

      {desktopGradient ? (
        <div
          className="pointer-events-none absolute inset-0 hidden lg:block"
          style={{ backgroundImage: DESKTOP_GRADIENT }}
          aria-hidden
        />
      ) : null}

      <div className="relative z-10">{children}</div>
    </div>
  );
}
