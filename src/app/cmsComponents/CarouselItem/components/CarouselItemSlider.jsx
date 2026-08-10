"use client";

import dynamic from "next/dynamic";
import CustomCard from "@/components/ui/CustomCard";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

function resolveTakeUrl(card, lang, posParams) {
  const raw = card?.takeATripUrl || "";
  if (!raw || raw === "#") return raw || "#";
  if (/^https?:\/\//i.test(raw) || raw.startsWith(`/${posParams}/`)) {
    return raw;
  }
  return `/${posParams}/${lang}/our-destinations${raw.startsWith("/") ? raw : `/${raw}`}`;
}

export default function CarouselItemSlider({
  sliderRef,
  settings,
  destinations = [],
  lang = "en",
  posParams = "gb",
  cId,
}) {
  return (
    <div className="z-10 w-full px-2 py-8">
      <Slider ref={sliderRef} {...settings}>
        {destinations.map((card, index) => (
          <div key={`${card.cityName}-${card.iataCode || index}`} className="px-2">
            <CustomCard
              ImageUrl={card.imageUrl}
              IATACode={card.iataCode}
              CityName={card.cityName}
              CountryName={card.countryName}
              TakeUrl={resolveTakeUrl(card, lang, posParams)}
              discoverLabel={card.discoverLabel}
              lang={lang}
              cId={cId}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
