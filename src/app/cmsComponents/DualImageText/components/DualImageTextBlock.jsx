import Image from "next/image";
import Button from "@/components/ui/Button";
import { typography } from "@/styles/typography";
import { imageSrc } from "../utils/helpers";
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

  return (
    <div className="grid grid-cols-1 items-center gap-5 lg:grid-cols-2 lg:gap-12 xl:gap-16">
      <div
        className={`relative w-full overflow-visible ${
          hasExtraImage ? "pb-8 ps-4 sm:pb-10 sm:ps-6" : ""
        } ${reverse ? "lg:order-1" : "lg:order-2"}`}
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
          <div className="absolute bottom-0 inset-s-20 z-10 w-[58%] max-w-[280px] sm:w-[52%] sm:max-w-[320px]">
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
        {item.description ? (
          <p
            className={`${typography.sectionDescription} mt-4 leading-relaxed text-700 text-start lg:mt-6 lg:text-justify`}
          >
            {item.description}
          </p>
        ) : null}
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
