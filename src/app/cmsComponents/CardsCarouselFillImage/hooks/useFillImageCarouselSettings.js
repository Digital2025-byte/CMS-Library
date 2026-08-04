import { useMemo } from "react";

/**
 * Desktop: 3 cards. Tablet: 2. Mobile: 1.
 * Slick stays LTR — Arabic opposite motion uses CSS mirror in the slider.
 */
export function useFillImageCarouselSettings(
  cardsCount = 0,
  slidesToShow = 3,
  onBeforeChange
) {
  return useMemo(() => {
    const capped = Math.max(1, Math.min(slidesToShow, cardsCount || 1));
    const tabletShow = Math.min(2, Math.max(cardsCount, 1));

    return {
      dots: false,
      arrows: false,
      infinite: false,
      speed: 500,
      slidesToShow: capped,
      slidesToScroll: 1,
      swipeToSlide: true,
      accessibility: true,
      autoplay: false,
      rtl: false,
      beforeChange: onBeforeChange,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: tabletShow,
            slidesToScroll: 1,
            infinite: false,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
          },
        },
      ],
    };
  }, [cardsCount, slidesToShow, onBeforeChange]);
}
