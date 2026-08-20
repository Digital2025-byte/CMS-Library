import { typography } from "@/styles/typography";
import PageContentContainer from "@/components/layout/PageContentContainer";
import { getThemeColorCss } from "@/styles/themeColors";
import {
  DEFAULT_HEADER_WITH_THREE_IMAGE_STYLE,
  TITLE_ALIGN_CLASS,
  TITLE_ITEMS_CLASS,
  TITLE_JUSTIFY_CLASS,
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

  const alignKey = style.titleAlign in TITLE_ALIGN_CLASS ? style.titleAlign : "left";
  const isCenter = alignKey === "center";
  const alignClass = TITLE_ALIGN_CLASS[alignKey];
  const justifyClass = TITLE_JUSTIFY_CLASS[alignKey];
  const itemsClass = TITLE_ITEMS_CLASS[alignKey];

  return (
    <PageContentContainer
      className={`relative z-10 flex w-full ${justifyClass}`}
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <div className={`flex max-w-xl flex-col py-6 sm:py-8 ${alignClass} ${itemsClass}`}>
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
            className={`${typography.sectionDescription} mt-2 max-w-sm leading-relaxed ${
              isCenter ? "text-center" : alignKey === "right" ? "text-end" : "text-justify"
            }`}
            style={{ color: getThemeColorCss(style.descriptionColor, "50") }}
          >
            {description}
          </p>
        ) : null}
      </div>
    </PageContentContainer>
  );
}
