"use client";

import { useMemo, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PageContentContainer from "@/components/layout/PageContentContainer";
import { getThemeColorCss } from "@/styles/themeColors";
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
import {
  DEFAULT_CAROUSEL_ITEM_STYLE,
  SECTION_PADDING_CLASS,
} from "../utils/style";

export default function CarouselItemPanel({
  lang = "en",
  content,
  posParams = "gb",
  cId,
  showTitle = DEFAULT_CAROUSEL_ITEM_STYLE.showTitle,
  showArrows = DEFAULT_CAROUSEL_ITEM_STYLE.showArrows,
  showDots = DEFAULT_CAROUSEL_ITEM_STYLE.showDots,
  showSectionBg = DEFAULT_CAROUSEL_ITEM_STYLE.showSectionBg,
  showCardImage = DEFAULT_CAROUSEL_ITEM_STYLE.showCardImage,
  showCity = DEFAULT_CAROUSEL_ITEM_STYLE.showCity,
  showIata = DEFAULT_CAROUSEL_ITEM_STYLE.showIata,
  showCountry = DEFAULT_CAROUSEL_ITEM_STYLE.showCountry,
  showOverlay = DEFAULT_CAROUSEL_ITEM_STYLE.showOverlay,
  showHoverDim = DEFAULT_CAROUSEL_ITEM_STYLE.showHoverDim,
  showButton = DEFAULT_CAROUSEL_ITEM_STYLE.showButton,
  sectionBg = DEFAULT_CAROUSEL_ITEM_STYLE.sectionBg,
  sectionPadding = DEFAULT_CAROUSEL_ITEM_STYLE.sectionPadding,
  titleAlign = DEFAULT_CAROUSEL_ITEM_STYLE.titleAlign,
  titleColor = DEFAULT_CAROUSEL_ITEM_STYLE.titleColor,
  cardRadius = DEFAULT_CAROUSEL_ITEM_STYLE.cardRadius,
  cityColor = DEFAULT_CAROUSEL_ITEM_STYLE.cityColor,
  countryColor = DEFAULT_CAROUSEL_ITEM_STYLE.countryColor,
  overlayColor = DEFAULT_CAROUSEL_ITEM_STYLE.overlayColor,
  buttonBg = DEFAULT_CAROUSEL_ITEM_STYLE.buttonBg,
  buttonText = DEFAULT_CAROUSEL_ITEM_STYLE.buttonText,
  navColor = DEFAULT_CAROUSEL_ITEM_STYLE.navColor,
  dotColor = DEFAULT_CAROUSEL_ITEM_STYLE.dotColor,
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
  const paddingClass =
    SECTION_PADDING_CLASS[sectionPadding] ?? SECTION_PADDING_CLASS.default;

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
      className="flex items-start justify-center"
      style={{
        backgroundColor: showSectionBg
          ? getThemeColorCss(sectionBg, "primary-800")
          : "transparent",
      }}
    >
      <PageContentContainer className="mb-8">
        <div className={paddingClass}>
          {showTitle ? (
            <CarouselItemTitle
              title={content?.title}
              align={titleAlign}
              color={titleColor}
            />
          ) : null}
          <CarouselItemSlider
            sliderRef={sliderRef}
            settings={settings}
            destinations={destinations}
            lang={lang}
            posParams={posParams}
            cId={cId}
            showCardImage={showCardImage}
            showCity={showCity}
            showIata={showIata}
            showCountry={showCountry}
            showOverlay={showOverlay}
            showHoverDim={showHoverDim}
            showButton={showButton}
            cardRadius={cardRadius}
            cityColor={cityColor}
            countryColor={countryColor}
            overlayColor={overlayColor}
            buttonBg={buttonBg}
            buttonText={buttonText}
          />
          <CarouselItemNavigation
            dotCount={dotCount}
            activePageIndex={activePageIndex}
            onPrev={handlePrev}
            onNext={handleNext}
            onGoToPage={goToPage}
            showArrows={showArrows}
            showDots={showDots}
            navColor={navColor}
            dotColor={dotColor}
          />
        </div>
      </PageContentContainer>
    </section>
  );
}
