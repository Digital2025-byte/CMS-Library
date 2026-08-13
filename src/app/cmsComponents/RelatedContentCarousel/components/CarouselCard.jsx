"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import AnimatedCTAButton from "@/components/ui/AnimatedCTAButton";
import { typography } from "@/styles/typography";
import { withCampaignPath } from "@/utils/withCampaignPath";
import { getImageUrl } from "../utils/helpers";

export default function CarouselCard({ card, lang = "en", cId }) {
  const { t } = useTranslation();

  if (!card) {
    return null;
  }

  const imageSrc = getImageUrl(card?.image?.fileUrl || card?.imageUrl);
  const title = card?.title || "";
  const description = card?.description || "";
  const buttonText = card?.buttonText || t("relatedContentCarousel.learnMore");
  const buttonLink = card?.buttonLink || "#";
  const isRtl = lang === "ar";

  return (
    <article className="h-full w-full" dir={isRtl ? "rtl" : "ltr"}>
      <div className="flex h-[30rem] w-full flex-col overflow-visible rounded-[1.25rem] border border-200 bg-white shadow-sm md:h-[32rem]">
        {imageSrc ? (
          <div className="relative h-[55%] w-full shrink-0 overflow-hidden rounded-t-[1.25rem]">
            <Image
              src={imageSrc}
              alt={card?.image?.alt || title || ""}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 33vw"
              loading="lazy"
            />
          </div>
        ) : (
          <div
            className="relative h-[55%] w-full shrink-0 rounded-t-[1.25rem] bg-surface-1"
            aria-hidden
          />
        )}

        <div className="flex min-h-0 flex-1 flex-col px-5 pb-5 pt-5 sm:px-6 sm:pb-6 sm:pt-6">
          {title ? (
            <h3
              className={`${typography.itemTitle} mb-2 font-semibold leading-snug text-secondary-2`}
            >
              {title}
            </h3>
          ) : null}

          {description ? (
            <p
              className={`${typography.itemDescription} mb-5 leading-relaxed text-600`}
            >
              {description}
            </p>
          ) : null}

          <div className="mt-auto flex w-full justify-end overflow-visible">
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
