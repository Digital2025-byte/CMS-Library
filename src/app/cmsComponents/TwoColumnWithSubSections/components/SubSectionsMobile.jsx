import Image from "next/image";
import Button from "@/components/ui/Button";
import { getThemeColorCss } from "@/styles/themeColors";
import SubSectionBlock from "./SubSectionBlock";
import SubSectionsHeader from "./SubSectionsHeader";
import { isUsableImageSrc } from "../utils/helpers";
import {
  DEFAULT_TWO_COLUMN_SUB_SECTIONS_STYLE,
  IMAGE_RADIUS_CLASS,
  OVERLAY_RADIUS_CLASS,
} from "../utils/style";

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
  style = DEFAULT_TWO_COLUMN_SUB_SECTIONS_STYLE,
}) {
  const canShowMain = style.showImages && isUsableImageSrc(mainImage);
  const canShowOverlay = style.showImages && isUsableImageSrc(overlayImage);
  const mainRadius =
    IMAGE_RADIUS_CLASS[style.imageRadius] ?? IMAGE_RADIUS_CLASS.lg;
  const overlayRadius =
    OVERLAY_RADIUS_CLASS[style.imageRadius] ?? OVERLAY_RADIUS_CLASS.lg;
  const buttonBg = getThemeColorCss(style.buttonBg, "primary-1");
  const buttonText = getThemeColorCss(style.buttonText, "white");

  return (
    <div className="flex flex-col gap-8 lg:hidden">
      <SubSectionsHeader
        sectionLabel={sectionLabel}
        title={title}
        description={description}
        style={style}
      />

      <div className="grid grid-cols-2 items-start gap-4 sm:gap-5">
        <div className="flex flex-col gap-4">
          {canShowMain ? (
            <div
              className={`relative aspect-3/4 w-full overflow-hidden ${overlayRadius}`}
            >
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
          {style.showSubSections ? (
            <SubSectionBlock
              title={secondSubSection?.title}
              description={secondSubSection?.description}
              style={style}
            />
          ) : null}
        </div>

        <div className="flex flex-col gap-4">
          {canShowOverlay ? (
            <div
              className={`relative aspect-4/3 w-full overflow-hidden ${overlayRadius}`}
            >
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
          {style.showSubSections ? (
            <SubSectionBlock
              title={firstSubSection?.title}
              description={firstSubSection?.description}
              style={style}
            />
          ) : null}
        </div>
      </div>

      {style.showCta && ctaButton ? (
        <div className="w-full pt-2">
          <Button
            label={ctaButton}
            href={ctaHref || "#"}
            icon={ctaIcon}
            cId={cId}
            fullWidth
            style={{
              backgroundColor: buttonBg,
              borderColor: buttonBg,
              color: buttonText,
            }}
          />
        </div>
      ) : null}
    </div>
  );
}
