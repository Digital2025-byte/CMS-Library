export const CARD_RADIUS_OPTIONS = [
  { value: "none", label: "Square" },
  { value: "sm", label: "Small" },
  { value: "lg", label: "Rounded" },
  { value: "full", label: "Pill" },
];

export const SPACING_OPTIONS = [
  { value: "tight", label: "Tight" },
  { value: "default", label: "Default" },
  { value: "loose", label: "Loose" },
];

export const CARD_RADIUS_CLASS = {
  none: "rounded-none",
  sm: "rounded-xl",
  lg: "rounded-2xl",
  full: "rounded-3xl",
};

export const SECTION_PADDING_CLASS = {
  tight: "py-4 sm:py-6",
  default: "py-8 sm:py-12 lg:py-16",
  loose: "py-12 sm:py-16 lg:py-20",
};

export const RING_EXTRAS = {
  width: 300,
  perspective: 2000,
  imageDistance: 500,
  containerHeight: "h-[460px] w-full sm:h-[540px] md:h-[600px]",
};

export const DEFAULT_DRAGGABLE_3D_IMAGE_RING_STYLE = {
  showSectionBg: true,
  showFrame: true,
  showStageDots: true,
  showCardImage: true,
  sectionBg: "white",
  stageBg: "white",
  dotsColor: "300",
  sectionPadding: "default",
  frameRadius: "lg",
  cardRadius: "none",
};

export function resolveDraggable3DImageRingStyle(style = {}) {
  return {
    ...DEFAULT_DRAGGABLE_3D_IMAGE_RING_STYLE,
    ...RING_EXTRAS,
    ...style,
  };
}

export const DRAGGABLE_3D_IMAGE_RING_STYLE_RESET_KEYS = {
  layout: [
    "showSectionBg",
    "showFrame",
    "showStageDots",
    "sectionBg",
    "stageBg",
    "dotsColor",
    "sectionPadding",
    "frameRadius",
  ],
  cards: ["showCardImage", "cardRadius"],
};
