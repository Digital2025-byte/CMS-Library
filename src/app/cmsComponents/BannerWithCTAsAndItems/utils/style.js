export const TITLE_ALIGN_OPTIONS = [
  { value: "left", label: "Start" },
  { value: "center", label: "Center" },
  { value: "right", label: "End" },
];

export const VERTICAL_ALIGN_OPTIONS = [
  { value: "top", label: "Top" },
  { value: "center", label: "Center" },
  { value: "bottom", label: "Bottom" },
];

export const HEIGHT_OPTIONS = [
  { value: "compact", label: "Compact" },
  { value: "default", label: "Default" },
  { value: "tall", label: "Tall" },
];

export const TITLE_ALIGN_CLASS = {
  left: "text-start",
  center: "text-center",
  right: "text-end",
};

export const TITLE_JUSTIFY_CLASS = {
  left: "justify-start",
  center: "justify-center",
  right: "justify-end",
};

export const TITLE_ITEMS_CLASS = {
  left: "items-start",
  center: "items-center",
  right: "items-end",
};

export const VERTICAL_ALIGN_CLASS = {
  top: "items-start",
  center: "items-center",
  bottom: "items-end",
};

export const HEIGHT_CLASS = {
  compact: "min-h-[40vh] sm:min-h-[36vh] lg:min-h-[42vh]",
  default: "min-h-[52vh] sm:min-h-[48vh] lg:min-h-[56vh]",
  tall: "min-h-[64vh] sm:min-h-[60vh] lg:min-h-[72vh]",
};

export const DEFAULT_BANNER_WITH_CTAS_STYLE = {
  showTitle: true,
  showDescription: true,
  showItems: true,
  showPrimaryButton: true,
  showSecondaryButton: true,
  showHeroImage: true,
  showOverlay: true,
  showSectionBg: false,
  titleAlign: "left",
  verticalAlign: "center",
  bannerHeight: "default",
  titleColor: "white",
  descriptionColor: "white",
  overlayColor: "main",
  sectionBg: "main",
  itemColor: "secondary-200",
  primaryBg: "primary-2",
  primaryText: "white",
  secondaryText: "white",
};

export function resolveBannerWithCTAsStyle(style = {}) {
  return {
    ...DEFAULT_BANNER_WITH_CTAS_STYLE,
    ...style,
  };
}

export const BANNER_WITH_CTAS_STYLE_RESET_KEYS = {
  layout: [
    "showTitle",
    "showDescription",
    "showItems",
    "titleAlign",
    "verticalAlign",
    "bannerHeight",
    "showSectionBg",
    "sectionBg",
  ],
  banner: ["showHeroImage", "showOverlay", "overlayColor"],
  items: ["itemColor"],
  button: [
    "showPrimaryButton",
    "showSecondaryButton",
    "primaryBg",
    "primaryText",
    "secondaryText",
  ],
};
