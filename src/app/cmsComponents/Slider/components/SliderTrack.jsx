"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import SliderSlide from "./SliderSlide";
import SliderArrowNav from "./SliderArrow";
import { DEFAULT_THEME, resolveTheme } from "../utils/themes";

const ReactSlick = dynamic(() => import("react-slick"), { ssr: false });

export default function SliderTrack({
  slides = [],
  settings = {},
  lang = "en",
  posParams = "gb",
  cId,
  sliderKey,
  showArrows = true,
  theme = DEFAULT_THEME,
  imageOverlay,
}) {
  const sliderRef = useRef(null);
  const colors = resolveTheme(theme);

  if (!slides.length) {
    return null;
  }

  const { arrows: _ignoredArrows, prevArrow: _p, nextArrow: _n, ...slickSettings } =
    settings;

  return (
    <div
      className="slider-hero relative w-full overflow-hidden"
      dir="ltr"
      role="region"
      aria-label="Hero slider"
      style={{
        "--slider-theme-bg": colors.bg,
        "--slider-theme-hover": colors.hoverBg,
        "--slider-theme-icon": colors.icon,
      }}
    >
      <ReactSlick
        ref={sliderRef}
        key={sliderKey ?? lang}
        className="slider-hero-slick !mb-0"
        {...slickSettings}
        arrows={false}
      >
        {slides.map((slide, index) => (
          <div key={slide.id || `slide-${index}`}>
            <SliderSlide
              slide={slide}
              lang={lang}
              posParams={posParams}
              cId={cId}
              priority={index === 0}
              imageOverlay={imageOverlay}
            />
          </div>
        ))}
      </ReactSlick>

      {showArrows ? (
        <SliderArrowNav
          onPrev={() => sliderRef.current?.slickPrev()}
          onNext={() => sliderRef.current?.slickNext()}
          theme={theme}
        />
      ) : null}
    </div>
  );
}
