export const TITLE_ALIGN_OPTIONS = [
  { value: "left", label: "Start" },
  { value: "center", label: "Center" },
];

export const TITLE_ALIGN_CLASS = {
  left: "text-start",
  center: "text-center",
};

export const DEFAULT_BANNER_WITH_CTAS_STYLE = {
  showTitle: true,
  showDescription: true,
  showItems: true,
  showPrimaryButton: true,
  showSecondaryButton: true,
  showHeroImage: true,
  showOverlay: true,
  titleAlign: "left",
  titleColor: "white",
  descriptionColor: "white",
  overlayColor: "main",
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
  layout: ["showTitle", "showDescription", "showItems"],
  title: ["titleAlign", "titleColor", "descriptionColor"],
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
