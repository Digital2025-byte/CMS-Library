"use client";

import { useMemo, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PageContentContainer from "@/components/layout/PageContentContainer";
import useIsMobile from "@/hooks/useIsMobile";
import CarouselItemTitle from "./CarouselItemTitle";
import CarouselItemSlider from "./CarouselItemSlider";
import CarouselItemNavigation from "./CarouselItemNavigation";
import {
  buildSliderSettings,
  getActivePageIndex,
  getDestinations,
  getDotCount,
  resolvePageSlideIndex,
} from "../utils/helpers";

export default function CarouselItemPanel({
  lang = "en",
  content,
  posParams = "gb",
  cId,
  showTitle = true,
  showArrows = true,
  showDots = true,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);
  const isMobile = useIsMobile(1024);

  const destinations = useMemo(() => getDestinations(content), [content]);
  const slideCount = destinations.length;
  const slidesPerView = isMobile ? 1 : 3;
  const slidesToScroll = slidesPerView;
  const dotCount = getDotCount(slideCount, isMobile, slidesPerView);
  const activePageIndex = isMobile
    ? Math.min(activeIndex, Math.max(0, slideCount - 1))
    : getActivePageIndex(activeIndex, slideCount, slidesPerView);

  const settings = useMemo(
    () =>
      buildSliderSettings({
        isMobile,
        slidesPerView,
        slidesToScroll,
        onBeforeChange: (_, next) => setActiveIndex(next),
      }),
    [isMobile, slidesPerView, slidesToScroll]
  );

  const handleNext = () => sliderRef.current?.slickNext();
  const handlePrev = () => sliderRef.current?.slickPrev();

  const goToPage = (pageIndex) => {
    const target = resolvePageSlideIndex({
      pageIndex,
      slideCount,
      isMobile,
      slidesPerView,
      slidesToScroll,
    });
    sliderRef.current?.slickGoTo(target);
  };

  if (!destinations.length) {
    return null;
  }

  return (
    <section
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="flex items-start justify-center bg-primary-800"
    >
      <PageContentContainer className="mb-8">
        <div className="mt-1 py-3">
          {showTitle ? <CarouselItemTitle title={content?.title} /> : null}
          <CarouselItemSlider
            sliderRef={sliderRef}
            settings={settings}
            destinations={destinations}
            lang={lang}
            posParams={posParams}
            cId={cId}
          />
          <CarouselItemNavigation
            dotCount={dotCount}
            activePageIndex={activePageIndex}
            onPrev={handlePrev}
            onNext={handleNext}
            onGoToPage={goToPage}
            showArrows={showArrows}
            showDots={showDots}
          />
        </div>
      </PageContentContainer>
    </section>
  );
}
