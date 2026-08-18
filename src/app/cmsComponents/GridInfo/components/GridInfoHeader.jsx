import { typography } from "@/styles/typography";
import { getThemeColorCss } from "@/styles/themeColors";
import {
  DEFAULT_GRID_INFO_STYLE,
  TITLE_ALIGN_CLASS,
} from "../utils/style";

export default function GridInfoHeader({
  title,
  description,
  showTitle = DEFAULT_GRID_INFO_STYLE.showTitle,
  showDescription = DEFAULT_GRID_INFO_STYLE.showDescription,
  titleAlign = DEFAULT_GRID_INFO_STYLE.titleAlign,
  titleColor = DEFAULT_GRID_INFO_STYLE.titleColor,
  descriptionColor = DEFAULT_GRID_INFO_STYLE.descriptionColor,
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
          className={`${typography.sectionTitle} mb-4 font-bold`}
          style={{ color: getThemeColorCss(titleColor, "primary-1") }}
        >
          {title}
        </h2>
      ) : null}
      {showCopy ? (
        <p
          className={typography.sectionDescription}
          style={{ color: getThemeColorCss(descriptionColor, "primary-1") }}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
