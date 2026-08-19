import { typography } from "@/styles/typography";
import { getThemeColorCss } from "@/styles/themeColors";
import PageContentContainer from "@/components/layout/PageContentContainer";
import {
  DEFAULT_THREE_D_IMAGE_RING_STYLE,
  SECTION_PADDING_CLASS,
  TITLE_ALIGN_CLASS,
} from "./utils/style";

export default function TitleDescription({
  title,
  description,
  style = DEFAULT_THREE_D_IMAGE_RING_STYLE,
}) {
  const showHeading = style.showTitle && title;
  const showBody = style.showDescription && description;

  if (!showHeading && !showBody) {
    return null;
  }

  const paddingClass =
    SECTION_PADDING_CLASS[style.sectionPadding] ??
    SECTION_PADDING_CLASS.default;
  const alignClass =
    TITLE_ALIGN_CLASS[style.titleAlign] ?? TITLE_ALIGN_CLASS.left;
  const isCenter = style.titleAlign === "center";

  return (
    <PageContentContainer className={paddingClass}>
      <div
        className={`flex flex-col gap-4 md:flex-row md:items-center md:justify-evenly md:gap-8 ${alignClass}`}
      >
        {showHeading ? (
          <h2
            className={`${typography.sectionTitle} shrink-0 font-semibold md:whitespace-nowrap`}
            style={{ color: getThemeColorCss(style.titleColor, "white") }}
          >
            {title}
          </h2>
        ) : null}
        {showBody ? (
          <p
            className={`${typography.sectionDescription} max-w-3xl ${
              isCenter ? "md:text-center" : "md:text-start"
            }`}
            style={{
              color: `color-mix(in srgb, ${getThemeColorCss(style.descriptionColor, "white")} 90%, transparent)`,
            }}
          >
            {description}
          </p>
        ) : null}
      </div>
    </PageContentContainer>
  );
}
