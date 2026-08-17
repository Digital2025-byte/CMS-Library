import { typography } from "@/styles/typography";
import { getThemeColorCss } from "@/styles/themeColors";
import { TITLE_ALIGN_CLASS } from "../utils/style";

export default function CarouselHeader({
  title,
  description,
  align = "left",
  titleColor = "primary-1",
  descriptionColor = "700",
  showTitle = true,
  showDescription = true,
}) {
  const showHeading = showTitle && title;
  const showBody = showDescription && description;

  if (!showHeading && !showBody) {
    return null;
  }

  const alignClass = TITLE_ALIGN_CLASS[align] ?? TITLE_ALIGN_CLASS.left;

  return (
    <div className={`mb-5 sm:mb-6 md:mb-8 ${alignClass}`}>
      {showHeading ? (
        <h2
          className={`${typography.sectionTitle} font-semibold`}
          style={{ color: getThemeColorCss(titleColor, "primary-1") }}
        >
          {title}
        </h2>
      ) : null}
      {showBody ? (
        <p
          className={`${typography.sectionDescription} mt-2 max-w-4xl ${
            align === "center" ? "mx-auto" : ""
          }`}
          style={{ color: getThemeColorCss(descriptionColor, "700") }}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
