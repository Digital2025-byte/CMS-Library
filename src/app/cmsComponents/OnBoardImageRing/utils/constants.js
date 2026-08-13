export const SECTION_BG = "#01263B";

/** How many panels are visible at once (matches the On Board reference). */
export const VISIBLE_COUNT = 5;

/** Unique slides in the dataset. */
export const PANEL_COUNT = 5;

/**
 * Copies around the cylinder. 4 × 5 = 20 cards → 18° step, so five
 * panels fill the viewport with only a thin gap. 2 copies (36°) only
 * fits three on screen.
 */
export const RING_COPIES = 4;

export const CARD_GAP_PX = 4;
export const CARD_ASPECT = 1.42;
export const RING_PERSPECTIVE = 2000;
/** How far to pull the bowl toward the camera (0–1 of radius). */
export const CONCAVE_PUSH = 0.62;
export const RING_HEIGHT =
  "h-[420px] sm:h-[500px] md:h-[580px] lg:h-[640px]";
