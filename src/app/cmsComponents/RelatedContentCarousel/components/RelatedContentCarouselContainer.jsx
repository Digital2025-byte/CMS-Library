import PageContentContainer from "@/components/layout/PageContentContainer";
import { getThemeColorCss } from "@/styles/themeColors";
import { DEFAULT_RELATED_CONTENT_STYLE, SECTION_PADDING_CLASS } from "../utils/style";

export default function RelatedContentCarouselContainer({
  lang,
  dir,
  background = DEFAULT_RELATED_CONTENT_STYLE.sectionBg,
  padding = DEFAULT_RELATED_CONTENT_STYLE.sectionPadding,
  children,
}) {
  const paddingClass =
    SECTION_PADDING_CLASS[padding] ?? SECTION_PADDING_CLASS.default;

  return (
    <div
      className="w-full"
      lang={lang}
      dir={dir || (lang === "ar" ? "rtl" : "ltr")}
      style={{ backgroundColor: getThemeColorCss(background, "50") }}
    >
      <PageContentContainer as="section" className={paddingClass}>
        {children}
      </PageContentContainer>
    </div>
  );
}
