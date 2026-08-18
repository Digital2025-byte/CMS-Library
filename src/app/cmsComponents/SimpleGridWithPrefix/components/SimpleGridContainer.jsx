import PageContentContainer from "@/components/layout/PageContentContainer";
import { getThemeColorCss } from "@/styles/themeColors";
import {
  DEFAULT_SIMPLE_GRID_STYLE,
  SECTION_PADDING_CLASS,
} from "../utils/style";

export default function SimpleGridContainer({
  lang,
  dir,
  background = DEFAULT_SIMPLE_GRID_STYLE.sectionBg,
  showBackground = DEFAULT_SIMPLE_GRID_STYLE.showSectionBg,
  padding = DEFAULT_SIMPLE_GRID_STYLE.sectionPadding,
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
          ? { backgroundColor: getThemeColorCss(background, "surface-1") }
          : undefined
      }
    >
      <PageContentContainer as="section" className={paddingClass}>
        {children}
      </PageContentContainer>
    </div>
  );
}
