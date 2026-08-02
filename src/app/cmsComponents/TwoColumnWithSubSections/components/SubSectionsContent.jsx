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

        <div className="w-px shrink-0 self-stretch bg-muted/40" />

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
            arrowColor="#fff"
            textColor="#006080"
            bgColor="#006080"
            bgFillColor="#006080"
            textFillColor="#fff"
            arrowFillColor="#fff"
          />
        </div>
      ) : null}
    </div>
  );
}
