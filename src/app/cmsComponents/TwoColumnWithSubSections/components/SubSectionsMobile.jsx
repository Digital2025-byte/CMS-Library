import Image from "next/image";
import Button from "@/components/ui/Button";
import SubSectionBlock from "./SubSectionBlock";
import SubSectionsHeader from "./SubSectionsHeader";

export default function SubSectionsMobile({
  lang = "en",
  sectionLabel,
  title,
  description,
  mainImage,
  mainImageAlt,
  overlayImage,
  overlayImageAlt,
  firstSubSection,
  secondSubSection,
  ctaButton,
  ctaHref,
  ctaIcon,
  cId,
}) {
  return (
    <div className="flex flex-col gap-8 lg:hidden">
      <SubSectionsHeader
        sectionLabel={sectionLabel}
        title={title}
        description={description}
      />

      <div className="grid grid-cols-2 items-start gap-4 sm:gap-5">
        <div className="flex flex-col gap-4">
          {mainImage ? (
            <div className="relative aspect-3/4 w-full overflow-hidden rounded-2xl sm:rounded-3xl">
              <Image
                src={mainImage}
                alt={mainImageAlt}
                fill
                priority
                quality={75}
                className="object-cover object-center"
                sizes="50vw"
              />
            </div>
          ) : null}
          <SubSectionBlock
            title={secondSubSection?.title}
            description={secondSubSection?.description}
          />
        </div>

        <div className="flex flex-col gap-4">
          {overlayImage ? (
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl sm:rounded-3xl">
              <Image
                src={overlayImage}
                alt={overlayImageAlt}
                fill
                quality={75}
                className="object-cover object-center"
                sizes="50vw"
              />
            </div>
          ) : null}
          <SubSectionBlock
            title={firstSubSection?.title}
            description={firstSubSection?.description}
          />
        </div>
      </div>

      {ctaButton ? (
        <div className="w-full pt-2">
          <Button
            label={ctaButton}
            href={ctaHref || "#"}
            icon={ctaIcon}
            cId={cId}
            fullWidth
          />
        </div>
      ) : null}
    </div>
  );
}
