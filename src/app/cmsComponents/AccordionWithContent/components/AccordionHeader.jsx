import { typography } from "@/styles/typography";
import { getThemeColorCss } from "@/styles/themeColors";
import { getFontWeightValue } from "@/styles/fontWeight";
import { TITLE_ALIGN_CLASS } from "../utils/style";

export default function AccordionHeader({
  title,
  description,
  align = "left",
  titleColor = "primary-1",
  descriptionColor = "700",
  titleFontWeight = "semibold",
  descriptionFontWeight = "normal",
  showDescription = true,
}) {
  if (!title && !(showDescription && description)) {
    return null;
  }

  const alignClass = TITLE_ALIGN_CLASS[align] ?? TITLE_ALIGN_CLASS.left;

  return (
    <div className={`mb-5 sm:mb-7 lg:mb-8 ${alignClass}`}>
      {title ? (
        <h2
          className={`${typography.sectionTitle} font-semibold leading-snug`}
          style={{
            color: getThemeColorCss(titleColor, "primary-1"),
            fontWeight: getFontWeightValue(titleFontWeight),
          }}
        >
          {title}
        </h2>
      ) : null}
      {showDescription && description ? (
        <p
          className={`${typography.sectionDescription} mt-2 leading-relaxed ${
            align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
          style={{
            color: getThemeColorCss(descriptionColor, "700"),
            fontWeight: getFontWeightValue(descriptionFontWeight),
          }}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
