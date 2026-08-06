import Button from "@/components/ui/Button";
import { typography } from "@/styles/typography";

export default function CitiesSectionsText({
  title = "",
  description = "",
  isCTA = false,
  ctaLabel = "",
  ctaHref = "",
  cId,
}) {
  return (
    <div className="lg:sticky lg:top-24 lg:self-start">
      {title ? (
        <h2
          className={`${typography.sectionTitle} font-semibold text-primary-100`}
        >
          {title}
        </h2>
      ) : null}

      {description ? (
        <p
          className={`${typography.sectionDescription} mt-4 max-w-md leading-relaxed text-white`}
        >
          {description}
        </p>
      ) : null}

      {isCTA && ctaLabel && ctaHref ? (
        <div className="mt-6 hidden lg:block">
          <Button label={ctaLabel} href={ctaHref} cId={cId} />
        </div>
      ) : null}
    </div>
  );
}
