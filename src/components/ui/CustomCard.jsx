"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import { typography } from "@/styles/typography";
import { withCampaignPath } from "@/utils/withCampaignPath";

export default function CustomCard({
  ImageUrl,
  IATACode,
  CityName,
  CountryName,
  TakeUrl,
  gradient = true,
  hoverEffect = true,
  hoverBackGround = false,
  gradientHeight = "",
  lang = "en",
  cId,
  discoverLabel,
}) {
  if (!ImageUrl || String(ImageUrl).trim() === "") {
    return null;
  }

  const href = withCampaignPath(TakeUrl || "#", cId);
  const label =
    discoverLabel ||
    `${lang === "ar" ? "اكتشف" : "Discover"} ${CityName || ""}`.trim();

  return (
    <div className="group relative h-full overflow-hidden rounded-2xl shadow-lg sm:rounded-3xl">
      <div className="relative aspect-3/4 w-full max-h-[380px] min-h-[280px]">
        <Image
          src={ImageUrl}
          alt={CityName ? `${CityName} destination` : "Destination"}
          fill
          className={`object-cover ${
            hoverEffect
              ? "transition-transform duration-500 group-hover:scale-105"
              : ""
          }`}
          sizes="(max-width: 1024px) 100vw, 33vw"
          quality={75}
        />

        <div
          className={`absolute bottom-0 h-[45%] w-full ${gradientHeight} ${
            gradient ? "bg-gradient-to-t from-secondary-2/80 via-secondary-2/40 to-transparent" : ""
          }`}
        />

        <div
          className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${
            hoverBackGround
              ? "opacity-100"
              : "opacity-0 lg:group-hover:opacity-100"
          }`}
        />
      </div>

      <div
        className="absolute inset-x-0 bottom-0  lg:bottom-10 p-4 sm:p-5"
        dir={lang === "ar" ? "rtl" : "ltr"}
      >
        <div
          className={`${typography.itemTitle} font-semibold text-50 transition-all duration-600 opacity-0 translate-y-0 scale-100 lg:opacity-100 lg:group-hover:opacity-0 lg:group-hover:scale-70 lg:group-hover:-translate-y-20`}
          style={{ textShadow: "0 4px 8px rgb(0 0 0 / 0.45)" }}
        >
          {CityName}
          {IATACode ? ` (${IATACode})` : ""}
        </div>

        <div className="absolute inset-x-4 bottom-4 flex translate-y-0 flex-col items-center justify-center opacity-100 transition-all delay-100 duration-500 sm:inset-x-5 sm:bottom-5 lg:translate-y-6 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
          <Button
            label={label}
            href={href}
            cId={cId}
            fullWidth
            className="justify-center border-primary-2 bg-primary-2 px-3 py-3 shadow-md hover:bg-primary-3 hover:opacity-100"
          />
          {CountryName ? (
            <span
              className={`${typography.caption} mt-1 flex items-center justify-center text-50`}
            >
              {CountryName}
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
}
