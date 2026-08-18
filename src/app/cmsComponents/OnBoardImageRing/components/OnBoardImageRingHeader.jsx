import { typography } from "@/styles/typography";
import { getThemeColorCss } from "@/styles/themeColors";
import PageContentContainer from "@/components/layout/PageContentContainer";
import {
  DEFAULT_ON_BOARD_IMAGE_RING_STYLE,
  SECTION_PADDING_CLASS,
  TITLE_ALIGN_CLASS,
} from "../utils/style";

export default function OnBoardImageRingHeader({
  title,
  description,
  showTitle = DEFAULT_ON_BOARD_IMAGE_RING_STYLE.showTitle,
  showDescription = DEFAULT_ON_BOARD_IMAGE_RING_STYLE.showDescription,
  titleAlign = DEFAULT_ON_BOARD_IMAGE_RING_STYLE.titleAlign,
  titleColor = DEFAULT_ON_BOARD_IMAGE_RING_STYLE.titleColor,
  descriptionColor = DEFAULT_ON_BOARD_IMAGE_RING_STYLE.descriptionColor,
  sectionPadding = DEFAULT_ON_BOARD_IMAGE_RING_STYLE.sectionPadding,
}) {
  const showHeading = showTitle && title;
  const showBody = showDescription && description;

  if (!showHeading && !showBody) return null;

  const paddingClass =
    SECTION_PADDING_CLASS[sectionPadding] ?? SECTION_PADDING_CLASS.default;
  const alignClass =
    TITLE_ALIGN_CLASS[titleAlign] ?? TITLE_ALIGN_CLASS.left;
  const isCenter = titleAlign === "center";

  return (
    <PageContentContainer className={paddingClass}>
      <div
        className={`flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-12 ${alignClass}`}
      >
        {showHeading ? (
          <h2
            className={`${typography.sectionTitle} shrink-0 font-semibold`}
            style={{ color: getThemeColorCss(titleColor, "50") }}
          >
            {title}
          </h2>
        ) : null}
        {showBody ? (
          <p
            className={`${typography.sectionDescription} max-w-2xl ${
              isCenter ? "md:text-center" : "md:text-start"
            }`}
            style={{
              color: `color-mix(in srgb, ${getThemeColorCss(descriptionColor, "50")} 90%, transparent)`,
            }}
          >
            {description}
          </p>
        ) : null}
      </div>
    </PageContentContainer>
  );
}
