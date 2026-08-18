"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselHeader from "@/app/cmsComponents/RelatedContentCarousel/components/CarouselHeader";
import {
  CardsCarouselFillImageInset,
} from "./components/CardsCarouselFillImageContainer";
import FillImageCarouselNavigation from "./components/FillImageCarouselNavigation";
import FillImageCarouselSlider from "./components/FillImageCarouselSlider";
import { useCarouselData } from "./hooks/useCarouselData";
import { useFillImageCarouselSettings } from "./hooks/useFillImageCarouselSettings";
import {
  getMaxSlideIndex,
  isAtLastStep,
  usePeekSlideWidth,
} from "./hooks/usePeekSlideWidth";
import { DEFAULT_FILL_IMAGE_STYLE } from "./utils/style";

const CardsCarouselFillImage = ({
  lang = "en",
  data,
  posParams = "gb",
  cId,
  showTitle = DEFAULT_FILL_IMAGE_STYLE.showTitle,
  showDescription = DEFAULT_FILL_IMAGE_STYLE.showDescription,
  showArrows = DEFAULT_FILL_IMAGE_STYLE.showArrows,
  showCardImage = DEFAULT_FILL_IMAGE_STYLE.showCardImage,
  showCardTitle = DEFAULT_FILL_IMAGE_STYLE.showCardTitle,
  showCardDescription = DEFAULT_FILL_IMAGE_STYLE.showCardDescription,
  showOverlay = DEFAULT_FILL_IMAGE_STYLE.showOverlay,
  showButton = DEFAULT_FILL_IMAGE_STYLE.showButton,
  titleAlign = DEFAULT_FILL_IMAGE_STYLE.titleAlign,
  titleColor = DEFAULT_FILL_IMAGE_STYLE.titleColor,
  descriptionColor = DEFAULT_FILL_IMAGE_STYLE.descriptionColor,
  cardRadius = DEFAULT_FILL_IMAGE_STYLE.cardRadius,
  cardTitleColor = DEFAULT_FILL_IMAGE_STYLE.cardTitleColor,
  cardBodyColor = DEFAULT_FILL_IMAGE_STYLE.cardBodyColor,
  overlayColor = DEFAULT_FILL_IMAGE_STYLE.overlayColor,
  buttonBg = DEFAULT_FILL_IMAGE_STYLE.buttonBg,
  buttonText = DEFAULT_FILL_IMAGE_STYLE.buttonText,
  buttonOnFill = DEFAULT_FILL_IMAGE_STYLE.buttonOnFill,
  navColor = DEFAULT_FILL_IMAGE_STYLE.navColor,
}) => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { edgePad, visibleCount } = usePeekSlideWidth();

  const { title, description, cards, hasContent } = useCarouselData(
    data,
    lang,
    posParams
  );

  const maxIndex = getMaxSlideIndex(cards.length, visibleCount);
  const atStart = activeIndex <= 0;
  const atEnd = isAtLastStep(activeIndex, cards.length, visibleCount);
  const canGoPrev = !atStart;
  const canGoNext = !atEnd && maxIndex > 0;

  useEffect(() => {
    setActiveIndex(0);
  }, [lang]);

  const syncIndex = useCallback(
    (index) => {
      const next = Math.max(0, Math.min(Number(index) || 0, maxIndex));
      setActiveIndex(next);
    },
    [maxIndex]
  );

  const handleBeforeChange = useCallback(
    (_, next) => {
      syncIndex(next);
    },
    [syncIndex]
  );

  const handleAfterChange = useCallback(
    (current) => {
      syncIndex(current);
    },
    [syncIndex]
  );

  const settings = useFillImageCarouselSettings(
    cards.length,
    visibleCount,
    handleBeforeChange,
    handleAfterChange
  );

  const handlePrev = useCallback(() => {
    if (atStart) return;
    const prevIndex = Math.max(0, Math.ceil(activeIndex) - 1);
    sliderRef.current?.slickGoTo(prevIndex);
    setActiveIndex(prevIndex);
  }, [atStart, activeIndex]);

  const handleNext = useCallback(() => {
    if (atEnd) return;
    const nextIndex = Math.min(maxIndex, Math.floor(activeIndex) + 1);
    sliderRef.current?.slickGoTo(nextIndex);
    setActiveIndex(nextIndex);
  }, [atEnd, activeIndex, maxIndex]);

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

  const showNavigation = maxIndex > 0;

  return (
    <div aria-label={title || "Cards carousel"}>
      <CardsCarouselFillImageInset>
        <CarouselHeader
          title={title}
          description={description}
          align={titleAlign}
          titleColor={titleColor}
          descriptionColor={descriptionColor}
          showTitle={showTitle}
          showDescription={showDescription}
        />
      </CardsCarouselFillImageInset>

      <div className="m-0 w-screen max-w-[100vw] ms-[calc(50%-50vw)] px-0">
        <FillImageCarouselSlider
          sliderKey={`${lang}-${visibleCount}`}
          sliderRef={sliderRef}
          settings={settings}
          cards={cards}
          lang={lang}
          cId={cId}
          onKeyDown={handleKeyDown}
          edgePad={edgePad}
          showCardImage={showCardImage}
          showCardTitle={showCardTitle}
          showCardDescription={showCardDescription}
          showOverlay={showOverlay}
          showButton={showButton}
          cardRadius={cardRadius}
          cardTitleColor={cardTitleColor}
          cardBodyColor={cardBodyColor}
          overlayColor={overlayColor}
          buttonBg={buttonBg}
          buttonText={buttonText}
          buttonOnFill={buttonOnFill}
        />
      </div>

      <CardsCarouselFillImageInset>
        <FillImageCarouselNavigation
          lang={lang}
          onPrev={handlePrev}
          onNext={handleNext}
          canGoPrev={canGoPrev}
          canGoNext={canGoNext}
          currentIndex={activeIndex}
          totalSlides={cards.length}
          showNavigation={showArrows && showNavigation}
          navColor={navColor}
        />
      </CardsCarouselFillImageInset>
    </div>
  );
};

export default CardsCarouselFillImage;
