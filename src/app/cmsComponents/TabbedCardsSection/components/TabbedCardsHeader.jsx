import { typography } from "@/styles/typography";
import { getThemeColorCss } from "@/styles/themeColors";
import {
  DEFAULT_TABBED_CARDS_STYLE,
  TITLE_ALIGN_CLASS,
} from "../utils/style";

export default function TabbedCardsHeader({
  title,
  subtitle,
  showTitle = DEFAULT_TABBED_CARDS_STYLE.showTitle,
  showDescription = DEFAULT_TABBED_CARDS_STYLE.showDescription,
  titleAlign = DEFAULT_TABBED_CARDS_STYLE.titleAlign,
  titleColor = DEFAULT_TABBED_CARDS_STYLE.titleColor,
  descriptionColor = DEFAULT_TABBED_CARDS_STYLE.descriptionColor,
}) {
  const showHeading = showTitle && title;
  const showCopy = showDescription && subtitle;

  if (!showHeading && !showCopy) {
    return null;
  }

  const alignClass = TITLE_ALIGN_CLASS[titleAlign] ?? TITLE_ALIGN_CLASS.center;

  return (
    <div className={`mb-5 flex flex-col justify-center ${alignClass}`}>
      <div className="max-w-2xl">
        {showHeading ? (
          <h2
            className={`${typography.sectionTitle} font-semibold wrap-break-word`}
            style={{ color: getThemeColorCss(titleColor, "primary-1") }}
          >
            {title}
          </h2>
        ) : null}
        {showCopy ? (
          <p
            className={`${typography.sectionDescription} mt-2 wrap-break-word`}
            style={{ color: getThemeColorCss(descriptionColor, "primary-1") }}
          >
            {subtitle}
          </p>
        ) : null}
      </div>
    </div>
  );
}
