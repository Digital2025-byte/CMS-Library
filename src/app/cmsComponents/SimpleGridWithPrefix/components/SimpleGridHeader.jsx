import { typography } from "@/styles/typography";
import { getThemeColorCss } from "@/styles/themeColors";
import {
  DEFAULT_SIMPLE_GRID_STYLE,
  TITLE_ALIGN_CLASS,
} from "../utils/style";

export default function SimpleGridHeader({
  title,
  description,
  showTitle = DEFAULT_SIMPLE_GRID_STYLE.showTitle,
  showDescription = DEFAULT_SIMPLE_GRID_STYLE.showDescription,
  titleAlign = DEFAULT_SIMPLE_GRID_STYLE.titleAlign,
  titleColor = DEFAULT_SIMPLE_GRID_STYLE.titleColor,
  descriptionColor = DEFAULT_SIMPLE_GRID_STYLE.descriptionColor,
}) {
  const showHeading = showTitle && title;
  const showCopy = showDescription && description;

  if (!showHeading && !showCopy) {
    return null;
  }

  const alignClass = TITLE_ALIGN_CLASS[titleAlign] ?? TITLE_ALIGN_CLASS.left;

  return (
    <div className={`mb-4 ${alignClass}`}>
      {showHeading ? (
        <h2
          className={`${typography.sectionTitle} mb-2 font-bold`}
          style={{ color: getThemeColorCss(titleColor, "primary-1") }}
        >
          {title}
        </h2>
      ) : null}
      {showCopy ? (
        <p
          className={`${typography.sectionDescription} px-1`}
          style={{ color: getThemeColorCss(descriptionColor, "primary-1") }}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
