"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";
import Button from "@/components/ui/Button";

export default function DestinationShowcaseNav({
  exploreLabel,
  exploreHref,
  lang = "en",
  onPrev,
  onNext,
  showButton = true,
  showSliderArrows = true,
}) {
  const showExplore = showButton && exploreLabel && exploreHref;

  if (!showExplore && !showSliderArrows) return null;

  return (
    <div className="mb-10 flex shrink-0 items-center justify-between gap-3 md:mb-12">
      {showExplore ? (
        <Button label={exploreLabel} href={exploreHref} />
      ) : (
        <span />
      )}

      {showSliderArrows ? (
        <div className="mt-1 flex items-center gap-3">
          <button
            type="button"
            onClick={onPrev}
            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-50/50 transition-all hover:border-50 hover:bg-50/10"
            aria-label="Previous destination"
          >
            {lang === "ar" ? (
              <ArrowRightIcon size={20} weight="bold" className="text-50" />
            ) : (
              <ArrowLeftIcon size={20} weight="bold" className="text-50" />
            )}
          </button>
          <button
            type="button"
            onClick={onNext}
            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-50/50 transition-all hover:border-50 hover:bg-50/10"
            aria-label="Next destination"
          >
            {lang === "ar" ? (
              <ArrowLeftIcon size={20} weight="bold" className="text-50" />
            ) : (
              <ArrowRightIcon size={20} weight="bold" className="text-50" />
            )}
          </button>
        </div>
      ) : null}
    </div>
  );
}
