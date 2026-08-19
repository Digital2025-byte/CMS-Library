import { typography } from "@/styles/typography";
import { getThemeColorCss } from "@/styles/themeColors";
import {
  DEFAULT_TABBED_CARDS_STYLE,
  TITLE_ALIGN_CLASS,
} from "../utils/style";

export default function TabbedCardsHeader({
  title,
  subtitle,
  style = DEFAULT_TABBED_CARDS_STYLE,
}) {
  const showHeading = style.showTitle && title;
  const showCopy = style.showDescription && subtitle;

  if (!showHeading && !showCopy) {
    return null;
  }

  const alignClass =
    TITLE_ALIGN_CLASS[style.titleAlign] ?? TITLE_ALIGN_CLASS.center;

  return (
    <div className={`mb-5 flex flex-col justify-center ${alignClass}`}>
      <div className="max-w-2xl">
        {showHeading ? (
          <h2
            className={`${typography.sectionTitle} font-semibold wrap-break-word`}
            style={{ color: getThemeColorCss(style.titleColor, "primary-1") }}
          >
            {title}
          </h2>
        ) : null}
        {showCopy ? (
          <p
            className={`${typography.sectionDescription} mt-2 wrap-break-word`}
            style={{
              color: getThemeColorCss(style.descriptionColor, "primary-1"),
            }}
          >
            {subtitle}
          </p>
        ) : null}
      </div>
    </div>
  );
}
