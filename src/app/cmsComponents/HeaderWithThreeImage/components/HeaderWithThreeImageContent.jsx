import { typography } from "@/styles/typography";
import PageContentContainer from "@/components/layout/PageContentContainer";
import { getThemeColorCss } from "@/styles/themeColors";
import {
  DEFAULT_HEADER_WITH_THREE_IMAGE_STYLE,
  TITLE_ALIGN_CLASS,
} from "../utils/style";

export default function HeaderWithThreeImageContent({
  lang = "en",
  content,
  style = DEFAULT_HEADER_WITH_THREE_IMAGE_STYLE,
}) {
  const title = content.title;
  const description = content.description;
  const showHeading = style.showTitle && title;
  const showCopy = style.showDescription && description;

  if (!showHeading && !showCopy) {
    return null;
  }

  const alignClass =
    TITLE_ALIGN_CLASS[style.titleAlign] ?? TITLE_ALIGN_CLASS.left;

  return (
    <PageContentContainer
      className="relative z-10 flex items-start justify-start lg:items-center"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <div className={`py-1 ${alignClass}`}>
        {showHeading ? (
          <h1
            className={`${typography.pageTitle} mt-2 font-semibold`}
            style={{ color: getThemeColorCss(style.titleColor, "50") }}
          >
            {title}
          </h1>
        ) : null}
        {showCopy ? (
          <p
            className={`${typography.sectionDescription} mt-2 max-w-sm text-justify leading-relaxed`}
            style={{ color: getThemeColorCss(style.descriptionColor, "50") }}
          >
            {description}
          </p>
        ) : null}
      </div>
    </PageContentContainer>
  );
}
