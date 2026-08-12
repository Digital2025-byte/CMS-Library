"use client";

import DestinationShowcasePanel from "./components/DestinationShowcasePanel";
import { getDestinationShowcaseContent } from "./utils/helpers";

/**
 * DestinationShowcase — featured destination banner with card slider.
 */
export default function DestinationShowcase({
  lang = "en",
  data,
  posParams = "gb",
  cId,
  showTitleDescription = true,
  showViewAll = true,
  showButton = true,
  showSliderArrows = true,
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
      showTitleDescription={showTitleDescription}
      showViewAll={showViewAll}
      showButton={showButton}
      showSliderArrows={showSliderArrows}
    />
  );
}
