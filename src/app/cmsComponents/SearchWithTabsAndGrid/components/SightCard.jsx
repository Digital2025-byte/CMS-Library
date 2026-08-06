"use client";

import Image from "next/image";
import Link from "next/link";
import { BookOpenTextIcon } from "@phosphor-icons/react";
import { typography } from "@/styles/typography";
import { withCampaignPath } from "@/utils/withCampaignPath";

export default function SightCard({
  card,
  lang = "en",
  posParams = "gb",
  cId,
  exploreLabel = "Explore",
  exploreMagazineLabel = "Explore as magazine",
}) {
  const isRtl = lang === "ar";
  const slug = String(card?.slug || "").startsWith("/")
    ? card.slug
    : `/${card?.slug || ""}`;
  const stackedHref = withCampaignPath(
    `/${posParams}/${lang}/sights${slug}?template=stacked`,
    cId
  );
  const magazineHref = withCampaignPath(
    `/${posParams}/${lang}/sights${slug}`,
    cId
  );

  return (
    <article
      className="group relative aspect-[4/5] w-full overflow-hidden rounded-3xl"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {card?.image ? (
        <Image
          src={card.image}
          alt={card.name || ""}
          fill
          className="object-cover transition-transform duration-500 "
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      ) : (
        <div className="absolute inset-0 bg-surface-2" aria-hidden />
      )}

      <div
        className="pointer-events-none absolute inset-0 top-70"
        style={{
          background:
            "linear-gradient(180deg, rgba(5, 78, 114, 0) 0%, #252C3A 100%)",
        }}
        aria-hidden
      />

      {card?.cityName ? (
        <p
          className={`${typography.body} absolute top-10 ${isRtl ? "right-5" : "left-5"} font-semibold text-white`}
          style={{ textShadow: "0 2px 8px rgba(0,0,0,0.45)" }}
        >
          {card.cityName}
        </p>
      ) : null}

      {/* Default labels — hide on hover when CTAs show */}
      <div
        className={`absolute inset-x-5 bottom-20 flex items-end justify-between gap-3 transition-all duration-500 group-hover:translate-y-3 group-hover:opacity-0`}
      >
        <h3
          className={`${typography.itemTitle} font-semibold text-white`}
          style={{ textShadow: "0 2px 8px rgba(0,0,0,0.45)" }}
        >
          {card?.name}
        </h3>
        {card?.tag ? (
          <span
            className={`${typography.body} shrink-0 font-medium text-white`}
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.45)" }}
          >
            {card.tag}
          </span>
        ) : null}
      </div>

      {/* Hover CTAs */}
      <div className="absolute inset-x-5 bottom-5 flex translate-y-4 flex-col items-center opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <Link
          href={stackedHref}
          className={`${typography.button} flex w-full items-center justify-center rounded-lg border border-primary-2 bg-primary-2 p-3 font-semibold text-white shadow-md transition-all hover:bg-[#D0C29C]`}
        >
          {exploreLabel}
        </Link>
        <Link
          href={magazineHref}
          className={`${typography.caption} mt-1 flex items-center justify-center gap-1 p-1 text-white transition-opacity hover:opacity-80`}
        >
          <BookOpenTextIcon size={20} weight="bold" aria-hidden />
          {exploreMagazineLabel}
        </Link>
      </div>
    </article>
  );
}
