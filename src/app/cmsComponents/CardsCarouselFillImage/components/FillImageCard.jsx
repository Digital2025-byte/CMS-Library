"use client";

import Image from "next/image";
import AnimatedCTAButton from "@/components/ui/AnimatedCTAButton";
import { withCampaignPath } from "@/utils/withCampaignPath";
import { getImageUrl } from "../utils/helpers";

export default function FillImageCard({ card, lang = "en", cId }) {
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
    <article
      data-fill-card
      className="m-0 flex w-full p-0"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <div className="group relative h-95 w-full overflow-hidden rounded-2xl shadow-md transition-shadow duration-300 hover:shadow-lg md:h-105">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={card?.image?.alt || title || "Card image"}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 34vw"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-gray-300">
            <span className="text-sm text-gray-500">No image</span>
          </div>
        )}

        <div
          className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-t from-black/90 via-black/55 to-black/15 md:from-black/80 md:via-black/40 md:to-transparent"
          aria-hidden
        />

        <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col px-6 pb-7 pt-10 text-white sm:px-7 sm:pb-8 md:px-8 md:pb-8">
          {title ? (
            <h3 className="mb-2 line-clamp-2 text-lg font-bold text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.85)] sm:mb-3 sm:text-xl md:text-2xl">
              {title}
            </h3>
          ) : null}

          {description ? (
            <p className="mb-4 line-clamp-3 text-sm font-normal leading-relaxed text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.75)] sm:mb-5 sm:text-base md:text-[0.95rem] md:leading-relaxed">
              {description}
            </p>
          ) : null}

          <div className="mt-auto min-h-15 w-fit max-w-full overflow-visible">
            <AnimatedCTAButton
              lang={lang}
              href={withCampaignPath(buttonLink, cId)}
              label={buttonText}
              gapClassName="gap-5"
              arrowColor="#054E72"
              textColor="#FFFFFF"
              bgColor="#FFFFFF"
              bgFillColor="#FFFFFF"
              textFillColor="#054E72"
              arrowFillColor="#054E72"
              mobileBgColor="#FFFFFF"
              mobileTextColor="#006080"
              mobileArrowColor="#054E72"
            />
          </div>
        </div>
      </div>
    </article>
  );
}
