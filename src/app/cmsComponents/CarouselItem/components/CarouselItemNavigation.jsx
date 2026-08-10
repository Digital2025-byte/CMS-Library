"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";

export default function CarouselItemNavigation({
  dotCount = 0,
  activePageIndex = 0,
  onPrev,
  onNext,
  onGoToPage,
}) {
  if (dotCount <= 0) {
    return null;
  }

  return (
    <div
      className="z-10 mt-5 flex items-center justify-center gap-6"
      dir="ltr"
    >
      <button
        type="button"
        onClick={onPrev}
        aria-label="Previous"
        className="rounded-full border-2 border-white p-2 transition hover:bg-white/20"
      >
        <ArrowLeftIcon className="text-lg text-white" weight="bold" />
      </button>

      <div className="flex gap-2">
        {Array.from({ length: dotCount }, (_, i) => (
          <div
            key={i}
            role="button"
            tabIndex={0}
            aria-label={`Go to page ${i + 1}`}
            onClick={() => onGoToPage?.(i)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onGoToPage?.(i);
              }
            }}
            className={`h-2 cursor-pointer rounded-full bg-primary-2 transition-all duration-300 ${
              i === activePageIndex
                ? "h-2 w-5 bg-primary-2"
                : "h-2 w-2 bg-primary-2 opacity-40"
            }`}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={onNext}
        aria-label="Next"
        className="rounded-full border-2 border-white p-2 transition hover:bg-white/20"
      >
        <ArrowRightIcon className="text-lg text-white" weight="bold" />
      </button>
    </div>
  );
}
