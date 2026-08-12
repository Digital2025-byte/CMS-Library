"use client";

import Button from "@/components/ui/Button";

/** Explore CTA only — arrows + dots live in DestinationShowcaseControls. */
export default function DestinationShowcaseNav({
  exploreLabel,
  exploreHref,
  showButton = true,
}) {
  const showExplore = showButton && exploreLabel && exploreHref;
  if (!showExplore) return null;

  return (
    <div className="mt-5 shrink-0 sm:mt-6 md:mb-12">
      <Button label={exploreLabel} href={exploreHref} />
    </div>
  );
}
