import PageContentContainer from "@/components/layout/PageContentContainer";
import { getThemeColorCss } from "@/styles/themeColors";
import {
  DEFAULT_GRID_INFO_STYLE,
  SECTION_PADDING_CLASS,
} from "../utils/style";

export default function GridInfoContainer({
  lang,
  dir,
  background = DEFAULT_GRID_INFO_STYLE.sectionBg,
  showBackground = DEFAULT_GRID_INFO_STYLE.showSectionBg,
  padding = DEFAULT_GRID_INFO_STYLE.sectionPadding,
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
          ? { backgroundColor: getThemeColorCss(background, "surface-2") }
          : undefined
      }
    >
      <PageContentContainer as="section" className={paddingClass}>
        {children}
      </PageContentContainer>
    </div>
  );
}
