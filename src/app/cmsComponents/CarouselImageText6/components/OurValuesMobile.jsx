"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { typography } from "@/styles/typography";
import "slick-carousel/slick/slick.css";

export default function OurValuesMobile({ lang = "en", items = [], autoplay = true }) {
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
    // Slight padding so the previous/next cards peek in on both edges.
    centerPadding: "7%",
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
      className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {activeItem.imageUrl ? (
        <div className="absolute inset-0 z-0">
          <Image
            key={activeItem.imageUrl}
            src={activeItem.imageUrl}
            alt=""
            fill
            className="object-cover brightness-50 blur-md transition-all duration-700"
            sizes="100vw"
            quality={60}
            aria-hidden
          />
        </div>
      ) : null}

      <div className="our-values-slick z-10 w-full">
        <Slider ref={sliderRef} {...settings}>
          {items.map((item, index) => (
            <div key={`${item.title}-${index}`} className="px-2">
              <div
                className="slide-card relative overflow-hidden rounded-xl shadow-lg"
                dir={isRtl ? "rtl" : "ltr"}
              >
                <div className="relative h-[60vw] max-h-[280px]">
                  {item.imageUrl ? (
                    <Image
                      src={item.imageUrl}
                      alt={item.imageAlt || item.title || ""}
                      fill
                      className="object-cover"
                      sizes="100vw"
                      quality={75}
                      priority={index === 0}
                      draggable={false}
                    />
                  ) : null}
                  <div className="absolute inset-0 bg-black/10" />
                  {item.title ? (
                    <h3
                      className={`${typography.itemTitle} absolute top-8 start-4 max-w-28 font-semibold text-white`}
                      style={{ textShadow: "0 4px 8px rgb(0 0 0 / 0.45)" }}
                    >
                      {item.title}
                    </h3>
                  ) : null}
                </div>
                <div className="bg-secondary-2 p-5 text-white">
                  <p className={`${typography.body} text-white/80`}>
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="z-10 mt-5 flex items-center justify-center gap-6" dir="ltr">
        <button
          type="button"
          onClick={() => sliderRef.current?.slickPrev()}
          aria-label="Previous value"
          className="rounded-full border-2 border-white p-2 transition hover:bg-white/20"
        >
          <ArrowLeft className="text-lg text-white" weight="bold" />
        </button>

        <div className="flex gap-2">
          {items.map((_, i) => (
            <button
              key={`dot-${i}`}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => sliderRef.current?.slickGoTo(i)}
              className={`cursor-pointer rounded-full bg-primary-2 transition-all duration-300 ${
                i === currentSlide ? "h-2 w-5" : "h-2 w-2 opacity-40"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => sliderRef.current?.slickNext()}
          aria-label="Next value"
          className="rounded-full border-2 border-white p-2 transition hover:bg-white/20"
        >
          <ArrowRight className="text-lg text-white" weight="bold" />
        </button>
      </div>
    </div>
  );
}
