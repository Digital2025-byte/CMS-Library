"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";

/**
 * Bottom-center controls: prev | dots (active = pill) | next.
 */
export default function DestinationShowcaseControls({
  lang = "en",
  activeIndex = 0,
  count = 0,
  onPrev,
  onNext,
  onDotClick,
  showSliderArrows = true,
}) {
  if (!showSliderArrows || count <= 0) return null;

  const PrevIcon = lang === "ar" ? ArrowRightIcon : ArrowLeftIcon;
  const NextIcon = lang === "ar" ? ArrowLeftIcon : ArrowRightIcon;

  return (
    <div
      className="flex items-center justify-center gap-3 sm:gap-4"
      role="group"
      aria-label="Destination carousel controls"
    >
      <button
        type="button"
        onClick={onPrev}
        className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border-2 border-50/60 transition-all hover:border-50 hover:bg-50/10"
        aria-label="Previous destination"
      >
        <PrevIcon size={18} weight="bold" className="text-50" />
      </button>

      <div
        className="flex items-center gap-2"
        role="tablist"
        aria-label="Destinations"
      >
        {Array.from({ length: count }, (_, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={index}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`Go to destination ${index + 1}`}
              onClick={() => onDotClick?.(index)}
              className={
                isActive
                  ? "h-1.5 w-7 cursor-pointer rounded-full bg-50 transition-all sm:w-9"
                  : "h-1.5 w-1.5 cursor-pointer rounded-full bg-50/40 transition-all hover:bg-50/70"
              }
            />
          );
        })}
      </div>

      <button
        type="button"
        onClick={onNext}
        className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border-2 border-50/60 transition-all hover:border-50 hover:bg-50/10"
        aria-label="Next destination"
      >
        <NextIcon size={18} weight="bold" className="text-50" />
      </button>
    </div>
  );
}
