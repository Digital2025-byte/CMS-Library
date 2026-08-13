"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";

const baseButtonClasses =
  "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-200 focus:outline-none sm:h-10 sm:w-10";

function getStateClasses(enabled) {
  return enabled
    ? "cursor-pointer border-primary-1 bg-white text-primary-1 hover:bg-primary-1/5 active:scale-95"
    : "cursor-not-allowed border-300 bg-50 text-400";
}

function NavButton({ onClick, disabled, ariaLabel, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-disabled={disabled}
      className={`${baseButtonClasses} ${getStateClasses(!disabled)}`}
    >
      {children}
    </button>
  );
}

export default function CarouselNavigation({
  lang = "en",
  onPrev,
  onNext,
  canGoPrev,
  canGoNext,
  currentIndex,
  totalSlides,
  progress = 0,
  showNavigation = true,
}) {
  if (!showNavigation) {
    return null;
  }

  const isRtl = lang === "ar";
  const slideLabel = `${currentIndex + 1} of ${totalSlides}`;
  const progressPct = Math.min(100, Math.max(0, progress * 100));

  return (
    <div
      className="mt-8 flex items-center gap-4 sm:mt-10 sm:gap-5"
      dir={isRtl ? "rtl" : "ltr"}
      role="group"
      aria-label="Carousel navigation"
    >
      <div
        className="relative h-px min-w-0 flex-1 bg-200"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(progressPct)}
        aria-label="Carousel progress"
      >
        <span
          className="absolute inset-y-0 start-0 rounded-full bg-primary-1 transition-[width] duration-500 ease-out"
          style={{ width: `${progressPct}%` }}
        />
      </div>

      <div className="flex shrink-0 items-center gap-3" dir="ltr">
        <NavButton
          onClick={onPrev}
          disabled={!canGoPrev}
          ariaLabel={`Previous slide. ${slideLabel}`}
        >
          <ArrowLeftIcon size={18} weight="bold" aria-hidden="true" />
        </NavButton>
        <NavButton
          onClick={onNext}
          disabled={!canGoNext}
          ariaLabel={`Next slide. ${slideLabel}`}
        >
          <ArrowRightIcon size={18} weight="bold" aria-hidden="true" />
        </NavButton>
      </div>
    </div>
  );
}
