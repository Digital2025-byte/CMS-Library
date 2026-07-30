import { typography } from "@/styles/typography";
import BannerWithCtaButton from "./BannerWithCtaButton";

export default function BannerWithCtaContent({
  title,
  description,
  ctaLabel,
  ctaHref,
}) {
  if (!title && !description && !ctaLabel) {
    return null;
  }

  return (
    <div className="max-w-145 px-6 py-8 text-white md:px-10 lg:px-14">
      {title ? (
        <h2
          className={`${typography.sectionTitle} font-bold leading-tight text-white`}
        >
          {title}
        </h2>
      ) : null}

      {description ? (
        <p className={`${typography.body} mt-3 text-white/90`}>
          {description}
        </p>
      ) : null}

      <BannerWithCtaButton label={ctaLabel} href={ctaHref} />
    </div>
  );
}
