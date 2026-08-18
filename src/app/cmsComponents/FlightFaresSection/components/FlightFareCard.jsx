"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { typography } from "@/styles/typography";
import { getThemeColorCss } from "@/styles/themeColors";
import { formatFarePrice, isUsableImageSrc } from "../utils/helpers";
import { CARD_RADIUS_CLASS, DEFAULT_FLIGHT_FARES_STYLE } from "../utils/style";

export default function FlightFareCard({
  item,
  className = "",
  size,
  imageIndex = 0,
  oneWayLabel,
  newLabel,
  fromTemplate,
  showImage = DEFAULT_FLIGHT_FARES_STYLE.showImage,
  showOverlay = DEFAULT_FLIGHT_FARES_STYLE.showOverlay,
  showOneWay = DEFAULT_FLIGHT_FARES_STYLE.showOneWay,
  showNew = DEFAULT_FLIGHT_FARES_STYLE.showNew,
  showCity = DEFAULT_FLIGHT_FARES_STYLE.showCity,
  showPrice = DEFAULT_FLIGHT_FARES_STYLE.showPrice,
  cardRadius = DEFAULT_FLIGHT_FARES_STYLE.cardRadius,
  overlayColor = DEFAULT_FLIGHT_FARES_STYLE.overlayColor,
  cityColor = DEFAULT_FLIGHT_FARES_STYLE.cityColor,
  priceColor = DEFAULT_FLIGHT_FARES_STYLE.priceColor,
  badgeColor = DEFAULT_FLIGHT_FARES_STYLE.badgeColor,
  badgeText = DEFAULT_FLIGHT_FARES_STYLE.badgeText,
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
  const imageSrc = image?.url;
  const radiusClass = CARD_RADIUS_CLASS[cardRadius] ?? CARD_RADIUS_CLASS.lg;
  const overlayCss = getThemeColorCss(overlayColor, "secondary-2");
  const cityCss = getThemeColorCss(cityColor, "primary-3");
  const priceCss = getThemeColorCss(priceColor, "white");
  const badgeCss = getThemeColorCss(badgeColor, "secondary-2");
  const badgeTextCss = getThemeColorCss(badgeText, "white");
  const priceLine = formatFarePrice(
    fromTemplate,
    item.price,
    item.currency,
    t("flightFares.economyFrom", {
      price: item.price,
      currency: item.currency,
    })
  );

  return (
    <div
      className={[
        "group relative min-w-0 overflow-hidden",
        radiusClass,
        "bg-slate-100 shadow-sm transition hover:shadow-md",
        sizeClass,
        className,
      ].join(" ")}
    >
      <div className="absolute inset-0">
        {showImage && isUsableImageSrc(imageSrc) ? (
          <Image
            src={imageSrc}
            alt={item?.cityName || image?.alt || ""}
            fill
            className="object-cover transition duration-300 group-hover:scale-[1.03]"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 46vw, 80vw"
          />
        ) : null}
        {showOverlay ? (
          <div
            className="absolute bottom-0 left-0 right-0 h-24.25 w-full shadow-[0_4px_6px_0_rgba(33,37,41,0.20),0_0_1px_0_rgba(33,37,41,0.32)] blur-2xl"
            style={{
              backgroundColor: `color-mix(in srgb, ${overlayCss} 50%, transparent)`,
            }}
          />
        ) : null}
      </div>

      {showOneWay ? (
        <div className="absolute top-3 end-3 z-10">
          <span
            className={`${typography.caption} rounded-full px-2.5 py-1 font-medium backdrop-blur`}
            style={{
              backgroundColor: `color-mix(in srgb, ${badgeCss} 25%, transparent)`,
              color: badgeTextCss,
            }}
          >
            {oneWayLabel || t("flightFares.oneWay")}
          </span>
        </div>
      ) : null}

      <div className="relative z-10 flex h-full flex-col justify-end p-4">
        {showNew && item.isNew ? (
          <div className="mb-1 flex items-center gap-2">
            <span
              className={`${typography.caption} inline-flex items-center gap-1 rounded-full px-2 py-1 font-medium backdrop-blur`}
              style={{
                backgroundColor: `color-mix(in srgb, ${badgeCss} 25%, transparent)`,
                color: badgeTextCss,
              }}
            >
              {newLabel || t("flightFares.new")}{" "}
              <span aria-hidden="true">★</span>
            </span>
          </div>
        ) : null}

        {showCity ? (
          <h3
            className={`${typography.itemTitle} font-bold wrap-break-word`}
            style={{ color: cityCss }}
          >
            {item.cityName}
            {item.IATACode ? ` (${item.IATACode})` : ""}
          </h3>
        ) : null}
        {showPrice ? (
          <p
            className={`${typography.itemDescription} mt-1 font-medium wrap-break-word`}
            style={{
              color: `color-mix(in srgb, ${priceCss} 90%, transparent)`,
            }}
          >
            {priceLine}
          </p>
        ) : null}
      </div>
    </div>
  );
}
