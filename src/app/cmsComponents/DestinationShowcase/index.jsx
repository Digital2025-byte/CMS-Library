"use client";

import DestinationShowcasePanel from "./components/DestinationShowcasePanel";
import { getDestinationShowcaseContent } from "./utils/helpers";
import { DEFAULT_DESTINATION_SHOWCASE_STYLE } from "./utils/style";

/**
 * DestinationShowcase — featured destination banner with card slider.
 */
export default function DestinationShowcase({
  lang = "en",
  data,
  posParams = "gb",
  cId,
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
  const {
    title,
    description,
    viewAllLabel,
    viewAllHref,
    exploreLabel,
    destinations,
    hasContent,
  } = getDestinationShowcaseContent(data, lang, { posParams, cId });

  if (!hasContent) {
    return null;
  }

  return (
    <DestinationShowcasePanel
      lang={lang}
      title={title}
      description={description}
      viewAllLabel={viewAllLabel}
      viewAllHref={viewAllHref}
      exploreLabel={exploreLabel}
      destinations={destinations}
      showTitle={showTitle}
      showDescription={showDescription}
      showViewAll={showViewAll}
      showButton={showButton}
      showHeroImage={showHeroImage}
      showOverlay={showOverlay}
      showDestinationName={showDestinationName}
      showDestinationDescription={showDestinationDescription}
      showCards={showCards}
      showCardOverlay={showCardOverlay}
      showArrows={showArrows}
      showDots={showDots}
      titleAlign={titleAlign}
      titleColor={titleColor}
      descriptionColor={descriptionColor}
      viewAllColor={viewAllColor}
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
  );
}
