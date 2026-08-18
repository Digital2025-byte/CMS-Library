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
  left: "text-start",
  center: "text-center",
};

export const CARD_RADIUS_CLASS = {
  none: "rounded-none",
  sm: "rounded-xl",
  lg: "rounded-2xl",
  full: "rounded-3xl",
};

export const SECTION_PADDING_CLASS = {
  tight: "py-5 sm:py-6 lg:py-8",
  default: "py-8 sm:py-10 lg:py-12",
  loose: "py-12 sm:py-14 lg:py-16",
};

export const DEFAULT_FLIGHT_FARES_STYLE = {
  showTitle: true,
  showSectionBg: true,
  showImage: true,
  showOverlay: true,
  showOneWay: true,
  showNew: true,
  showCity: true,
  showPrice: true,
  sectionBg: "white",
  sectionPadding: "default",
  titleAlign: "left",
  titleColor: "primary-1",
  cardRadius: "lg",
  overlayColor: "secondary-2",
  cityColor: "primary-3",
  priceColor: "white",
  badgeColor: "secondary-2",
  badgeText: "white",
};

export const FLIGHT_FARES_STYLE_RESET_KEYS = {
  layout: ["showTitle", "showSectionBg", "sectionBg", "sectionPadding"],
  title: ["titleAlign", "titleColor"],
  cards: [
    "showImage",
    "showOverlay",
    "showOneWay",
    "showNew",
    "showCity",
    "showPrice",
    "cardRadius",
    "overlayColor",
    "cityColor",
    "priceColor",
    "badgeColor",
    "badgeText",
  ],
};
