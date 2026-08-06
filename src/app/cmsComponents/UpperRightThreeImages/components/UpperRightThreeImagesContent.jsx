import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";
import Button from "@/components/ui/Button";
import { typography } from "@/styles/typography";

export default function UpperRightThreeImagesContent({
  lang = "en",
  title = "",
  description = "",
  cta,
  cId,
}) {
  const isRtl = lang === "ar";
  const ArrowIcon = isRtl ? ArrowLeftIcon : ArrowRightIcon;

  return (
    <div className="text-white">
      {title ? (
        <h2 className={`${typography.sectionTitle} font-semibold text-white`}>
          {title}
        </h2>
      ) : null}

      {description ? (
        <p
          className={`${typography.body} mt-4 max-w-4xl leading-relaxed text-white/95`}
        >
          {description}
        </p>
      ) : null}

      {cta?.label ? (
        <div className="mt-6">
          <Button
            label={cta.label}
            href={cta.href || "/"}
            cId={cId}
            icon={<ArrowIcon size={18} weight="bold" aria-hidden />}
            iconPosition="end"
            variant="primary"
          />
        </div>
      ) : null}
    </div>
  );
}
