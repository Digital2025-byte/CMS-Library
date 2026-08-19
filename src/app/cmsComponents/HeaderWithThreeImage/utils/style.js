export const TITLE_ALIGN_OPTIONS = [
  { value: "left", label: "Start" },
  { value: "center", label: "Center" },
];

export const TITLE_ALIGN_CLASS = {
  left: "text-start",
  center: "text-center",
};

export const DEFAULT_HEADER_WITH_THREE_IMAGE_STYLE = {
  showTitle: true,
  showDescription: true,
  showHeroImage: true,
  showOverlay: true,
  titleAlign: "left",
  titleColor: "50",
  descriptionColor: "50",
  overlayColor: "main",
};

export function resolveHeaderWithThreeImageStyle(style = {}) {
  return {
    ...DEFAULT_HEADER_WITH_THREE_IMAGE_STYLE,
    ...style,
  };
}

export const HEADER_WITH_THREE_IMAGE_STYLE_RESET_KEYS = {
  layout: ["showTitle", "showDescription"],
  title: ["titleAlign", "titleColor", "descriptionColor"],
  banner: ["showHeroImage", "showOverlay", "overlayColor"],
};
