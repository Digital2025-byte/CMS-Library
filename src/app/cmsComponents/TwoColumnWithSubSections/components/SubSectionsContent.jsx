import Button from "@/components/ui/Button";
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
  ctaIcon,
  cId,
}) {
  return (
    <div className="flex w-full flex-col justify-center gap-6 lg:w-[48%] lg:gap-8 lg:ps-4 xl:ps-8">
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
          <Button
            label={ctaButton}
            href={ctaHref || "#"}
            icon={ctaIcon}
            cId={cId}
          />
        </div>
      ) : null}
    </div>
  );
}
