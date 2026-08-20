import { typography } from "@/styles/typography";
import { getThemeColorCss } from "@/styles/themeColors";
import { getFontWeightValue } from "@/styles/fontWeight";
import { TITLE_ALIGN_CLASS } from "../utils/style";

export default function CarouselHeader({ title, description, style }) {
  const showHeading = style.showTitle && title;
  const showBody = style.showDescription && description;

  if (!showHeading && !showBody) {
    return null;
  }

  const alignClass =
    TITLE_ALIGN_CLASS[style.titleAlign] ?? TITLE_ALIGN_CLASS.left;

  return (
    <div className={`mb-5 sm:mb-6 md:mb-8 ${alignClass}`}>
      {showHeading ? (
        <h2
          className={`${typography.sectionTitle} font-semibold`}
          style={{ color: getThemeColorCss(style.titleColor, "primary-1"), fontWeight: getFontWeightValue(style.titleFontWeight) }}
        >
          {title}
        </h2>
      ) : null}
      {showBody ? (
        <p
          className={`${typography.sectionDescription} mt-2 max-w-4xl ${
            style.titleAlign === "center" ? "mx-auto" : ""
          }`}
          style={{ color: getThemeColorCss(style.descriptionColor, "700"), fontWeight: getFontWeightValue(style.descriptionFontWeight) }}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
