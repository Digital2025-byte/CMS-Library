"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import SliderSlide from "./SliderSlide";
import SliderArrowNav from "./SliderArrow";
import {
  DEFAULT_ARROW_THEME,
  resolveArrowTheme,
} from "../utils/arrowThemes";

const ReactSlick = dynamic(() => import("react-slick"), { ssr: false });

function SliderStyles() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
      /* Keep slick LTR so horizontal slide works under document dir=rtl */
      .slider-hero,
      .slider-hero .slick-slider,
      .slider-hero .slick-list,
      .slider-hero .slick-track {
        direction: ltr !important;
      }
      .slider-hero .slick-list {
        overflow: hidden;
      }
      .slider-hero .slick-slide {
        height: auto;
      }
      .slider-hero .slick-slide > div {
        height: 100%;
        width: 100%;
      }
      .slider-hero .slick-dots {
        bottom: 1.25rem;
        z-index: 2;
      }
      .slider-hero .slick-dots li button:before {
        color: #ffffff;
        opacity: 0.55;
        font-size: 10px;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.55);
      }
      .slider-hero .slick-dots li.slick-active button:before {
        color: var(--slider-theme-bg, var(--color-primary-1));
        opacity: 1;
      }
      /* Hide dots on mobile — arrows sit bottom-right instead */
      @media (max-width: 767px) {
        .slider-hero .slick-dots {
          display: none !important;
        }
      }
    `,
      }}
    />
  );
}

export default function SliderTrack({
  slides = [],
  settings = {},
  lang = "en",
  posParams = "gb",
  cId,
  sliderKey,
  showArrows = true,
  arrowTheme = DEFAULT_ARROW_THEME,
}) {
  const sliderRef = useRef(null);
  const theme = resolveArrowTheme(arrowTheme);

  if (!slides.length) {
    return null;
  }

  const { arrows: _ignoredArrows, prevArrow: _p, nextArrow: _n, ...slickSettings } =
    settings;

  return (
    <div
      className="slider-hero relative w-full"
      dir="ltr"
      role="region"
      aria-label="Hero slider"
      style={{
        "--slider-theme-bg": theme.bg,
        "--slider-theme-hover": theme.hoverBg,
        "--slider-theme-icon": theme.icon,
      }}
    >
      <SliderStyles />
      <ReactSlick ref={sliderRef} key={sliderKey ?? lang} {...slickSettings} arrows={false}>
        {slides.map((slide, index) => (
          <div key={slide.id || `slide-${index}`}>
            <SliderSlide
              slide={slide}
              lang={lang}
              posParams={posParams}
              cId={cId}
              priority={index === 0}
            />
          </div>
        ))}
      </ReactSlick>

      {showArrows ? (
        <SliderArrowNav
          onPrev={() => sliderRef.current?.slickPrev()}
          onNext={() => sliderRef.current?.slickNext()}
          arrowTheme={arrowTheme}
        />
      ) : null}
    </div>
  );
}
