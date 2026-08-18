import { typography } from "@/styles/typography";
import { getThemeColorCss } from "@/styles/themeColors";
import {
  DEFAULT_DESTINATIONS_CITIES_STYLE,
  TITLE_ALIGN_CLASS,
} from "../utils/style";

export default function DestinationsCitiesIntro({
  title = "",
  description = "",
  showTitle = DEFAULT_DESTINATIONS_CITIES_STYLE.showTitle,
  showDescription = DEFAULT_DESTINATIONS_CITIES_STYLE.showDescription,
  align = DEFAULT_DESTINATIONS_CITIES_STYLE.titleAlign,
  titleColor = DEFAULT_DESTINATIONS_CITIES_STYLE.titleColor,
  descriptionColor = DEFAULT_DESTINATIONS_CITIES_STYLE.descriptionColor,
}) {
  const showHeading = showTitle && title;
  const showBody = showDescription && description;

  if (!showHeading && !showBody) {
    return null;
  }

  const alignClass = TITLE_ALIGN_CLASS[align] ?? TITLE_ALIGN_CLASS.left;

  return (
    <div
      className={`w-full max-w-xl md:max-w-2xl lg:max-w-none lg:pr-4 xl:w-3/4 xl:pr-0 ${alignClass}`}
    >
      {showHeading ? (
        <h2
          className={`${typography.sectionTitle} mt-4 font-semibold whitespace-pre-line`}
          style={{ color: getThemeColorCss(titleColor, "50") }}
        >
          {title}
        </h2>
      ) : null}
      {showBody ? (
        <p
          className={`${typography.sectionDescription} mt-6`}
          style={{
            color: `color-mix(in srgb, ${getThemeColorCss(descriptionColor, "50")} 80%, transparent)`,
          }}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
