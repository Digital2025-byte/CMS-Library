import PageContentContainer from "@/components/layout/PageContentContainer";
import { getThemeColorCss } from "@/styles/themeColors";
import {
  DEFAULT_PARAGRAPH_STYLE,
  SECTION_PADDING_CLASS,
} from "../utils/style";
import { isUsableImageSrc, toCssUrl } from "../utils/helpers";

export default function ParagraphContainer({
  lang,
  dir,
  style = DEFAULT_PARAGRAPH_STYLE,
  children,
  className = "",
}) {
  const paddingClass =
    SECTION_PADDING_CLASS[style.sectionPadding] ??
    SECTION_PADDING_CLASS.default;

  let backgroundStyle;

  if (style.showSectionBg) {
    if (
      style.sectionBgType === "image" &&
      isUsableImageSrc(style.sectionBgImage)
    ) {
      backgroundStyle = {
        backgroundImage: `url(${toCssUrl(style.sectionBgImage)})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      };
    } else {
      backgroundStyle = {
        backgroundColor: getThemeColorCss(style.sectionBg, "background"),
      };
    }
  }

  return (
    <div
      className={`w-full ${className}`.trim()}
      lang={lang}
      dir={dir || (lang === "ar" ? "rtl" : "ltr")}
      style={backgroundStyle}
    >
      <PageContentContainer as="section" className={paddingClass}>
        {children}
      </PageContentContainer>
    </div>
  );
}
