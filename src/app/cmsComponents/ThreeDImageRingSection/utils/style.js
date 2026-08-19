export const TITLE_ALIGN_OPTIONS = [
  { value: "left", label: "Start" },
  { value: "center", label: "Center" },
];

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

export const TITLE_ALIGN_CLASS = {
  left: "",
  center: "items-center text-center md:flex-col md:items-center",
};

export const CARD_RADIUS_CLASS = {
  none: "rounded-none",
  sm: "rounded-xl",
  lg: "rounded-2xl",
  full: "rounded-3xl",
};

export const SECTION_PADDING_CLASS = {
  tight: "pt-4 sm:pt-6",
  default: "pt-8 sm:pt-12 lg:pt-16",
  loose: "pt-12 sm:pt-16 lg:pt-20",
};

export const SECTION_BG = "#01263B";

export const RING_EXTRAS = {
  width: 260,
  perspective: 2000,
  imageDistance: 480,
  backgroundColor: SECTION_BG,
  containerHeight: "h-[440px] sm:h-[540px] md:h-[640px] lg:h-[700px]",
  draggable: true,
};

export const DEFAULT_THREE_D_IMAGE_RING_STYLE = {
  showTitle: true,
  showDescription: true,
  showSectionBg: true,
  showCaptions: true,
  showOverlay: true,
  showCardImage: true,
  sectionBg: "primary-800",
  sectionPadding: "default",
  titleAlign: "left",
  titleColor: "white",
  descriptionColor: "white",
  captionColor: "white",
  cardRadius: "none",
};

export function resolveThreeDImageRingStyle(style = {}, extras = {}) {
  return {
    ...DEFAULT_THREE_D_IMAGE_RING_STYLE,
    ...RING_EXTRAS,
    ...Object.fromEntries(
      Object.entries(extras).filter(([, value]) => value != null && value !== "")
    ),
    ...style,
  };
}

export const THREE_D_IMAGE_RING_STYLE_RESET_KEYS = {
  layout: [
    "showTitle",
    "showDescription",
    "showSectionBg",
    "sectionBg",
    "sectionPadding",
  ],
  title: ["titleAlign", "titleColor", "descriptionColor"],
  cards: [
    "showCardImage",
    "showCaptions",
    "showOverlay",
    "cardRadius",
    "captionColor",
  ],
};
