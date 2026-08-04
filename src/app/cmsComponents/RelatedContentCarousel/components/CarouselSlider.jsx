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
  return (
    <div className="relative" onKeyDown={onKeyDown} tabIndex={0}>
      <CarouselStyles />
      <div className="cards-carousel" role="region" aria-label="Carousel">
        <Slider ref={sliderRef} {...settings}>
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
