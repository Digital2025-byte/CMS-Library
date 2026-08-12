import { typography } from "@/styles/typography";
import BannerWithCtaButton from "./BannerWithCtaButton";

export default function BannerWithCtaContent({
  title,
  description,
  ctaLabel,
  ctaHref,
  showTitleDescription = true,
  showButton = true,
}) {
  const showCopy = showTitleDescription && (title || description);
  const showCta = showButton && ctaLabel;

  if (!showCopy && !showCta) {
    return null;
  }

  return (
    <div className="max-w-145 px-6 py-8 text-white md:px-10 lg:px-14">
      {showTitleDescription && title ? (
        <h2
          className={`${typography.sectionTitle} font-bold leading-tight text-white`}
        >
          {title}
        </h2>
      ) : null}

      {showTitleDescription && description ? (
        <p className={`${typography.body} mt-3 text-white/90`}>
          {description}
        </p>
      ) : null}

      {showCta ? (
        <BannerWithCtaButton label={ctaLabel} href={ctaHref} />
      ) : null}
    </div>
  );
}
