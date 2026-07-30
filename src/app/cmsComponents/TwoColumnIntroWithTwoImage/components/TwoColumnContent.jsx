import { typography } from "@/styles/typography";
import TwoColumnCta from "./TwoColumnCta";

export default function TwoColumnContent({
  title,
  description,
  ctaButton,
  ctaHref,
}) {
  if (!title && !description && !ctaButton) {
    return null;
  }

  return (
    <div className="flex w-full flex-col justify-center">
      {title ? (
        <h2
          className={`${typography.sectionTitle} font-semibold leading-snug text-primary-1`}
        >
          {title}
        </h2>
      ) : null}

      {description ? (
        <p
          className={`${typography.sectionDescription} mt-4 leading-relaxed text-body sm:mt-5 lg:mt-6`}
        >
          {description}
        </p>
      ) : null}

      {ctaButton ? (
        <div className="mt-6 sm:mt-8">
          <TwoColumnCta label={ctaButton} href={ctaHref} />
        </div>
      ) : null}
    </div>
  );
}
