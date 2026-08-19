import { getThemeColorCss } from "@/styles/themeColors";
import {
  DEFAULT_DRAGGABLE_3D_IMAGE_RING_STYLE,
  SECTION_PADDING_CLASS,
} from "../utils/style";

export default function Draggable3DImageRingContainer({
  lang,
  dir,
  style = DEFAULT_DRAGGABLE_3D_IMAGE_RING_STYLE,
  children,
  className = "",
}) {
  const paddingClass =
    SECTION_PADDING_CLASS[style.sectionPadding] ??
    SECTION_PADDING_CLASS.default;

  return (
    <section
      className={`w-full ${paddingClass} ${className}`.trim()}
      lang={lang}
      dir={dir || (lang === "ar" ? "rtl" : "ltr")}
      style={
        style.showSectionBg
          ? { backgroundColor: getThemeColorCss(style.sectionBg, "white") }
          : undefined
      }
    >
      {children}
    </section>
  );
}
