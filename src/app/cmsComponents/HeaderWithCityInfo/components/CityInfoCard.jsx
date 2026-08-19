import { CalendarCheck, Clock, CloudSun, Timer } from "@phosphor-icons/react";
import { getThemeColorCss } from "@/styles/themeColors";
import { typography } from "@/styles/typography";
import {
  CARD_RADIUS_CLASS,
  DEFAULT_HEADER_WITH_CITY_INFO_STYLE,
} from "../utils/style";

function Tile({ icon: Icon, title, value, labelCss, valueCss }) {
  return (
    <div className="rounded-xl border border-white/20 bg-black/20 p-3.5 sm:p-4">
      <Icon
        size={22}
        weight="regular"
        style={{ color: valueCss }}
        aria-hidden
      />
      <p
        className={`${typography.caption} mt-2.5 font-medium leading-none`}
        style={{
          color: `color-mix(in srgb, ${labelCss} 75%, transparent)`,
        }}
      >
        {title}
      </p>
      <p
        className={`${typography.body} mt-1.5 font-medium leading-snug`}
        style={{ color: valueCss }}
      >
        {value}
      </p>
    </div>
  );
}

/**
 * Frosted glass city card — needs a visible photo behind it (not a solid overlay)
 * for backdrop-blur to read correctly.
 */
export default function CityInfoCard({
  lang = "en",
  content,
  style = DEFAULT_HEADER_WITH_CITY_INFO_STYLE,
  className = "",
}) {
  const isRtl = lang === "ar";
  const labels = content.labels || {};
  const radiusClass =
    CARD_RADIUS_CLASS[style.cardRadius] ?? CARD_RADIUS_CLASS.lg;
  const headingCss = getThemeColorCss(style.cardHeadingColor, "white");
  const bodyCss = getThemeColorCss(style.cardBodyColor, "white");
  const tileLabelCss = getThemeColorCss(style.tileLabelColor, "white");
  const tileValueCss = getThemeColorCss(style.tileValueColor, "white");
  const accentCss = getThemeColorCss(style.nextFlightColor, "primary-100");
  const showHeader =
    (style.showCardHeading && content.weatherTitle) ||
    (style.showCardDescription && content.description);
  const showFooter =
    style.showNextFlight && (labels.nextFlight || content.nextFlight);

  if (!showHeader && !style.showTiles && !showFooter) {
    return null;
  }

  return (
    <div
      dir={isRtl ? "rtl" : "ltr"}
      className={[
        `relative w-full max-w-[500px] ${radiusClass} p-5 sm:p-6`,
        "border border-white/25",
        "shadow-[0_8px_40px_rgba(0,0,0,0.35)]",
        "backdrop-blur-xs",
        className,
      ].join(" ")}
    >
      {showHeader ? (
        <div className="mb-5">
          {style.showCardHeading && content.weatherTitle ? (
            <h3
              className={`${typography.itemTitle} font-normal leading-none`}
              style={{ color: headingCss }}
            >
              {content.weatherTitle}
            </h3>
          ) : null}
          {style.showCardDescription && content.description ? (
            <p
              className={`${typography.caption} mt-1.5 leading-snug`}
              style={{
                color: `color-mix(in srgb, ${bodyCss} 65%, transparent)`,
              }}
            >
              {content.description}
            </p>
          ) : null}
        </div>
      ) : null}

      {style.showTiles ? (
        <div className="grid grid-cols-2 gap-3">
          <Tile
            icon={CloudSun}
            title={labels.weather}
            value={content.weather || "N/A"}
            labelCss={tileLabelCss}
            valueCss={tileValueCss}
          />
          <Tile
            icon={Clock}
            title={labels.localTime}
            value={content.localTime || "N/A"}
            labelCss={tileLabelCss}
            valueCss={tileValueCss}
          />
          <Tile
            icon={Timer}
            title={labels.flightDuration}
            value={content.duration || "N/A"}
            labelCss={tileLabelCss}
            valueCss={tileValueCss}
          />
          <Tile
            icon={CalendarCheck}
            title={labels.flightsPerWeek}
            value={content.numberOfFlightPerWeek || "N/A"}
            labelCss={tileLabelCss}
            valueCss={tileValueCss}
          />
        </div>
      ) : null}

      {showFooter ? (
        <>
          <div className="mt-5 h-px w-full bg-white/20" aria-hidden />
          <div className="mt-4 flex items-center justify-between gap-3">
            <span
              className={typography.body}
              style={{
                color: `color-mix(in srgb, ${bodyCss} 70%, transparent)`,
              }}
            >
              {labels.nextFlight}
            </span>
            <span
              className={`${typography.body} font-medium`}
              style={{ color: accentCss }}
            >
              {content.nextFlight || "N/A"}
            </span>
          </div>
        </>
      ) : null}
    </div>
  );
}
