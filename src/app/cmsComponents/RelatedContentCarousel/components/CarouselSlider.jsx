"use client";

import dynamic from "next/dynamic";
import CarouselCard from "./CarouselCard";
import { getCardKey } from "../utils/helpers";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

function CarouselStyles() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
      .cards-carousel .slick-list {
        overflow: hidden;
        margin-inline: -0.5rem;
      }
      .cards-carousel .slick-slide {
        height: auto;
      }
      .cards-carousel .slick-slide > div {
        height: 100%;
        padding-inline: 0.5rem;
        box-sizing: border-box;
      }
      .cards-carousel .slick-track {
        display: flex !important;
        align-items: stretch;
      }
      .cards-carousel .slick-track .slick-slide {
        display: flex !important;
        height: auto;
      }
      .cards-carousel .slick-slide > div > div {
        width: 100%;
        height: 100%;
      }
      .cards-carousel .slick-slide:focus {
        outline: 2px solid #007bff;
        outline-offset: 2px;
      }

      /*
       * Arabic: mirror the list so slide motion is opposite of English,
       * then mirror each slide so card content stays readable.
       * Slick stays in LTR so the initial 3-card layout is correct.
       */
      .cards-carousel--rtl .slick-list {
        transform: scaleX(-1);
      }
      .cards-carousel--rtl .slick-slide {
        transform: scaleX(-1);
      }
    `,
      }}
    />
  );
}

export default function CarouselSlider({
  sliderRef,
  settings,
  cards,
  lang,
  cId,
  onKeyDown,
}) {
  const isRtl = lang === "ar";

  return (
    <div className="relative" onKeyDown={onKeyDown} tabIndex={0}>
      <CarouselStyles />
      <div
        className={`cards-carousel${isRtl ? " cards-carousel--rtl" : ""}`}
        role="region"
        aria-label="Carousel"
      >
        <Slider key={lang} ref={sliderRef} {...settings}>
          {cards.map((card, index) => (
            <div key={getCardKey(card, index)} className="h-full w-full">
              <CarouselCard card={card} lang={lang} cId={cId} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
