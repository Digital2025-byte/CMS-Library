"use client";

import { useRef, useState } from "react";
import Slider from "react-slick";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { typography } from "@/styles/typography";
import { getThemeColorCss } from "@/styles/themeColors";
import { isUsableImageSrc } from "../utils/helpers";
import {
  CARD_RADIUS_CLASS,
  DEFAULT_CAROUSEL_IMAGE_TEXT_STYLE,
} from "../utils/style";
import "slick-carousel/slick/slick.css";
import styles from "./OurValuesMobile.module.css";

export default function OurValuesMobile({
  lang = "en",
  items = [],
  showItemTitle = true,
  showItemDescription = true,
  overlayColor = DEFAULT_CAROUSEL_IMAGE_TEXT_STYLE.overlayColor,
  cardBg = DEFAULT_CAROUSEL_IMAGE_TEXT_STYLE.cardBg,
  cardRadius = DEFAULT_CAROUSEL_IMAGE_TEXT_STYLE.cardRadius,
  itemTitleColor = DEFAULT_CAROUSEL_IMAGE_TEXT_STYLE.itemTitleColor,
  itemBodyColor = DEFAULT_CAROUSEL_IMAGE_TEXT_STYLE.itemBodyColor,
}) {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!items.length) {
    return null;
  }

  const isRtl = lang === "ar";
  const activeItem = items[currentSlide] || {};
  const canLoop = items.length > 1;
  const canShowActiveImage = isUsableImageSrc(activeItem.imageUrl);
  const radiusClass = CARD_RADIUS_CLASS[cardRadius] ?? CARD_RADIUS_CLASS.lg;
  const overlayCss = getThemeColorCss(overlayColor, "secondary-2");
  const cardBgCss = getThemeColorCss(cardBg, "secondary-2");

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
    autoplay: canLoop,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    rtl: isRtl,
    beforeChange: (_, next) => setCurrentSlide(next),
  };

  return (
    <div
      className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden pb-8"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {canShowActiveImage ? (
        <div className={styles.bg} aria-hidden>
          <img
            key={`${activeItem.imageUrl}-sharp`}
            src={activeItem.imageUrl}
            alt=""
            className={styles.bgImageSharp}
          />
          <img
            key={`${activeItem.imageUrl}-mid`}
            src={activeItem.imageUrl}
            alt=""
            className={styles.bgImageMid}
          />
          <img
            key={`${activeItem.imageUrl}-strong`}
            src={activeItem.imageUrl}
            alt=""
            className={styles.bgImageStrong}
          />
          <div className={styles.bgTint} />
        </div>
      ) : (
        <div
          className="absolute inset-0 z-0"
          style={{ backgroundColor: overlayCss }}
        />
      )}

      <div className={`z-10 w-full ${styles.slider}`}>
        <Slider ref={sliderRef} {...settings}>
          {items.map((item, index) => {
            const isActive = index === currentSlide;
            const canShowImage = isUsableImageSrc(item.imageUrl);

            return (
              <div key={`${item.title}-${index}`} className="px-1.5">
                <div
                  className={`overflow-hidden shadow-xl transition-all duration-500 ${radiusClass} ${
                    isActive
                      ? "scale-100 opacity-100"
                      : "scale-[0.94] opacity-80"
                  }`}
                  style={{ backgroundColor: cardBgCss }}
                  dir={isRtl ? "rtl" : "ltr"}
                >
                  <div className="relative aspect-[3/4] w-full overflow-hidden sm:aspect-[4/5]">
                    {canShowImage ? (
                      <img
                        src={item.imageUrl}
                        alt={item.imageAlt || item.title || ""}
                        className="h-full w-full object-cover"
                        draggable={false}
                      />
                    ) : (
                      <div
                        className="h-full w-full"
                        style={{ backgroundColor: overlayCss }}
                      />
                    )}

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-transparent" />

                    {showItemTitle && item.title ? (
                      <h3
                        className={`${typography.itemTitle} absolute top-5 start-5 z-10 max-w-[70%] font-medium sm:top-6 sm:start-6`}
                        style={{
                          color: getThemeColorCss(itemTitleColor, "white"),
                        }}
                      >
                        {item.title}
                      </h3>
                    ) : null}

                    {showItemDescription && item.description ? (
                      <div
                        className={`${styles.descriptionPanel} absolute inset-x-0 bottom-0 z-10 px-5 py-5 sm:px-6 sm:py-6`}
                      >
                        <p
                          className={`${typography.body} leading-relaxed`}
                          style={{
                            color: getThemeColorCss(itemBodyColor, "white"),
                          }}
                        >
                          {item.description}
                        </p>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>

      {canLoop ? (
        <div
          className="z-10 mt-6 flex items-center justify-center gap-5"
          dir="ltr"
        >
          <button
            type="button"
            onClick={() => sliderRef.current?.slickPrev()}
            aria-label="Previous value"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white transition hover:bg-white/15"
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
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white transition hover:bg-white/15"
          >
            <ArrowRight size={18} className="text-white" weight="regular" />
          </button>
        </div>
      ) : null}
    </div>
  );
}
