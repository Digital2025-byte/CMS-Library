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
  showTitleDescription = true,
  showArrows = true,
}) => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { title, cards, hasContent } = useCarouselData(
    data,
    lang,
    posParams
  );

  const [slidesToShow, setSlidesToShow] = useState(() =>
    getCurrentSlidesToShow(cards.length)
  );

  useEffect(() => {
    const update = () =>
      setSlidesToShow(getCurrentSlidesToShow(cards.length, window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [cards.length]);

  // Reset index when language (and thus slide direction) changes
  useEffect(() => {
    setActiveIndex(0);
  }, [lang]);

  const handleBeforeChange = useCallback((_, next) => {
    setActiveIndex(next);
  }, []);

  const settings = useCarouselSettings(cards.length, handleBeforeChange);

  const handlePrev = useCallback(() => {
    sliderRef.current?.slickPrev();
  }, []);

  const handleNext = useCallback(() => {
    sliderRef.current?.slickNext();
  }, []);

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

  const maxIndex = Math.max(
    0,
    cards.length - Math.ceil(slidesToShow)
  );
  const canGoPrev = activeIndex > 0;
  const canGoNext = activeIndex < maxIndex;
  const progressSteps = maxIndex + 1;
  const progress = (Math.min(activeIndex, maxIndex) + 1) / progressSteps;

  return (
    <div aria-label={title || "Cards carousel"}>
      {showTitleDescription ? <CarouselHeader title={title} /> : null}

      <CarouselSlider
        sliderRef={sliderRef}
        settings={settings}
        cards={cards}
        lang={lang}
        cId={cId}
        activeIndex={activeIndex}
        slidesToShow={slidesToShow}
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
        progress={progress}
        showNavigation={showArrows}
      />
    </div>
  );
};

export default RelatedContentCarousel;
