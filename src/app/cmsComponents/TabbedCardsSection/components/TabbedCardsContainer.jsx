import PageContentContainer from "@/components/layout/PageContentContainer";
import { getThemeColorCss } from "@/styles/themeColors";
import {
  DEFAULT_TABBED_CARDS_STYLE,
  SECTION_PADDING_CLASS,
} from "../utils/style";

export default function TabbedCardsContainer({
  lang,
  dir,
  background = DEFAULT_TABBED_CARDS_STYLE.sectionBg,
  showBackground = DEFAULT_TABBED_CARDS_STYLE.showSectionBg,
  padding = DEFAULT_TABBED_CARDS_STYLE.sectionPadding,
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
          ? { backgroundColor: getThemeColorCss(background, "white") }
          : undefined
      }
    >
      <PageContentContainer as="section" className={paddingClass}>
        {children}
      </PageContentContainer>
    </div>
  );
}
