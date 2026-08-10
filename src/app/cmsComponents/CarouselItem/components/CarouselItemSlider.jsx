"use client";

import dynamic from "next/dynamic";
import CarouselItemCard from "./CarouselItemCard";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

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
          <div key={`${card.cityName}-${index}`} className="px-2">
            <CarouselItemCard
              card={card}
              lang={lang}
              posParams={posParams}
              cId={cId}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
