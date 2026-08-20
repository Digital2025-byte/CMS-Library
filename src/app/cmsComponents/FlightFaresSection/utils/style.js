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
  showTopBadge: true,
  showExtraBadge: true,
  showItemTitle: true,
  showSubtitle: true,
  sectionBg: "white",
  sectionPadding: "default",
  titleAlign: "left",
  titleColor: "primary-1",
  cardRadius: "lg",
  overlayColor: "secondary-2",
  itemTitleColor: "primary-3",
  subtitleColor: "white",
  badgeColor: "secondary-2",
  badgeText: "white",
};

export function resolveFlightFaresStyle(style = {}) {
  const {
    showNew,
    showOneWay,
    showBadge,
    showCity,
    showPrice,
    cityColor,
    priceColor,
    ...rest
  } = style;

  return {
    ...DEFAULT_FLIGHT_FARES_STYLE,
    ...rest,
    showTopBadge:
      rest.showTopBadge !== undefined
        ? rest.showTopBadge
        : showOneWay !== undefined
          ? showOneWay
          : DEFAULT_FLIGHT_FARES_STYLE.showTopBadge,
    showExtraBadge:
      rest.showExtraBadge !== undefined
        ? rest.showExtraBadge
        : showBadge !== undefined
          ? showBadge
          : showNew !== undefined
            ? showNew
            : DEFAULT_FLIGHT_FARES_STYLE.showExtraBadge,
    showItemTitle:
      rest.showItemTitle !== undefined
        ? rest.showItemTitle
        : showCity !== undefined
          ? showCity
          : DEFAULT_FLIGHT_FARES_STYLE.showItemTitle,
    showSubtitle:
      rest.showSubtitle !== undefined
        ? rest.showSubtitle
        : showPrice !== undefined
          ? showPrice
          : DEFAULT_FLIGHT_FARES_STYLE.showSubtitle,
    itemTitleColor:
      rest.itemTitleColor || cityColor || DEFAULT_FLIGHT_FARES_STYLE.itemTitleColor,
    subtitleColor:
      rest.subtitleColor || priceColor || DEFAULT_FLIGHT_FARES_STYLE.subtitleColor,
  };
}

export const FLIGHT_FARES_STYLE_RESET_KEYS = {
  layout: ["showTitle", "showSectionBg", "sectionBg", "sectionPadding"],
  title: ["titleAlign", "titleColor"],
  cards: [
    "showImage",
    "showOverlay",
    "showTopBadge",
    "showExtraBadge",
    "showItemTitle",
    "showSubtitle",
    "cardRadius",
    "overlayColor",
    "itemTitleColor",
    "subtitleColor",
    "badgeColor",
    "badgeText",
  ],
};
