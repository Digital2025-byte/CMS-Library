import Button from "@/components/ui/Button";
import { typography } from "@/styles/typography";
import { getThemeColorCss } from "@/styles/themeColors";
import { TITLE_ALIGN_JUSTIFY, TITLE_ALIGN_TEXT } from "../utils/style";

export default function SliderSlideContent({
  lang = "en",
  title = "",
  subtitle = "",
  description = "",
  buttonText = "",
  ctaHref = "",
  posParams = "gb",
  cId,
  showSlideText = true,
  showTitleText = true,
  showSubtitleText = true,
  showDescriptionText = true,
  showButton = true,
  titleAlign = "left",
  titleColor = "white",
  subtitleColor = "white",
  descriptionColor = "white",
  buttonVariant = "primary",
}) {
  const isRtl = lang === "ar";
  const resolvedHref = ctaHref
    ? String(ctaHref).startsWith("/")
      ? ctaHref
      : `/${posParams}/${lang}/${String(ctaHref).replace(/^\//, "")}`
    : "";

  const canShowSubtitle = showSlideText && showSubtitleText && subtitle;
  const canShowTitle = showSlideText && showTitleText && title;
  const canShowDescription = showSlideText && showDescriptionText && description;
  const showCopy = canShowSubtitle || canShowTitle || canShowDescription;
  const showCta = showButton && buttonText && resolvedHref;
  const alignJustify =
    TITLE_ALIGN_JUSTIFY[titleAlign] ?? TITLE_ALIGN_JUSTIFY.left;
  const alignText = TITLE_ALIGN_TEXT[titleAlign] ?? TITLE_ALIGN_TEXT.left;

  if (!showCopy && !showCta) {
    return null;
  }

  return (
    <div
      className={`flex w-full pb-6 sm:pb-8 md:pb-12 lg:pb-16 ${alignJustify}`}
    >
      <div
        dir={isRtl ? "rtl" : "ltr"}
        className={`w-full max-w-lg ${alignText}`}
      >
        {canShowSubtitle ? (
          <p
            className={`${typography.sectionDescription} font-medium`}
            style={{ color: getThemeColorCss(subtitleColor, "white") }}
          >
            {subtitle}
          </p>
        ) : null}

        {canShowTitle ? (
          <h1
            className={`${typography.sectionTitle} mt-1 font-bold leading-tight sm:mt-2 md:mt-3`}
            style={{ color: getThemeColorCss(titleColor, "white") }}
          >
            {title}
          </h1>
        ) : null}

        {canShowDescription ? (
          <p
            className={`${typography.sectionDescription} mt-2 sm:mt-3`}
            style={{ color: getThemeColorCss(descriptionColor, "white") }}
          >
            {description}
          </p>
        ) : null}

        {showCta ? (
          <div className="pointer-events-auto mt-4 sm:mt-5 md:mt-6">
            <Button
              label={buttonText}
              href={resolvedHref}
              cId={cId}
              variant={buttonVariant}
              className={`slider-hero-cta slider-hero-cta-${buttonVariant} min-w-[120px] sm:min-w-[140px] md:min-w-[180px]`}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
