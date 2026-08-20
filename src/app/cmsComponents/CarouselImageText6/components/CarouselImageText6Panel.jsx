"use client";

import useIsMobile from "@/hooks/useIsMobile";
import { typography } from "@/styles/typography";
import { getThemeColorCss } from "@/styles/themeColors";
import { getFontWeightValue } from "@/styles/fontWeight";
import OurValuesDesktop from "./OurValuesDesktop";
import OurValuesMobile from "./OurValuesMobile";
import { TITLE_ALIGN_CLASS } from "../utils/style";

export default function CarouselImageText6Panel({
  lang = "en",
  content,
  style,
}) {
  const { title, items = [] } = content;
  const isMobile = useIsMobile(1024);
  const alignClass =
    TITLE_ALIGN_CLASS[style.titleAlign] ?? TITLE_ALIGN_CLASS.center;
  const panelCss = getThemeColorCss(style.panelColor, "main");

  return (
    <section
      className="min-h-screen"
      style={{
        ...(style.showSectionBg
          ? { backgroundColor: getThemeColorCss(style.sectionBg, "secondary-2") }
          : {}),
        "--values-panel": panelCss,
      }}
    >
      {style.showTitle && title ? (
        <h2
          className={`${typography.pageTitle} py-6 font-bold ${alignClass} ${
            style.titleAlign === "left" ? "px-6" : ""
          }`}
          style={{ color: getThemeColorCss(style.titleColor, "white"), fontWeight: getFontWeightValue(style.titleFontWeight) }}
        >
          {title}
        </h2>
      ) : null}

      {isMobile ? (
        <OurValuesMobile lang={lang} items={items} style={style} />
      ) : (
        <OurValuesDesktop lang={lang} items={items} style={style} />
      )}
    </section>
  );
}
