import { getThemeColorCss } from "@/styles/themeColors";
import { DEFAULT_COOL_SLIDE_GALLERY_STYLE } from "../utils/style";

export default function CoolSlideGalleryContainer({
  lang,
  dir,
  style = DEFAULT_COOL_SLIDE_GALLERY_STYLE,
  children,
  className = "",
}) {
  const dotsCss = style.dotsColor
    ? getThemeColorCss(style.dotsColor, "white")
    : "rgba(255,255,255,0.14)";

  return (
    <section
      className={`w-full ${className}`.trim()}
      lang={lang}
      dir={dir || (lang === "ar" ? "rtl" : "ltr")}
    >
      <div
        className="flex h-[560px] w-full items-center justify-center"
        style={{
          backgroundColor: style.showSectionBg
            ? getThemeColorCss(style.sectionBg, "foreground")
            : "transparent",
          backgroundImage: style.showStageDots
            ? `radial-gradient(circle, ${
                style.dotsColor
                  ? `color-mix(in srgb, ${dotsCss} 14%, transparent)`
                  : "rgba(255,255,255,0.14)"
              } 1px, transparent 1.2px)`
            : "none",
          backgroundSize: style.showStageDots ? "22px 22px" : undefined,
        }}
      >
        {children}
      </div>
    </section>
  );
}
