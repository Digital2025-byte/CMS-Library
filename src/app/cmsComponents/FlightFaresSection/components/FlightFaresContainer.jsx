import PageContentContainer from "@/components/layout/PageContentContainer";
import { getThemeColorCss } from "@/styles/themeColors";
import {
  DEFAULT_FLIGHT_FARES_STYLE,
  SECTION_PADDING_CLASS,
} from "../utils/style";

export default function FlightFaresContainer({
  lang,
  dir,
  background = DEFAULT_FLIGHT_FARES_STYLE.sectionBg,
  showBackground = DEFAULT_FLIGHT_FARES_STYLE.showSectionBg,
  padding = DEFAULT_FLIGHT_FARES_STYLE.sectionPadding,
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
      <PageContentContainer as="section" className={`overflow-hidden ${paddingClass}`}>
        {children}
      </PageContentContainer>
    </div>
  );
}
