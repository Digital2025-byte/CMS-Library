import { typography } from "@/styles/typography";
import { getThemeColorCss } from "@/styles/themeColors";
import {
  DEFAULT_BANNER_WITH_CTA_STYLE,
  TITLE_ALIGN_CLASS,
} from "../utils/style";
import BannerWithCtaButton from "./BannerWithCtaButton";

export default function BannerWithCtaContent({
  title,
  description,
  ctaLabel,
  ctaHref,
  showTitle = DEFAULT_BANNER_WITH_CTA_STYLE.showTitle,
  showDescription = DEFAULT_BANNER_WITH_CTA_STYLE.showDescription,
  showButton = DEFAULT_BANNER_WITH_CTA_STYLE.showButton,
  titleAlign = DEFAULT_BANNER_WITH_CTA_STYLE.titleAlign,
  titleColor = DEFAULT_BANNER_WITH_CTA_STYLE.titleColor,
  descriptionColor = DEFAULT_BANNER_WITH_CTA_STYLE.descriptionColor,
  buttonBg = DEFAULT_BANNER_WITH_CTA_STYLE.buttonBg,
  buttonText = DEFAULT_BANNER_WITH_CTA_STYLE.buttonText,
}) {
  const showHeading = showTitle && title;
  const showCopy = showDescription && description;
  const showCta = showButton && ctaLabel;
  const alignClass = TITLE_ALIGN_CLASS[titleAlign] ?? TITLE_ALIGN_CLASS.left;
  const titleCss = getThemeColorCss(titleColor, "white");
  const descriptionCss = getThemeColorCss(descriptionColor, "white");

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
          label={ctaLabel}
          href={ctaHref}
          buttonBg={buttonBg}
          buttonText={buttonText}
        />
      ) : null}
    </div>
  );
}
