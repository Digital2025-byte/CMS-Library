/**
 * Map slick's left-slide index to which page dot is active
 * (desktop: multiple slides per view).
 */
export function getActivePageIndex(activeSlideIndex, slideCount, slidesPerView) {
  if (slideCount <= slidesPerView) return 0;
  const maxLeft = slideCount - slidesPerView;
  const pageCount = Math.max(1, Math.ceil(slideCount / slidesPerView));
  if (activeSlideIndex >= maxLeft) return pageCount - 1;
  return Math.floor(activeSlideIndex / slidesPerView);
}

export function getCarouselItemContent(data, lang = "en") {
  const translations = Array.isArray(data?.translations)
    ? data.translations
    : [];
  const normalized = String(lang || "").toLowerCase();
  const matched =
    translations.find(
      (t) => String(t?.languageCode || "").toLowerCase() === normalized
    ) || translations[0];
  return matched?.content || null;
}

export function getDestinations(content) {
  return (
    Array.isArray(content?.destinations) ? content.destinations : []
  )
    .map((card) => {
      const imageUrl =
        card?.imageUrl ||
        card?.image?.fileUrl ||
        card?.image?.url ||
        card?.fileUrl ||
        "";

      if (!imageUrl || String(imageUrl).trim() === "") {
        return null;
      }

      return {
        imageUrl,
        iataCode: card?.iataCode || card?.IATACode || "",
        cityName: card?.cityName || card?.CityName || "",
        countryName: card?.countryName || card?.CountryName || "",
        takeATripUrl: card?.takeATripUrl || card?.TakeUrl || card?.href || "#",
        discoverLabel: card?.discoverLabel || "",
      };
    })
    .filter(Boolean);
}

export function getDotCount(slideCount, isMobile, slidesPerView) {
  if (slideCount === 0) return 0;
  if (isMobile) return slideCount;
  return Math.max(1, Math.ceil(slideCount / slidesPerView));
}

export function buildSliderSettings({
  isMobile,
  slidesPerView,
  slidesToScroll,
  onBeforeChange,
}) {
  return {
    centerMode: false,
    centerPadding: isMobile ? "40px" : "0px",
    slidesToShow: slidesPerView,
    slidesToScroll,
    infinite: false,
    autoplay: false,
    autoplaySpeed: 5000,
    speed: 500,
    arrows: false,
    swipeToSlide: true,
    beforeChange: onBeforeChange,
    responsive: [
      { breakpoint: 768, settings: { centerPadding: "30px" } },
      { breakpoint: 480, settings: { centerPadding: "30px" } },
    ],
  };
}

export function resolvePageSlideIndex({
  pageIndex,
  slideCount,
  isMobile,
  slidesPerView,
  slidesToScroll,
}) {
  if (!slideCount) return 0;
  if (isMobile) {
    return Math.min(pageIndex, slideCount - 1);
  }
  const maxLeft = Math.max(0, slideCount - slidesPerView);
  return Math.min(pageIndex * slidesToScroll, maxLeft);
}
