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

export const DEFAULT_HEADER_WITH_CITY_INFO_STYLE = {
  showTitle: true,
  showDescription: true,
  showCityCard: true,
  showHeroImage: true,
  showOverlay: true,
  showCardHeading: true,
  showCardDescription: true,
  showTiles: true,
  showNextFlight: true,
  titleAlign: "left",
  titleColor: "white",
  descriptionColor: "white",
  overlayColor: "main",
  cardRadius: "lg",
  cardHeadingColor: "white",
  cardBodyColor: "white",
  tileLabelColor: "white",
  tileValueColor: "white",
  nextFlightColor: "primary-100",
};

export const HEADER_WITH_CITY_INFO_STYLE_RESET_KEYS = {
  layout: ["showTitle", "showDescription", "showCityCard"],
  title: ["titleAlign", "titleColor", "descriptionColor"],
  banner: ["showHeroImage", "showOverlay", "overlayColor"],
  card: [
    "showCardHeading",
    "showCardDescription",
    "showTiles",
    "showNextFlight",
    "cardRadius",
    "cardHeadingColor",
    "cardBodyColor",
    "tileLabelColor",
    "tileValueColor",
    "nextFlightColor",
  ],
};
