import PageContentContainer from "@/components/layout/PageContentContainer";
import { getThemeColorCss } from "@/styles/themeColors";
import {
  DEFAULT_BANNER_WITH_CTA_STYLE,
  SECTION_PADDING_CLASS,
} from "../utils/style";

export default function BannerWithCtaContainer({
  lang,
  dir,
  background = DEFAULT_BANNER_WITH_CTA_STYLE.sectionBg,
  showBackground = DEFAULT_BANNER_WITH_CTA_STYLE.showSectionBg,
  padding = DEFAULT_BANNER_WITH_CTA_STYLE.sectionPadding,
  children,
}) {
  const paddingClass =
    SECTION_PADDING_CLASS[padding] ?? SECTION_PADDING_CLASS.default;

  return (
    <div
      className="w-full"
      lang={lang}
      dir={dir || (lang === "ar" ? "rtl" : "ltr")}
      style={
        showBackground
          ? { backgroundColor: getThemeColorCss(background, "100") }
          : undefined
      }
    >
      <PageContentContainer as="section" className={paddingClass}>
        {children}
      </PageContentContainer>
    </div>
  );
}
