export const CARD_RADIUS_OPTIONS = [
  { value: "none", label: "Square" },
  { value: "sm", label: "Small" },
  { value: "lg", label: "Rounded" },
  { value: "full", label: "Pill" },
];

export const CARD_RADIUS_CLASS = {
  none: "rounded-none",
  sm: "rounded-xl",
  lg: "rounded-[28px]",
  full: "rounded-3xl",
};

export const DEFAULT_SCROLL_CAROUSEL_STYLE = {
  showTitle: true,
  showDescription: true,
  showCardImage: true,
  showOverlay: true,
  showProgress: true,
  showSectionBg: true,
  sectionBg: "foreground",
  titleColor: "white",
  descriptionColor: "white",
  cardRadius: "lg",
};

export function resolveScrollCarouselStyle(style = {}) {
  return {
    ...DEFAULT_SCROLL_CAROUSEL_STYLE,
    ...style,
  };
}

export const SCROLL_CAROUSEL_STYLE_RESET_KEYS = {
  layout: [
    "showProgress",
    "showSectionBg",
    "sectionBg",
  ],
  cards: [
    "showCardImage",
    "showTitle",
    "showDescription",
    "showOverlay",
    "cardRadius",
    "titleColor",
    "descriptionColor",
  ],
};
