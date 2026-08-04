"use client";

import { useMemo } from "react";
import Slider from "react-slick";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import PageContentContainer from "@/components/layout/PageContentContainer";
import { typography } from "@/styles/typography";
import ServiceCard from "./ServiceCard";
import styles from "./ServiceCardsSlider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SliderArrow({ direction, onClick, isRtl, className = "" }) {
  const isNext = direction === "next";
  const Icon = isNext
    ? isRtl
      ? CaretLeftIcon
      : CaretRightIcon
    : isRtl
      ? CaretRightIcon
      : CaretLeftIcon;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isNext ? "Next services" : "Previous services"}
      className={[
        className,
        "flex! h-10 w-10 items-center justify-center rounded-full border border-secondary-2/15 bg-white text-secondary-2 shadow-md transition hover:bg-surface-1",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Icon size={18} weight="bold" aria-hidden />
    </button>
  );
}

export default function ServiceCardsSliderPanel({
  lang = "en",
  title,
  description,
  services = [],
  autoplay = true,
}) {
  const isRtl = lang === "ar";
  const count = services.length;

  const settings = useMemo(
    () => ({
      dots: false,
      arrows: count > 1,
      infinite: count > 1,
      speed: 500,
      slidesToShow: Math.min(3, count),
      slidesToScroll: 1,
      rtl: isRtl,
      autoplay: autoplay && count > 1,
      autoplaySpeed: 4000,
      pauseOnHover: true,
      nextArrow: <SliderArrow direction="next" isRtl={isRtl} />,
      prevArrow: <SliderArrow direction="prev" isRtl={isRtl} />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: Math.min(2, count),
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    }),
    [count, isRtl, autoplay]
  );

  if (!count) {
    return null;
  }

  return (
    <section
      className="w-full bg-white py-8 md:py-12"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <PageContentContainer>
        {(title || description) && (
          <div className="mb-6 md:mb-8">
            {title ? (
              <h2
                className={`${typography.sectionTitle} font-bold text-secondary-2`}
              >
                {title}
              </h2>
            ) : null}
            {description ? (
              <p
                className={`${typography.sectionDescription} mt-2 max-w-3xl text-icon`}
              >
                {description}
              </p>
            ) : null}
          </div>
        )}

        <div className={`relative ${styles.slider}`}>
          <Slider
            key={`${isRtl ? "rtl" : "ltr"}-${autoplay ? "on" : "off"}`}
            {...settings}
          >
            {services.map((service, index) => (
              <div key={`${service.title}-${index}`} className="h-full px-2.5 sm:px-3">
                <ServiceCard service={service} isRtl={isRtl} />
              </div>
            ))}
          </Slider>
        </div>
      </PageContentContainer>
    </section>
  );
}
