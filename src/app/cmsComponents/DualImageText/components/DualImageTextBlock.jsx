import Image from "next/image";
import Button from "@/components/ui/Button";
import { typography } from "@/styles/typography";
import {
  DEFAULT_EXTRA_IMAGE_POSITION,
  imageSrc,
  resolveExtraImagePosition,
} from "../utils/helpers";
import DualImageTextTitle from "./DualImageTextTitle";

export default function DualImageTextBlock({
  item,
  reverse = false,
  priority = false,
  blueLayer = false,
  underlineFirstWord = false,
  showExploreButton = false,
  exploreButtonLabel = "Explore more",
  exploreButtonHref = "explore",
  showExtraImage = false,
  extraImageUrl = "",
  extraImageAlt = "",
  extraImagePosition = DEFAULT_EXTRA_IMAGE_POSITION,
  cId,
}) {
  if (!item?.title && !item?.description && !item?.imageUrl) {
    return null;
  }

  const shadowClass = reverse
    ? "shadow-[-10px_-10px_0_0_var(--color-main)]"
    : "shadow-[10px_10px_0_0_var(--color-main)]";

  const buttonLabel = item.buttonText || exploreButtonLabel;
  const buttonHref = item.ctaHref || exploreButtonHref;
  const hasExtraImage = showExtraImage && Boolean(extraImageUrl);
  const { overlayStyle } = resolveExtraImagePosition(extraImagePosition);

  return (
    <div className="grid grid-cols-1 items-center gap-5 lg:grid-cols-2 lg:gap-12 xl:gap-16">
      <div
        className={`relative w-full overflow-visible ${
          reverse ? "lg:order-1" : "lg:order-2"
        }`}
      >
        {item.imageUrl ? (
          <Image
            src={imageSrc(item.imageUrl)}
            alt={item.imageAlt || item.title || "Section image"}
            width={1000}
            height={750}
            className={`relative z-0 aspect-4/3 h-auto w-full object-cover ${
              blueLayer ? shadowClass : "rounded-2xl"
            }`}
            priority={priority}
            quality={75}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        ) : null}

        {hasExtraImage ? (
          <div className="absolute z-10" style={overlayStyle}>
            <Image
              src={imageSrc(extraImageUrl)}
              alt={extraImageAlt || item.imageAlt || "Detail image"}
              width={640}
              height={480}
              className="aspect-4/3 h-auto w-full rounded-2xl object-cover shadow-md"
              quality={75}
              sizes="(max-width: 1024px) 45vw, 20vw"
            />
          </div>
        ) : null}
      </div>

      <div
        className={`flex flex-col justify-center ${
          reverse ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <DualImageTextTitle
          text={item.title}
          underlineFirstWord={underlineFirstWord}
        />
        {(item.descriptions?.length
          ? item.descriptions
          : item.description
            ? [item.description]
            : []
        ).map((paragraph, index) => (
          <p
            key={`${item.title}-p-${index}`}
            className={`${typography.sectionDescription} mt-4 leading-relaxed text-700 text-start lg:mt-6 lg:text-justify`}
          >
            {paragraph}
          </p>
        ))}
        {showExploreButton && buttonLabel ? (
          <div className="mt-5 sm:mt-6">
            <Button
              label={buttonLabel}
              href={buttonHref}
              cId={cId}
              variant="primary"
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
