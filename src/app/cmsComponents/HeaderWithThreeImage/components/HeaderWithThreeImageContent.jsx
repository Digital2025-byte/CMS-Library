import { typography } from "@/styles/typography";
import PageContentContainer from "@/components/layout/PageContentContainer";
import { getThemeColorCss } from "@/styles/themeColors";
import {
  DEFAULT_HEADER_WITH_THREE_IMAGE_STYLE,
  TITLE_ALIGN_CLASS,
} from "../utils/style";

export default function HeaderWithThreeImageContent({
  lang = "en",
  title,
  description,
  showTitle = DEFAULT_HEADER_WITH_THREE_IMAGE_STYLE.showTitle,
  showDescription = DEFAULT_HEADER_WITH_THREE_IMAGE_STYLE.showDescription,
  titleAlign = DEFAULT_HEADER_WITH_THREE_IMAGE_STYLE.titleAlign,
  titleColor = DEFAULT_HEADER_WITH_THREE_IMAGE_STYLE.titleColor,
  descriptionColor = DEFAULT_HEADER_WITH_THREE_IMAGE_STYLE.descriptionColor,
}) {
  const showHeading = showTitle && title;
  const showCopy = showDescription && description;

  if (!showHeading && !showCopy) {
    return null;
  }

  const alignClass = TITLE_ALIGN_CLASS[titleAlign] ?? TITLE_ALIGN_CLASS.left;

  return (
    <PageContentContainer
      className="relative z-10 flex items-start justify-start lg:items-center"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <div className={`py-1 ${alignClass}`}>
        {showHeading ? (
          <h1
            className={`${typography.pageTitle} mt-2 font-semibold`}
            style={{ color: getThemeColorCss(titleColor, "50") }}
          >
            {title}
          </h1>
        ) : null}
        {showCopy ? (
          <p
            className={`${typography.sectionDescription} mt-2 max-w-sm text-justify leading-relaxed`}
            style={{ color: getThemeColorCss(descriptionColor, "50") }}
          >
            {description}
          </p>
        ) : null}
      </div>
    </PageContentContainer>
  );
}
