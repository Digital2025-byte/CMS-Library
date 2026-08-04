"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";

const baseButtonClasses =
  "flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-200 focus:outline-none sm:h-10 sm:w-10";

function getStateClasses(enabled) {
  return enabled
    ? "cursor-pointer border-primary-1 bg-transparent text-primary-1 hover:bg-primary-1/5 active:scale-95"
    : "cursor-not-allowed border-gray-300 bg-transparent text-gray-400 opacity-60";
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
  lang,
  onPrev,
  onNext,
  canGoPrev,
  canGoNext,
  currentIndex,
  totalSlides,
  showNavigation = true,
}) {
  if (!showNavigation) {
    return null;
  }

  const isRtl = lang === "ar";

  const ArrowIcon = isRtl ? ArrowLeftIcon : ArrowRightIcon;

  return (
    <div
      className="mt-6 flex items-center justify-end gap-3 sm:mt-8"
      role="group"
      aria-label="Carousel navigation"
    >
      <NavButton
        onClick={onPrev}
        disabled={!canGoPrev}
        ariaLabel={`Previous slide. ${currentIndex + 1} of ${totalSlides}`}
      >
       { isRtl ? <ArrowRightIcon size={18} weight="bold" aria-hidden="true" /> : <ArrowLeftIcon size={18} weight="bold" aria-hidden="true" /> }
      </NavButton>
      <NavButton
        onClick={onNext}
        disabled={!canGoNext}
        ariaLabel={`Next slide. ${currentIndex + 1} of ${totalSlides}`}
      >
        { isRtl ? <ArrowLeftIcon size={18} weight="bold" aria-hidden="true" /> : <ArrowRightIcon size={18} weight="bold" aria-hidden="true" /> }
      </NavButton>
    </div>
  );
}
