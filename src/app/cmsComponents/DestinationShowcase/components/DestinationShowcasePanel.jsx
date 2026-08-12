"use client";

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
}) {
  const slider = useDestinationShowcase(destinations);

  if (!destinations.length) return null;

  return (
    <>
      <DestinationShowcaseHeader
        title={title}
        description={description}
        viewAllLabel={viewAllLabel}
        viewAllHref={viewAllHref}
        lang={lang}
      />
      <DestinationShowcaseBanner
        lang={lang}
        exploreLabel={exploreLabel}
        current={slider.current}
        activeIndex={slider.activeIndex}
        direction={slider.direction}
        virtualIndex={slider.virtualIndex}
        infiniteList={slider.infiniteList}
        destinationsLength={destinations.length}
        sliderRef={slider.sliderRef}
        onPrev={slider.handlePrev}
        onNext={slider.handleNext}
        onCardClick={slider.handleCardClick}
      />
    </>
  );
}
