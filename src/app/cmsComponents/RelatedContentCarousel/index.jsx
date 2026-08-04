"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselHeader from "./components/CarouselHeader";
import CarouselNavigation from "./components/CarouselNavigation";
import CarouselSlider from "./components/CarouselSlider";
import { useCarouselData } from "./hooks/useCarouselData";
import { useCarouselSettings } from "./hooks/useCarouselSettings";
import { getCurrentSlidesToShow } from "./utils/helpers";

const RelatedContentCarousel = ({
  lang = "en",
  data,
  posParams = "gb",
  cId,
}) => {
  const sliderRef = useRef(null);
  const isRtl = lang === "ar";
  const [activeIndex, setActiveIndex] = useState(0);

  const { title, description, cards, hasContent } = useCarouselData(
    data,
    lang,
    posParams
  );

  const [slidesToShow, setSlidesToShow] = useState(() =>
    getCurrentSlidesToShow(cards.length)
  );

  useEffect(() => {
    const update = () => setSlidesToShow(getCurrentSlidesToShow(cards.length));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [cards.length]);

  const handleBeforeChange = useCallback((_, next) => {
    setActiveIndex(next);
  }, []);

  const settings = useCarouselSettings(
    cards.length,
    isRtl,
    handleBeforeChange
  );

  const handlePrev = useCallback(() => {
    if (isRtl) sliderRef.current?.slickNext();
    else sliderRef.current?.slickPrev();
  }, [isRtl]);

  const handleNext = useCallback(() => {
    if (isRtl) sliderRef.current?.slickPrev();
    else sliderRef.current?.slickNext();
  }, [isRtl]);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        handlePrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        handleNext();
      }
    },
    [handlePrev, handleNext]
  );

  if (!hasContent || !cards.length) {
    return null;
  }

  const maxIndex = Math.max(0, cards.length - slidesToShow);
  // Index bounds (slickPrev / slickNext). In RTL the left button calls slickNext
  // and the right button calls slickPrev, so enabled states must follow the handlers.
  const canSlickPrev = activeIndex > 0;
  const canSlickNext = activeIndex < maxIndex;
  const canGoPrev = isRtl ? canSlickNext : canSlickPrev;
  const canGoNext = isRtl ? canSlickPrev : canSlickNext;
  const showNavigation = cards.length > slidesToShow;

  return (
    <div aria-label={title || "Cards carousel"}>
      <CarouselHeader title={title} description={description} />

      <CarouselSlider
        sliderRef={sliderRef}
        settings={settings}
        cards={cards}
        lang={lang}
        cId={cId}
        onKeyDown={handleKeyDown}
      />

      <CarouselNavigation
        lang={lang}
        onPrev={handlePrev}
        onNext={handleNext}
        canGoPrev={canGoPrev}
        canGoNext={canGoNext}
        currentIndex={activeIndex}
        totalSlides={cards.length}
        showNavigation={showNavigation}
      />
    </div>
  );
};

export default RelatedContentCarousel;
