"use client";

import { useRef, useState } from "react";
import dynamic from "next/dynamic";
import SliderSlide from "./SliderSlide";
import SliderArrowNav from "./SliderArrow";
import SliderProgressNav from "./SliderProgressNav";
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
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const colors = resolveTheme(theme);

  if (!slides.length) {
    return null;
  }

  const {
    arrows: _ignoredArrows,
    prevArrow: _p,
    nextArrow: _n,
    dots: showProgress = true,
    autoplaySpeed = 5000,
    ...slickSettings
  } = settings;

  const togglePause = () => {
    const nextPaused = !isPaused;
    setIsPaused(nextPaused);
    if (nextPaused) {
      sliderRef.current?.slickPause?.();
    } else {
      sliderRef.current?.slickPlay?.();
    }
  };

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
        dots={false}
        autoplay={!isPaused && slickSettings.autoplay !== false}
        autoplaySpeed={autoplaySpeed}
        beforeChange={(_, next) => setActiveIndex(next)}
        afterChange={(current) => setActiveIndex(current)}
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
              isActive={index === activeIndex}
              isPaused={isPaused}
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

      {showProgress !== false && slides.length > 1 ? (
        <SliderProgressNav
          slideCount={slides.length}
          activeIndex={activeIndex}
          autoplaySpeed={autoplaySpeed}
          isPaused={isPaused}
          onTogglePause={togglePause}
          onGoTo={(index) => sliderRef.current?.slickGoTo?.(index)}
          theme={theme}
        />
      ) : null}
    </div>
  );
}
