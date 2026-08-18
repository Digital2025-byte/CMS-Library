"use client";

import useIsMobile from "@/hooks/useIsMobile";
import { typography } from "@/styles/typography";
import { getThemeColorCss } from "@/styles/themeColors";
import OurValuesDesktop from "./OurValuesDesktop";
import OurValuesMobile from "./OurValuesMobile";
import {
  DEFAULT_CAROUSEL_IMAGE_TEXT_STYLE,
  TITLE_ALIGN_CLASS,
} from "../utils/style";

export default function CarouselImageText6Panel({
  lang = "en",
  title,
  items = [],
  showTitle = true,
  showItemTitle = true,
  showItemDescription = true,
  grayscaleInactive = true,
  openOn = DEFAULT_CAROUSEL_IMAGE_TEXT_STYLE.openOn,
  sectionBg = DEFAULT_CAROUSEL_IMAGE_TEXT_STYLE.sectionBg,
  titleAlign = DEFAULT_CAROUSEL_IMAGE_TEXT_STYLE.titleAlign,
  titleColor = DEFAULT_CAROUSEL_IMAGE_TEXT_STYLE.titleColor,
  overlayColor = DEFAULT_CAROUSEL_IMAGE_TEXT_STYLE.overlayColor,
  panelColor = DEFAULT_CAROUSEL_IMAGE_TEXT_STYLE.panelColor,
  cardBg = DEFAULT_CAROUSEL_IMAGE_TEXT_STYLE.cardBg,
  itemTitleColor = DEFAULT_CAROUSEL_IMAGE_TEXT_STYLE.itemTitleColor,
  itemBodyColor = DEFAULT_CAROUSEL_IMAGE_TEXT_STYLE.itemBodyColor,
}) {
  const isMobile = useIsMobile(1024);
  const alignClass = TITLE_ALIGN_CLASS[titleAlign] ?? TITLE_ALIGN_CLASS.center;
  const panelCss = getThemeColorCss(panelColor, "main");

  return (
    <section
      className="min-h-screen"
      style={{
        backgroundColor: getThemeColorCss(sectionBg, "secondary-2"),
        "--values-panel": panelCss,
      }}
    >
      {showTitle && title ? (
        <h2
          className={`${typography.pageTitle} py-6 font-bold ${alignClass} ${
            titleAlign === "left" ? "px-6" : ""
          }`}
          style={{ color: getThemeColorCss(titleColor, "white") }}
        >
          {title}
        </h2>
      ) : null}

      {isMobile ? (
        <OurValuesMobile
          lang={lang}
          items={items}
          showItemTitle={showItemTitle}
          showItemDescription={showItemDescription}
          overlayColor={overlayColor}
          cardBg={cardBg}
          itemTitleColor={itemTitleColor}
          itemBodyColor={itemBodyColor}
        />
      ) : (
        <OurValuesDesktop
          lang={lang}
          items={items}
          showItemTitle={showItemTitle}
          showItemDescription={showItemDescription}
          grayscaleInactive={grayscaleInactive}
          openOn={openOn}
          overlayColor={overlayColor}
          panelColor={panelColor}
          itemTitleColor={itemTitleColor}
          itemBodyColor={itemBodyColor}
        />
      )}
    </section>
  );
}
