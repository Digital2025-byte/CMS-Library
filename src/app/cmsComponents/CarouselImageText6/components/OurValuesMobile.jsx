"use client";

import { useRef, useState } from "react";
import Slider from "react-slick";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { typography } from "@/styles/typography";
import "slick-carousel/slick/slick.css";
import styles from "./OurValuesMobile.module.css";

export default function OurValuesMobile({
  lang = "en",
  items = [],
  autoplay = true,
}) {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!items.length) {
    return null;
  }

  const isRtl = lang === "ar";
  const activeItem = items[currentSlide] || {};
  const canLoop = items.length > 1;

  const settings = {
    dots: false,
    arrows: false,
    infinite: canLoop,
    centerMode: true,
    centerPadding: "14%",
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    swipeToSlide: true,
    autoplay: autoplay && canLoop,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    rtl: isRtl,
    beforeChange: (_, next) => setCurrentSlide(next),
  };

  return (
    <div
      className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden pb-8"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {activeItem.imageUrl ? (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            key={activeItem.imageUrl}
            src={activeItem.imageUrl}
            alt=""
            className="h-full w-full scale-110 object-cover brightness-[0.35] blur-md transition-all duration-700"
            aria-hidden
          />
          <div className="absolute inset-0 bg-secondary-2/50" />
        </div>
      ) : (
        <div className="absolute inset-0 z-0 bg-secondary-2" />
      )}

      <div className={`z-10 w-full ${styles.slider}`}>
        <Slider ref={sliderRef} {...settings}>
          {items.map((item, index) => {
            const isActive = index === currentSlide;

            return (
              <div key={`${item.title}-${index}`} className="px-1.5">
                <div
                  className={`overflow-hidden rounded-[1.75rem] bg-secondary-2 shadow-xl transition-all duration-500 sm:rounded-[2rem] ${
                    isActive
                      ? "scale-100 opacity-100"
                      : "scale-[0.94] opacity-80"
                  }`}
                  dir={isRtl ? "rtl" : "ltr"}
                >
                  <div className="relative aspect-4/3 w-full overflow-hidden sm:aspect-[5/4]">
                    {item.imageUrl ? (
                      <img
                        src={item.imageUrl}
                        alt={item.imageAlt || item.title || ""}
                        className="h-full w-full object-cover"
                        draggable={false}
                      />
                    ) : null}

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-transparent" />

                    {item.title ? (
                      <h3
                        className={`${typography.itemTitle} absolute top-5 start-5 z-10 max-w-[70%] font-bold text-white sm:top-6 sm:start-6`}
                        style={{ textShadow: "0 4px 8px rgb(0 0 0 / 0.45)" }}
                      >
                        {item.title}
                      </h3>
                    ) : null}
                  </div>

                  {item.description ? (
                    <div className="px-5 py-5 sm:px-6 sm:py-6">
                      <p
                        className={`${typography.body} leading-relaxed text-white`}
                      >
                        {item.description}
                      </p>
                    </div>
                  ) : null}
                </div>
              </div>
            );
          })}
        </Slider>
      </div>

      <div
        className="z-10 mt-6 flex items-center justify-center gap-5"
        dir="ltr"
      >
        <button
          type="button"
          onClick={() => sliderRef.current?.slickPrev()}
          aria-label="Previous value"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white transition hover:bg-white/15"
        >
          <ArrowLeft size={18} className="text-white" weight="regular" />
        </button>

        <div className="flex items-center gap-2">
          {items.map((_, i) => (
            <button
              key={`dot-${i}`}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => sliderRef.current?.slickGoTo(i)}
              className={`rounded-full bg-primary-2 transition-all duration-300 ${
                i === currentSlide ? "h-2 w-5" : "h-2 w-2 opacity-40"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => sliderRef.current?.slickNext()}
          aria-label="Next value"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white transition hover:bg-white/15"
        >
          <ArrowRight size={18} className="text-white" weight="regular" />
        </button>
      </div>
    </div>
  );
}
