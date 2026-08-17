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
import { DEFAULT_RELATED_CONTENT_STYLE } from "./utils/style";

const RelatedContentCarousel = ({
  lang = "en",
  data,
  posParams = "gb",
  cId,
  showTitle = DEFAULT_RELATED_CONTENT_STYLE.showTitle,
  showDescription = DEFAULT_RELATED_CONTENT_STYLE.showDescription,
  showArrows = DEFAULT_RELATED_CONTENT_STYLE.showArrows,
  showCardImage = DEFAULT_RELATED_CONTENT_STYLE.showCardImage,
  showCardTitle = DEFAULT_RELATED_CONTENT_STYLE.showCardTitle,
  showCardDescription = DEFAULT_RELATED_CONTENT_STYLE.showCardDescription,
  showButton = DEFAULT_RELATED_CONTENT_STYLE.showButton,
  titleAlign = DEFAULT_RELATED_CONTENT_STYLE.titleAlign,
  titleColor = DEFAULT_RELATED_CONTENT_STYLE.titleColor,
  descriptionColor = DEFAULT_RELATED_CONTENT_STYLE.descriptionColor,
  cardBg = DEFAULT_RELATED_CONTENT_STYLE.cardBg,
  cardRadius = DEFAULT_RELATED_CONTENT_STYLE.cardRadius,
  cardTitleColor = DEFAULT_RELATED_CONTENT_STYLE.cardTitleColor,
  cardBodyColor = DEFAULT_RELATED_CONTENT_STYLE.cardBodyColor,
  buttonBg = DEFAULT_RELATED_CONTENT_STYLE.buttonBg,
  buttonText = DEFAULT_RELATED_CONTENT_STYLE.buttonText,
  buttonOnFill = DEFAULT_RELATED_CONTENT_STYLE.buttonOnFill,
  navColor = DEFAULT_RELATED_CONTENT_STYLE.navColor,
  navTrack = DEFAULT_RELATED_CONTENT_STYLE.navTrack,
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
    const update = () =>
      setSlidesToShow(getCurrentSlidesToShow(cards.length, window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [cards.length]);

  useEffect(() => {
    setActiveIndex(0);
  }, [lang, cards.length]);

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

  const maxIndex = Math.max(0, cards.length - Math.ceil(slidesToShow));
  const canGoPrev = activeIndex > 0;
  const canGoNext = activeIndex < maxIndex;
  const progressSteps = maxIndex + 1;
  const progress = (Math.min(activeIndex, maxIndex) + 1) / progressSteps;

  return (
    <div aria-label={title || "Cards carousel"}>
      <CarouselHeader
        title={title}
        description={description}
        align={titleAlign}
        titleColor={titleColor}
        descriptionColor={descriptionColor}
        showTitle={showTitle}
        showDescription={showDescription}
      />

      <CarouselSlider
        sliderRef={sliderRef}
        settings={settings}
        cards={cards}
        lang={lang}
        cId={cId}
        activeIndex={activeIndex}
        slidesToShow={slidesToShow}
        onKeyDown={handleKeyDown}
        showCardImage={showCardImage}
        showCardTitle={showCardTitle}
        showCardDescription={showCardDescription}
        showButton={showButton}
        cardBg={cardBg}
        cardRadius={cardRadius}
        cardTitleColor={cardTitleColor}
        cardBodyColor={cardBodyColor}
        buttonBg={buttonBg}
        buttonText={buttonText}
        buttonOnFill={buttonOnFill}
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
        navColor={navColor}
        navTrack={navTrack}
      />
    </div>
  );
};

export default RelatedContentCarousel;
