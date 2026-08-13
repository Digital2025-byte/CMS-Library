"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { typography } from "@/styles/typography";

export default function FlightFareCard({
  item,
  className = "",
  size,
  imageIndex = 0,
}) {
  const { t } = useTranslation();

  if (!item) {
    return null;
  }

  const sizeClass =
    size === "TALL" ? "lg:row-span-2" : size === "WIDE" ? "lg:col-span-2" : "";
  const images = item?.images || [];
  const safeIndex = Math.min(imageIndex, Math.max(0, images.length - 1));
  const image = images[safeIndex] || images[0];

  return (
    <div
      className={[
        "group relative min-w-0 overflow-hidden rounded-2xl",
        "bg-slate-100 shadow-sm transition hover:shadow-md",
        sizeClass,
        className,
      ].join(" ")}
    >
      <div className="absolute inset-0">
        {image?.url ? (
          <Image
            src={image.url}
            alt={item?.cityName || image?.alt || ""}
            fill
            className="object-cover transition duration-300 group-hover:scale-[1.03]"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 46vw, 80vw"
          />
        ) : null}
        <div className="absolute bottom-0 left-0 right-0 h-24.25 w-full bg-secondary-2/50 shadow-[0_4px_6px_0_rgba(33,37,41,0.20),0_0_1px_0_rgba(33,37,41,0.32)] blur-2xl" />
      </div>

      <div className="absolute top-3 end-3 z-10">
        <span
          className={`${typography.caption} rounded-full bg-secondary-2/25 px-2.5 py-1 font-medium text-white backdrop-blur`}
        >
          {t("flightFares.oneWay")}
        </span>
      </div>

      <div className="relative z-10 flex h-full flex-col justify-end p-4">
        <div className="mb-1 flex items-center gap-2">
          {item.isNew ? (
            <span
              className={`${typography.caption} inline-flex items-center gap-1 rounded-full bg-secondary-2/25 px-2 py-1 font-medium text-white backdrop-blur`}
            >
              {t("flightFares.new")} <span aria-hidden="true">★</span>
            </span>
          ) : null}
        </div>

        <h3
          className={`${typography.itemTitle} font-bold break-words text-primary-3`}
        >
          {item.cityName}
          {item.IATACode ? ` (${item.IATACode})` : ""}
        </h3>
        <p
          className={`${typography.itemDescription} mt-1 font-medium break-words text-white/90`}
        >
          {t("flightFares.economyFrom", {
            price: item.price,
            currency: item.currency,
          })}
        </p>
      </div>
    </div>
  );
}
