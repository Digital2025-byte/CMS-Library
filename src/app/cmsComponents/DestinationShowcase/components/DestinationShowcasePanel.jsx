"use client";

import PageContentContainer from "@/components/layout/PageContentContainer";
import DestinationShowcaseHeader from "./DestinationShowcaseHeader";
import DestinationShowcaseBanner from "./DestinationShowcaseBanner";
import useDestinationShowcase from "../hooks/useDestinationShowcase";

export default function DestinationShowcasePanel({
  lang = "en",
  title,
  description,
  viewAllLabel,
  viewAllHref,
  exploreLabel,
  destinations = [],
  showTitleDescription = true,
  showViewAll = true,
  showButton = true,
  showSliderArrows = true,
}) {
  const slider = useDestinationShowcase(destinations);

  if (!destinations.length) return null;

  return (
    <>
      <PageContentContainer className="mb-0">
        <DestinationShowcaseHeader
          title={title}
          description={description}
          viewAllLabel={viewAllLabel}
          viewAllHref={viewAllHref}
          lang={lang}
          showTitleDescription={showTitleDescription}
          showViewAll={showViewAll}
        />
      </PageContentContainer>

      {/* Mobile: edge-to-edge. md+: align with page shell + rounded. */}
      <div className="w-full md:mx-auto md:max-w-7xl md:px-6 lg:px-12">
        <DestinationShowcaseBanner
          lang={lang}
          exploreLabel={exploreLabel}
          current={slider.current}
          activeIndex={slider.activeIndex}
          direction={slider.direction}
          virtualIndex={slider.virtualIndex}
          jumping={slider.jumping}
          infiniteList={slider.infiniteList}
          destinationsLength={destinations.length}
          onPrev={slider.handlePrev}
          onNext={slider.handleNext}
          onCardClick={slider.handleCardClick}
          showButton={showButton}
          showSliderArrows={showSliderArrows}
        />
      </div>
    </>
  );
}
