import AnimatedCTAButton from "@/components/ui/AnimatedCTAButton";
import SubSectionBlock from "./SubSectionBlock";
import SubSectionsHeader from "./SubSectionsHeader";

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
    <div className="flex w-full flex-col justify-center gap-6 lg:w-[52%] lg:gap-8 lg:ps-4 xl:ps-8">
      <SubSectionsHeader
        sectionLabel={sectionLabel}
        title={title}
        description={description}
      />

      <div className="flex flex-row gap-6 pt-2 lg:gap-8">
        <SubSectionBlock
          title={firstSubSection?.title}
          description={firstSubSection?.description}
        />

        <div className="w-px shrink-0 self-stretch bg-600/40" />

        <SubSectionBlock
          title={secondSubSection?.title}
          description={secondSubSection?.description}
        />
      </div>

      {ctaButton ? (
        <div className="min-h-12">
          <AnimatedCTAButton
            lang={lang}
            label={ctaButton}
            href={ctaHref || "#"}
            arrowColor="var(--color-background)"
            textColor="var(--color-primary-1)"
            bgColor="var(--color-primary-1)"
            bgFillColor="var(--color-primary-1)"
            textFillColor="var(--color-background)"
            arrowFillColor="var(--color-background)"
          />
        </div>
      ) : null}
    </div>
  );
}
