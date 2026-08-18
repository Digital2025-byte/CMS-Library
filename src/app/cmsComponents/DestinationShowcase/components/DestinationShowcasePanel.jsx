"use client";

import PageContentContainer from "@/components/layout/PageContentContainer";
import DestinationShowcaseHeader from "./DestinationShowcaseHeader";
import DestinationShowcaseBanner from "./DestinationShowcaseBanner";
import useDestinationShowcase from "../hooks/useDestinationShowcase";
import { DEFAULT_DESTINATION_SHOWCASE_STYLE } from "../utils/style";

export default function DestinationShowcasePanel({
  lang = "en",
  title,
  description,
  viewAllLabel,
  viewAllHref,
  exploreLabel,
  destinations = [],
  showTitle = DEFAULT_DESTINATION_SHOWCASE_STYLE.showTitle,
  showDescription = DEFAULT_DESTINATION_SHOWCASE_STYLE.showDescription,
  showViewAll = DEFAULT_DESTINATION_SHOWCASE_STYLE.showViewAll,
  showButton = DEFAULT_DESTINATION_SHOWCASE_STYLE.showButton,
  showHeroImage = DEFAULT_DESTINATION_SHOWCASE_STYLE.showHeroImage,
  showOverlay = DEFAULT_DESTINATION_SHOWCASE_STYLE.showOverlay,
  showDestinationName = DEFAULT_DESTINATION_SHOWCASE_STYLE.showDestinationName,
  showDestinationDescription = DEFAULT_DESTINATION_SHOWCASE_STYLE.showDestinationDescription,
  showCards = DEFAULT_DESTINATION_SHOWCASE_STYLE.showCards,
  showCardOverlay = DEFAULT_DESTINATION_SHOWCASE_STYLE.showCardOverlay,
  showArrows = DEFAULT_DESTINATION_SHOWCASE_STYLE.showArrows,
  showDots = DEFAULT_DESTINATION_SHOWCASE_STYLE.showDots,
  titleAlign = DEFAULT_DESTINATION_SHOWCASE_STYLE.titleAlign,
  titleColor = DEFAULT_DESTINATION_SHOWCASE_STYLE.titleColor,
  descriptionColor = DEFAULT_DESTINATION_SHOWCASE_STYLE.descriptionColor,
  viewAllColor = DEFAULT_DESTINATION_SHOWCASE_STYLE.viewAllColor,
  bannerRadius = DEFAULT_DESTINATION_SHOWCASE_STYLE.bannerRadius,
  overlayColor = DEFAULT_DESTINATION_SHOWCASE_STYLE.overlayColor,
  destNameColor = DEFAULT_DESTINATION_SHOWCASE_STYLE.destNameColor,
  destBodyColor = DEFAULT_DESTINATION_SHOWCASE_STYLE.destBodyColor,
  cardRadius = DEFAULT_DESTINATION_SHOWCASE_STYLE.cardRadius,
  cardOverlayColor = DEFAULT_DESTINATION_SHOWCASE_STYLE.cardOverlayColor,
  buttonBg = DEFAULT_DESTINATION_SHOWCASE_STYLE.buttonBg,
  buttonText = DEFAULT_DESTINATION_SHOWCASE_STYLE.buttonText,
  navColor = DEFAULT_DESTINATION_SHOWCASE_STYLE.navColor,
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
          showTitle={showTitle}
          showDescription={showDescription}
          showViewAll={showViewAll}
          titleAlign={titleAlign}
          titleColor={titleColor}
          descriptionColor={descriptionColor}
          viewAllColor={viewAllColor}
        />
      </PageContentContainer>

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
          showHeroImage={showHeroImage}
          showOverlay={showOverlay}
          showDestinationName={showDestinationName}
          showDestinationDescription={showDestinationDescription}
          showCards={showCards}
          showCardOverlay={showCardOverlay}
          showArrows={showArrows}
          showDots={showDots}
          bannerRadius={bannerRadius}
          overlayColor={overlayColor}
          destNameColor={destNameColor}
          destBodyColor={destBodyColor}
          cardRadius={cardRadius}
          cardOverlayColor={cardOverlayColor}
          buttonBg={buttonBg}
          buttonText={buttonText}
          navColor={navColor}
        />
      </div>
    </>
  );
}
