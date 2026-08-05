"use client";

import Image from "next/image";
import AnimatedCTAButton from "@/components/ui/AnimatedCTAButton";
import { withCampaignPath } from "@/utils/withCampaignPath";
import { getImageUrl } from "../utils/helpers";

export default function CarouselCard({ card, lang = "en", cId }) {
  if (!card) {
    return null;
  }

  const imageSrc = getImageUrl(card?.image?.fileUrl || card?.imageUrl);
  const title = card?.title || "";
  const description = card?.description || "";
  const buttonText =
    card?.buttonText || (lang === "ar" ? "اعرف المزيد" : "Learn More");
  const buttonLink = card?.buttonLink || "#";

  return (
    <article className="h-full w-full"  dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="group flex h-full min-h-95 w-full flex-col overflow-hidden rounded-2xl border border-200 bg-white shadow-md transition-all duration-300 hover:shadow-lg md:min-h-105">
        {imageSrc ? (
          <div className="relative h-50 w-full overflow-hidden sm:h-55 md:h-60 lg:h-65">
            <Image
              src={imageSrc}
              alt={card?.image?.alt || title || "Card image"}
              fill
              className="rounded-t-xl object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              loading="lazy"
            />
          </div>
        ) : (
          <div className="relative flex h-50 w-full items-center justify-center bg-gray-200 sm:h-55 md:h-60 lg:h-65">
            <span className="text-sm text-gray-400">No image</span>
          </div>
        )}

        <div className="flex flex-1 flex-col p-4 sm:p-5 md:p-6">
          {title ? (
            <h3 className="mb-2 line-clamp-2 text-lg font-semibold text-gray-900 sm:mb-3 sm:text-xl md:text-2xl">
              {title}
            </h3>
          ) : null}

          {description ? (
            <p className="mb-4 line-clamp-3 flex-1 text-sm leading-relaxed text-gray-600 sm:mb-5 sm:text-base">
              {description}
            </p>
          ) : null}

          <div className="mt-auto min-h-15 w-fit max-w-full overflow-visible">
            <AnimatedCTAButton
              lang={lang}
              href={withCampaignPath(buttonLink, cId)}
              label={buttonText}
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
        </div>
      </div>
    </article>
  );
}
