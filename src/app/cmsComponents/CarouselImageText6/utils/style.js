export const TITLE_ALIGN_OPTIONS = [
  { value: "left", label: "Left" },
  { value: "center", label: "Center" },
];

export const CARD_RADIUS_OPTIONS = [
  { value: "none", label: "Square" },
  { value: "sm", label: "Small" },
  { value: "lg", label: "Rounded" },
  { value: "full", label: "Pill" },
];

export const OPEN_ON_OPTIONS = [
  { value: "click", label: "Click" },
  { value: "hover", label: "Hover" },
];

export const TITLE_ALIGN_CLASS = {
  left: "text-start",
  center: "text-center",
};

export const CARD_RADIUS_CLASS = {
  none: "rounded-none md:rounded-none",
  sm: "rounded-lg md:rounded-none",
  lg: "rounded-2xl md:rounded-none",
  full: "rounded-3xl md:rounded-none",
};

export const DEFAULT_CAROUSEL_IMAGE_TEXT_STYLE = {
  showTitle: true,
  showItemTitle: true,
  showItemDescription: true,
  grayscaleInactive: true,
  openOn: "click",
  sectionBg: "secondary-2",
  titleAlign: "center",
  titleColor: "white",
  overlayColor: "secondary-2",
  panelColor: "main",
  cardBg: "secondary-2",
  cardRadius: "lg",
  itemTitleColor: "white",
  itemBodyColor: "white",
};

export const CAROUSEL_IMAGE_TEXT_STYLE_RESET_KEYS = {
  layout: ["showTitle", "sectionBg"],
  title: ["titleAlign", "titleColor"],
  cards: [
    "showItemTitle",
    "showItemDescription",
    "grayscaleInactive",
    "openOn",
    "overlayColor",
    "panelColor",
    "cardBg",
    "cardRadius",
    "itemTitleColor",
    "itemBodyColor",
  ],
};
