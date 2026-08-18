import { typography } from "@/styles/typography";
import { getThemeColorCss } from "@/styles/themeColors";
import {
  DEFAULT_FLIGHT_FARES_STYLE,
  TITLE_ALIGN_CLASS,
} from "../utils/style";

export default function FlightFaresHeader({
  title,
  showTitle = DEFAULT_FLIGHT_FARES_STYLE.showTitle,
  titleAlign = DEFAULT_FLIGHT_FARES_STYLE.titleAlign,
  titleColor = DEFAULT_FLIGHT_FARES_STYLE.titleColor,
}) {
  if (!showTitle || !title) {
    return null;
  }

  const alignClass = TITLE_ALIGN_CLASS[titleAlign] ?? TITLE_ALIGN_CLASS.left;

  return (
    <div
      className={`mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between ${alignClass}`}
    >
      <h2
        className={`${typography.sectionTitle} font-semibold`}
        style={{ color: getThemeColorCss(titleColor, "primary-1") }}
      >
        {title}
      </h2>
    </div>
  );
}
