import AnimatedCTAButton from "@/components/ui/AnimatedCTAButton";
import { withCampaignPath } from "@/utils/withCampaignPath";
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
    <div className="flex w-full flex-col justify-center gap-6 lg:w-[48%] lg:gap-8 ">
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
        <div className="min-h-12 w-fit overflow-visible">
          <AnimatedCTAButton
            lang={lang}
            label={ctaButton}
            href={withCampaignPath(ctaHref || "#", cId)}
            arrowColor="#FFFFFF"
            textColor="#006080"
            bgColor="#006080"
            bgFillColor="#006080"
            textFillColor="#FFFFFF"
            arrowFillColor="#FFFFFF"
            mobileTextColor="#FFFFFF"
            mobileArrowColor="#FFFFFF"
            mobileBgColor="#006080"
          />
        </div>
      ) : null}
    </div>
  );
}
