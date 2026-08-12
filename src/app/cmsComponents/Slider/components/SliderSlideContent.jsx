import Button from "@/components/ui/Button";
import { typography } from "@/styles/typography";

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
  showButton = true,
}) {
  const isRtl = lang === "ar";
  const resolvedHref = ctaHref
    ? String(ctaHref).startsWith("/")
      ? ctaHref
      : `/${posParams}/${lang}/${String(ctaHref).replace(/^\//, "")}`
    : "";

  const showCopy = showSlideText && (subtitle || title || description);
  const showCta = showButton && buttonText && resolvedHref;

  if (!showCopy && !showCta) {
    return null;
  }

  return (
    <div
      className={`flex w-full pb-6 sm:pb-8 md:pb-12 lg:pb-16 ${
        isRtl ? "justify-end" : "justify-start"
      }`}
    >
      <div
        dir={isRtl ? "rtl" : "ltr"}
        className={`w-full max-w-lg text-white ${
          isRtl ? "text-right" : "text-left"
        }`}
      >
        {showSlideText && subtitle ? (
          <p className={`${typography.sectionDescription} font-medium text-white`}>
            {subtitle}
          </p>
        ) : null}

        {showSlideText && title ? (
          <h1
            className={`${typography.sectionTitle} mt-1 font-bold leading-tight text-white sm:mt-2 md:mt-3`}
          >
            {title}
          </h1>
        ) : null}

        {showSlideText && description ? (
          <p
            className={`${typography.sectionDescription} mt-2 text-white sm:mt-3`}
          >
            {description}
          </p>
        ) : null}

        {showCta ? (
          <div className="mt-4 sm:mt-5 md:mt-6">
            <Button
              label={buttonText}
              href={resolvedHref}
              cId={cId}
              variant="primary"
              className="slider-hero-cta min-w-[120px] sm:min-w-[140px] md:min-w-[180px]"
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
