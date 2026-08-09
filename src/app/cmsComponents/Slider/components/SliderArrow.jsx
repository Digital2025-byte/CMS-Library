"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";
import {
  DEFAULT_ARROW_THEME,
  resolveArrowTheme,
} from "../utils/arrowThemes";

const arrowButtonClasses =
  "slider-hero-arrow-btn flex h-10 w-10 items-center justify-center rounded-full shadow-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-2 md:h-12 md:w-12";

function ArrowButton({ onClick, disabled = false, label, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      aria-disabled={disabled}
      className={`${arrowButtonClasses} ${
        disabled ? "cursor-not-allowed opacity-40" : "cursor-pointer"
      }`}
    >
      {children}
    </button>
  );
}

/**
 * Mobile: both arrows grouped bottom-right.
 * Desktop (md+): prev left / next right, vertically centered.
 *
 * @param {Object} props
 * @param {Function} props.onPrev
 * @param {Function} props.onNext
 * @param {"primary-1"|"primary-2"|"secondary-1"|"secondary-2"} [props.arrowTheme]
 */
export default function SliderArrowNav({
  onPrev,
  onNext,
  arrowTheme = DEFAULT_ARROW_THEME,
}) {
  const theme = resolveArrowTheme(arrowTheme);

  return (
    <div
      className="pointer-events-none absolute inset-0 z-20"
      style={{
        "--slider-arrow-bg": theme.bg,
        "--slider-arrow-hover-bg": theme.hoverBg,
        "--slider-arrow-icon": theme.icon,
      }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .slider-hero-arrow-btn {
          background-color: color-mix(in srgb, var(--slider-arrow-bg) 75%, transparent);
          color: var(--slider-arrow-icon);
          border: none;
        }
        .slider-hero-arrow-btn:hover:not(:disabled),
        .slider-hero-arrow-btn:focus-visible:not(:disabled) {
          background-color: var(--slider-arrow-hover-bg);
        }
      `,
        }}
      />

      {/* Mobile — bottom right cluster */}
      <div className="pointer-events-auto absolute right-4 bottom-4 flex items-center gap-2 md:hidden">
        <ArrowButton onClick={onPrev} label="Previous slide">
          <ArrowLeftIcon size={18} weight="bold" aria-hidden="true" />
        </ArrowButton>
        <ArrowButton onClick={onNext} label="Next slide">
          <ArrowRightIcon size={18} weight="bold" aria-hidden="true" />
        </ArrowButton>
      </div>

      {/* Desktop — side arrows */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        <div className="pointer-events-auto absolute top-1/2 left-5 -translate-y-1/2">
          <ArrowButton onClick={onPrev} label="Previous slide">
            <ArrowLeftIcon size={20} weight="bold" aria-hidden="true" />
          </ArrowButton>
        </div>
        <div className="pointer-events-auto absolute top-1/2 right-5 -translate-y-1/2">
          <ArrowButton onClick={onNext} label="Next slide">
            <ArrowRightIcon size={20} weight="bold" aria-hidden="true" />
          </ArrowButton>
        </div>
      </div>
    </div>
  );
}

export { ArrowButton as SliderPrevArrow, ArrowButton as SliderNextArrow };
export {
  ARROW_THEMES,
  DEFAULT_ARROW_THEME,
  resolveArrowTheme,
} from "../utils/arrowThemes";
