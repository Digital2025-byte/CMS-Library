import AnimatedCTAButton from "@/components/ui/AnimatedCTAButton";
import { typography } from "@/styles/typography";
import SubSectionBlock from "./SubSectionBlock";

export default function SubSectionsContent({
  lang = "en",
  sectionLabel,
  title,
  description,
  firstSubSection,
  secondSubSection,
  ctaButton,
  ctaHref,
}) {
  return (
    <div className="w-full max-w-md space-y-4 ">
      {sectionLabel ? (
        <p className="text-sm font-medium text-ink">{sectionLabel}</p>
      ) : null}

      {title ? (
        <h2
          className={`${typography.sectionTitle} font-semibold italic leading-tight text-primary-1`}
        >
          {title}
        </h2>
      ) : null}

      {description ? (
        <p className="text-sm leading-relaxed text-muted sm:text-[15px]">
          {description}
        </p>
      ) : null}

      <div className="flex flex-col gap-6 pt-2 md:flex-row md:gap-6">
        <SubSectionBlock
          title={firstSubSection?.title}
          description={firstSubSection?.description}
        />

        <div className="hidden w-px bg-muted md:block" />

        <SubSectionBlock
          title={secondSubSection?.title}
          description={secondSubSection?.description}
        />
      </div>

      {ctaButton ? (
        <div className="mb-4 min-h-12">
          <AnimatedCTAButton
            lang={lang}
            label={ctaButton}
            href={ctaHref || "#"}
            arrowColor="#fff"
            textColor="#006080"
            bgColor="#006080"
            bgFillColor="#004d66"
            textFillColor="#fff"
            arrowFillColor="#fff"
            mobileBgColor="#006080"
            mobileTextColor="#fff"
            mobileArrowColor="#fff"
          />
        </div>
      ) : null}
    </div>
  );
}
