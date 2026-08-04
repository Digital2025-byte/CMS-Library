"use client";

import dynamic from "next/dynamic";
import FillImageCard from "./FillImageCard";
import { getCardKey } from "../utils/helpers";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

function CarouselStyles() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
      .cards-carousel-fill .slick-list {
        overflow: hidden;
        margin: 0;
        padding-block: 0 !important;
        padding-inline: clamp(12px, 2vw, 20px) !important;
      }
      .cards-carousel-fill .slick-track {
        display: flex !important;
        align-items: stretch;
        margin: 0 !important;
      }
      .cards-carousel-fill .slick-slide {
        height: auto;
        float: none;
        margin: 0 !important;
        padding-block: 0 !important;
        padding-inline: 9px !important;
      }
      .cards-carousel-fill .slick-slide > div {
        height: 100%;
        display: flex;
      }
      .cards-carousel-fill .slick-slide > div > div {
        width: 100%;
        display: flex;
      }
      .cards-carousel-fill:focus-visible {
        outline: 2px solid #007bff;
        outline-offset: 2px;
      }

      /* Arabic: opposite slide motion without slick rtl layout bugs */
      .cards-carousel-fill--rtl .slick-list {
        transform: scaleX(-1);
      }
      .cards-carousel-fill--rtl .slick-slide {
        transform: scaleX(-1);
      }
    `,
      }}
    />
  );
}

export default function FillImageCarouselSlider({
  sliderKey,
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
        className={`cards-carousel-fill${isRtl ? " cards-carousel-fill--rtl" : ""}`}
        role="region"
        aria-label="Carousel"
      >
        <Slider key={sliderKey ?? lang} ref={sliderRef} {...settings}>
          {cards.map((card, index) => (
            <div key={getCardKey(card, index)} className="h-full">
              <FillImageCard card={card} lang={lang} cId={cId} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
