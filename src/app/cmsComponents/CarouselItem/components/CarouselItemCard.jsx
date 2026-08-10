"use client";

import Image from "next/image";
import Link from "next/link";
import { withCampaignPath } from "@/utils/withCampaignPath";
import { toCssUrl } from "../utils/helpers";

export default function CarouselItemCard({
  card,
  lang = "en",
  posParams = "gb",
  cId,
}) {
  const imageUrl = card?.imageUrl ? String(card.imageUrl).trim() : "";
  const alt =
    card?.imageAlt ||
    `${card?.cityName || ""}, ${card?.countryName || ""}`.trim() ||
    "Destination";

  return (
    <div className="group relative scale-100 overflow-hidden rounded-3xl shadow-sm transition-transform duration-500">
      <div className="relative h-[80vw] max-h-[380px] lg:h-[60vw]">
        {imageUrl ? (
          <Image
            src={toCssUrl(imageUrl)}
            alt={alt}
            fill
            className="object-cover transition-all duration-300 group-hover:scale-105"
            sizes="(max-width: 1024px) 90vw, 33vw"
          />
        ) : null}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[139px] w-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(5, 78, 114, 0) 0%, #00253C 100%)",
          }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <h3
          className={`absolute top-8 text-base font-semibold text-[#FDFDFC] ${
            lang === "ar" ? "right-4" : "left-4"
          }`}
          style={{ textShadow: "0 4px 8px rgba(0, 0, 0, 0.45)" }}
        >
          {card?.countryName}
        </h3>
      </div>

      <p
        className={`absolute bottom-20 text-base font-medium text-[#FDFDFC] ${
          lang === "ar" ? "right-4" : "left-4"
        }`}
      >
        {card?.cityName}
      </p>

      <Link
        href={withCampaignPath(
          `/${posParams}/${lang}/our-destinations${card?.takeATripUrl || ""}`,
          cId
        )}
      >
        <div className="absolute bottom-2 w-full transform p-4 opacity-100 transition-all duration-300 translate-y-0 lg:translate-y-10 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
          <button
            type="button"
            className="w-full rounded-xl bg-primary-2 px-6 py-3 text-sm font-semibold text-[#FDFDFC] shadow-md"
          >
            {lang === "ar" ? "اكتشف " : "Discover"}
          </button>
        </div>
      </Link>
    </div>
  );
}
