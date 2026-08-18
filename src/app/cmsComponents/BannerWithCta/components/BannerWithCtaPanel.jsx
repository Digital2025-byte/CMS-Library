import { getThemeColorCss } from "@/styles/themeColors";
import { isUsableImageSrc } from "../utils/helpers";
import {
  BANNER_RADIUS_CLASS,
  DEFAULT_BANNER_WITH_CTA_STYLE,
} from "../utils/style";
import BannerWithCtaContent from "./BannerWithCtaContent";

function titleWash(overlayCss) {
  return `linear-gradient(90deg, color-mix(in srgb, ${overlayCss} 92%, transparent) 0%, color-mix(in srgb, ${overlayCss} 85%, transparent) 20%, color-mix(in srgb, ${overlayCss} 60%, transparent) 45%, color-mix(in srgb, ${overlayCss} 20%, transparent) 70%, transparent 100%)`;
}

export default function BannerWithCtaPanel({
  title,
  description,
  ctaLabel,
  ctaHref,
  backgroundImage,
  imageAlt = "",
  showTitle = DEFAULT_BANNER_WITH_CTA_STYLE.showTitle,
  showDescription = DEFAULT_BANNER_WITH_CTA_STYLE.showDescription,
  showButton = DEFAULT_BANNER_WITH_CTA_STYLE.showButton,
  showHeroImage = DEFAULT_BANNER_WITH_CTA_STYLE.showHeroImage,
  showOverlay = DEFAULT_BANNER_WITH_CTA_STYLE.showOverlay,
  titleAlign = DEFAULT_BANNER_WITH_CTA_STYLE.titleAlign,
  titleColor = DEFAULT_BANNER_WITH_CTA_STYLE.titleColor,
  descriptionColor = DEFAULT_BANNER_WITH_CTA_STYLE.descriptionColor,
  overlayColor = DEFAULT_BANNER_WITH_CTA_STYLE.overlayColor,
  bannerRadius = DEFAULT_BANNER_WITH_CTA_STYLE.bannerRadius,
  buttonBg = DEFAULT_BANNER_WITH_CTA_STYLE.buttonBg,
  buttonText = DEFAULT_BANNER_WITH_CTA_STYLE.buttonText,
}) {
  const overlayCss = getThemeColorCss(overlayColor, "primary-1");
  const heroSrc =
    showHeroImage && isUsableImageSrc(backgroundImage) ? backgroundImage : "";
  const radiusClass =
    BANNER_RADIUS_CLASS[bannerRadius] ?? BANNER_RADIUS_CLASS.lg;
  const backgroundLayers = [
    showOverlay ? titleWash(overlayCss) : null,
    heroSrc ? `url(${heroSrc})` : null,
  ]
    .filter(Boolean)
    .join(", ");

  return (
    <div
      className={`flex min-h-62.5 w-full items-center md:min-h-80 lg:min-h-103.75 ${radiusClass}`}
      aria-label={imageAlt || title || undefined}
      style={{
        backgroundImage: backgroundLayers || undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: heroSrc
          ? undefined
          : overlayCss,
      }}
    >
      <BannerWithCtaContent
        title={title}
        description={description}
        ctaLabel={ctaLabel}
        ctaHref={ctaHref}
        showTitle={showTitle}
        showDescription={showDescription}
        showButton={showButton}
        titleAlign={titleAlign}
        titleColor={titleColor}
        descriptionColor={descriptionColor}
        buttonBg={buttonBg}
        buttonText={buttonText}
      />
    </div>
  );
}
