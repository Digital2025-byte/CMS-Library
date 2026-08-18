"use client";

import dynamic from "next/dynamic";
import CustomCard from "@/components/ui/CustomCard";
import {
  CARD_RADIUS_CLASS,
  DEFAULT_CAROUSEL_ITEM_STYLE,
} from "../utils/style";

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
  showCardImage = DEFAULT_CAROUSEL_ITEM_STYLE.showCardImage,
  showCity = DEFAULT_CAROUSEL_ITEM_STYLE.showCity,
  showIata = DEFAULT_CAROUSEL_ITEM_STYLE.showIata,
  showCountry = DEFAULT_CAROUSEL_ITEM_STYLE.showCountry,
  showOverlay = DEFAULT_CAROUSEL_ITEM_STYLE.showOverlay,
  showHoverDim = DEFAULT_CAROUSEL_ITEM_STYLE.showHoverDim,
  showButton = DEFAULT_CAROUSEL_ITEM_STYLE.showButton,
  cardRadius = DEFAULT_CAROUSEL_ITEM_STYLE.cardRadius,
  cityColor = DEFAULT_CAROUSEL_ITEM_STYLE.cityColor,
  countryColor = DEFAULT_CAROUSEL_ITEM_STYLE.countryColor,
  overlayColor = DEFAULT_CAROUSEL_ITEM_STYLE.overlayColor,
  buttonBg = DEFAULT_CAROUSEL_ITEM_STYLE.buttonBg,
  buttonText = DEFAULT_CAROUSEL_ITEM_STYLE.buttonText,
}) {
  const radiusClass =
    CARD_RADIUS_CLASS[cardRadius] ?? CARD_RADIUS_CLASS.lg;

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
              imageAlt={card.imageAlt}
              lang={lang}
              cId={cId}
              gradient={showOverlay}
              showImage={showCardImage}
              showCity={showCity}
              showIata={showIata}
              showCountry={showCountry}
              showButton={showButton}
              showHoverDim={showHoverDim}
              cardRadiusClass={`${radiusClass} shadow-lg`}
              cityColor={cityColor}
              countryColor={countryColor}
              overlayColor={overlayColor}
              buttonBg={buttonBg}
              buttonText={buttonText}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
