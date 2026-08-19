import { typography } from "@/styles/typography";
import { getThemeColorCss } from "@/styles/themeColors";
import {
  DEFAULT_BANNER_WITH_CTA_STYLE,
  TITLE_ALIGN_CLASS,
} from "../utils/style";
import BannerWithCtaButton from "./BannerWithCtaButton";

export default function BannerWithCtaContent({
  content,
  style = DEFAULT_BANNER_WITH_CTA_STYLE,
}) {
  const title = content.title;
  const description = content.description;
  const showHeading = style.showTitle && title;
  const showCopy = style.showDescription && description;
  const showCta = style.showButton && content.ctaLabel;
  const alignClass =
    TITLE_ALIGN_CLASS[style.titleAlign] ?? TITLE_ALIGN_CLASS.left;
  const titleCss = getThemeColorCss(style.titleColor, "white");
  const descriptionCss = getThemeColorCss(style.descriptionColor, "white");

  if (!showHeading && !showCopy && !showCta) {
    return null;
  }

  return (
    <div className={`px-6 py-8 md:px-10 lg:px-14 ${alignClass}`}>
      {showHeading ? (
        <h2
          className={`${typography.sectionTitle} font-bold leading-tight`}
          style={{ color: titleCss }}
        >
          {title}
        </h2>
      ) : null}

      {showCopy ? (
        <p
          className={`${typography.sectionDescription} mt-3 max-w-145`}
          style={{
            color: `color-mix(in srgb, ${descriptionCss} 90%, transparent)`,
          }}
        >
          {description}
        </p>
      ) : null}

      {showCta ? (
        <BannerWithCtaButton
          label={content.ctaLabel}
          href={content.ctaHref}
          style={style}
        />
      ) : null}
    </div>
  );
}
