import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";
import Button from "@/components/ui/Button";
import { typography } from "@/styles/typography";

export default function FullHeightHeaderWithTextContent({
  lang = "en",
  title = "",
  description = "",
  buttonText = "",
  ctaHref = "",
  cId,
}) {
  const isRtl = lang === "ar";
  const ArrowIcon = isRtl ? ArrowLeftIcon : ArrowRightIcon;

  return (
    <div className={`w-full max-w-xl ${isRtl ? "text-right" : "text-left"}`}>
      {title ? (
        <h1
          className={`${typography.pageTitle} max-w-lg font-semibold text-secondary-100`}
        >
          {title}
        </h1>
      ) : null}

      {description ? (
        <p
          className={`${typography.sectionDescription} mt-3 max-w-md leading-relaxed text-secondary-100 sm:mt-4`}
        >
          {description}
        </p>
      ) : null}

      {buttonText && ctaHref ? (
        <div className="mt-5 sm:mt-6">
          <Button
            label={buttonText}
            href={ctaHref}
            cId={cId}
            variant="primary"
            icon={<ArrowIcon size={20} weight="regular" aria-hidden />}
            iconPosition="end"
            className="min-w-[140px] sm:min-w-[160px]"
          />
        </div>
      ) : null}
    </div>
  );
}
