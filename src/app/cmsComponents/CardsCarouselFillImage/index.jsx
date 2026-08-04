"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselHeader from "@/app/cmsComponents/RelatedContentCarousel/components/CarouselHeader";
import CarouselNavigation from "@/app/cmsComponents/RelatedContentCarousel/components/CarouselNavigation";
import {
  CardsCarouselFillImageInset,
} from "./components/CardsCarouselFillImageContainer";
import FillImageCarouselSlider from "./components/FillImageCarouselSlider";
import { useCarouselData } from "./hooks/useCarouselData";
import { useFillImageCarouselSettings } from "./hooks/useFillImageCarouselSettings";
import { getCurrentSlidesToShow } from "./utils/helpers";

const CardsCarouselFillImage = ({
  lang = "en",
  data,
  posParams = "gb",
  cId,
}) => {
  const sliderRef = useRef(null);
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

  useEffect(() => {
    setActiveIndex(0);
  }, [lang]);

  const handleBeforeChange = useCallback((_, next) => {
    setActiveIndex(next);
  }, []);

  const cappedSlides = Math.max(1, Math.min(slidesToShow, cards.length || 1));
  const settings = useFillImageCarouselSettings(
    cards.length,
    cappedSlides,
    handleBeforeChange
  );

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

  const maxIndex = Math.max(0, cards.length - cappedSlides);
  const canGoPrev = activeIndex > 0;
  const canGoNext = activeIndex < maxIndex;
  const showNavigation = cards.length > cappedSlides;

  return (
    <div aria-label={title || "Cards carousel"}>
      <CardsCarouselFillImageInset>
        <CarouselHeader title={title} description={description} />
      </CardsCarouselFillImageInset>

      {/* Edge-to-edge carousel */}
      <div className="m-0 w-screen max-w-[100vw] ms-[calc(50%-50vw)] px-0">
        <FillImageCarouselSlider
          sliderKey={`${lang}-${cappedSlides}`}
          sliderRef={sliderRef}
          settings={settings}
          cards={cards}
          lang={lang}
          cId={cId}
          onKeyDown={handleKeyDown}
        />
      </div>

      <CardsCarouselFillImageInset>
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
      </CardsCarouselFillImageInset>
    </div>
  );
};

export default CardsCarouselFillImage;
