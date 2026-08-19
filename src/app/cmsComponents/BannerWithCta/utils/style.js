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

export const BANNER_RADIUS_CLASS = {
  none: "rounded-none",
  sm: "rounded-xl",
  lg: "rounded-2xl",
  full: "rounded-3xl",
};

export const SECTION_PADDING_CLASS = {
  tight: "py-4 sm:py-5",
  default: "py-6 sm:py-8 lg:py-10",
  loose: "py-10 sm:py-12 lg:py-16",
};

export const DEFAULT_BANNER_WITH_CTA_STYLE = {
  showTitle: true,
  showDescription: true,
  showButton: true,
  showSectionBg: true,
  showHeroImage: true,
  showOverlay: true,
  sectionBg: "100",
  sectionPadding: "default",
  titleAlign: "left",
  titleColor: "white",
  descriptionColor: "white",
  overlayColor: "primary-1",
  bannerRadius: "lg",
  buttonBg: "primary-2",
  buttonText: "white",
};

export function resolveBannerWithCtaStyle(style = {}) {
  return {
    ...DEFAULT_BANNER_WITH_CTA_STYLE,
    ...style,
  };
}

export const BANNER_WITH_CTA_STYLE_RESET_KEYS = {
  layout: [
    "showTitle",
    "showDescription",
    "showSectionBg",
    "sectionBg",
    "sectionPadding",
  ],
  title: ["titleAlign", "titleColor", "descriptionColor"],
  banner: ["showHeroImage", "showOverlay", "overlayColor", "bannerRadius"],
  button: ["showButton", "buttonBg", "buttonText"],
};
