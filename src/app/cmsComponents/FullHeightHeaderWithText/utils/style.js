export const TITLE_ALIGN_OPTIONS = [
  { value: "left", label: "Start" },
  { value: "center", label: "Center" },
];

export const TITLE_ALIGN_CLASS = {
  left: "text-start",
  center: "text-center",
};

export const DEFAULT_FULL_HEIGHT_HEADER_STYLE = {
  showTitle: true,
  showDescription: true,
  showButton: true,
  showHeroImage: true,
  showOverlay: true,
  titleAlign: "left",
  titleColor: "secondary-100",
  descriptionColor: "secondary-100",
  overlayColor: "main",
  buttonBg: "primary-2",
  buttonText: "white",
};

export const FULL_HEIGHT_HEADER_STYLE_RESET_KEYS = {
  layout: ["showTitle", "showDescription"],
  banner: ["showHeroImage", "showOverlay", "overlayColor"],
  title: ["titleAlign", "titleColor", "descriptionColor"],
  button: ["showButton", "buttonBg", "buttonText"],
};
