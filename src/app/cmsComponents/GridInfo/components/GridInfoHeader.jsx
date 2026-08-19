import { typography } from "@/styles/typography";
import { getThemeColorCss } from "@/styles/themeColors";
import {
  DEFAULT_GRID_INFO_STYLE,
  TITLE_ALIGN_CLASS,
} from "../utils/style";

export default function GridInfoHeader({
  title,
  description,
  style = DEFAULT_GRID_INFO_STYLE,
}) {
  const showHeading = style.showTitle && title;
  const showCopy = style.showDescription && description;

  if (!showHeading && !showCopy) {
    return null;
  }

  const alignClass =
    TITLE_ALIGN_CLASS[style.titleAlign] ?? TITLE_ALIGN_CLASS.left;

  return (
    <div className={`mb-4 ${alignClass}`}>
      {showHeading ? (
        <h2
          className={`${typography.sectionTitle} mb-4 font-bold`}
          style={{ color: getThemeColorCss(style.titleColor, "primary-1") }}
        >
          {title}
        </h2>
      ) : null}
      {showCopy ? (
        <p
          className={typography.sectionDescription}
          style={{
            color: getThemeColorCss(style.descriptionColor, "primary-1"),
          }}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
