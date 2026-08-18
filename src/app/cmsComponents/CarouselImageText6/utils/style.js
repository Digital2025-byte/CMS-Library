export const TITLE_ALIGN_OPTIONS = [
  { value: "left", label: "Left" },
  { value: "center", label: "Center" },
];

export const OPEN_ON_OPTIONS = [
  { value: "click", label: "Click" },
  { value: "hover", label: "Hover" },
];

export const TITLE_ALIGN_CLASS = {
  left: "text-start",
  center: "text-center",
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
    "itemTitleColor",
    "itemBodyColor",
  ],
};
