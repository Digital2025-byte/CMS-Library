import { typography } from "@/styles/typography";
import { getThemeColorCss } from "@/styles/themeColors";
import {
  DEFAULT_TEXT_WITH_BLOB_STYLE,
  TITLE_ALIGN_CLASS,
} from "../utils/style";

export default function TextBlobContent({
  title,
  description,
  style = DEFAULT_TEXT_WITH_BLOB_STYLE,
}) {
  const showTitle = style.showTitle && title;
  const showDescription = style.showDescription && description;
  const alignClass =
    TITLE_ALIGN_CLASS[style.titleAlign] ?? TITLE_ALIGN_CLASS.left;

  if (!showTitle && !showDescription) {
    return null;
  }

  return (
    <div className={`lg:max-w-lg xl:max-w-xl ${alignClass}`}>
      {showTitle ? (
        <h2
          className={`${typography.sectionTitle} font-semibold leading-snug wrap-break-word`}
          style={{ color: getThemeColorCss(style.titleColor, "primary-1") }}
        >
          {title}
        </h2>
      ) : null}
      {showDescription ? (
        <p
          className={`${typography.sectionDescription} mt-4 leading-relaxed wrap-break-word`}
          style={{ color: getThemeColorCss(style.descriptionColor, "700") }}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
