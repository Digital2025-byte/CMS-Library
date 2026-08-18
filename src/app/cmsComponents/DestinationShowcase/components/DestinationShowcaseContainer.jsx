import { getThemeColorCss } from "@/styles/themeColors";
import {
  DEFAULT_DESTINATION_SHOWCASE_STYLE,
  SECTION_PADDING_CLASS,
} from "../utils/style";

/**
 * Full-bleed section shell — banner goes edge-to-edge on mobile.
 * Header stays inset via PageContentContainer in the panel.
 */
export default function DestinationShowcaseContainer({
  lang,
  dir,
  background = DEFAULT_DESTINATION_SHOWCASE_STYLE.sectionBg,
  showBackground = DEFAULT_DESTINATION_SHOWCASE_STYLE.showSectionBg,
  padding = DEFAULT_DESTINATION_SHOWCASE_STYLE.sectionPadding,
  children,
}) {
  const paddingClass =
    SECTION_PADDING_CLASS[padding] ?? SECTION_PADDING_CLASS.default;

  return (
    <section
      className={`w-full overflow-x-hidden ${paddingClass}`}
      lang={lang}
      dir={dir || (lang === "ar" ? "rtl" : "ltr")}
      style={
        showBackground
          ? { backgroundColor: getThemeColorCss(background, "50") }
          : undefined
      }
    >
      {children}
    </section>
  );
}
