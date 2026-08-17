export const THEME_OPTIONS = [
  { value: "primary-1", label: "Primary 1" },
  { value: "primary-2", label: "Primary 2" },
  { value: "secondary-1", label: "Secondary 1" },
  { value: "secondary-2", label: "Secondary 2" },
];

export const TITLE_ALIGN_OPTIONS = [
  { value: "left", label: "Left" },
  { value: "center", label: "Center" },
  { value: "right", label: "Right" },
];

export const TITLE_ALIGN_JUSTIFY = {
  left: "justify-start",
  center: "justify-center",
  right: "justify-end",
};

export const TITLE_ALIGN_TEXT = {
  left: "text-start",
  center: "text-center",
  right: "text-end",
};

export const OVERLAY_DIRECTION_OPTIONS = [
  { value: "to top", label: "Up" },
  { value: "to bottom", label: "Down" },
  { value: "to left", label: "Left" },
  { value: "to right", label: "Right" },
];

export const OPACITY_OPTIONS = [
  { value: "0", label: "0%" },
  { value: "0.2", label: "20%" },
  { value: "0.4", label: "40%" },
  { value: "0.7", label: "70%" },
  { value: "1", label: "100%" },
];

export const AUTOPLAY_SPEED_OPTIONS = [
  { value: "3000", label: "3s" },
  { value: "5000", label: "5s" },
  { value: "8000", label: "8s" },
];

export const TRANSITION_SPEED_OPTIONS = [
  { value: "400", label: "Fast" },
  { value: "700", label: "Default" },
  { value: "1000", label: "Slow" },
];

export const DEFAULT_SLIDER_STYLE = {
  showSlideText: true,
  showButton: true,
  showArrows: true,
  showProgress: true,
  theme: "secondary-2",
  titleAlign: "left",
  titleColor: "white",
  subtitleColor: "white",
  descriptionColor: "white",
  overlayEnabled: true,
  overlayColor: "main",
  overlayFromOpacity: "0.7",
  overlayViaOpacity: "0.2",
  overlayDirection: "to bottom",
  autoplay: true,
  autoplaySpeed: "5000",
  fade: false,
  infinite: true,
  pauseOnHover: true,
  speed: "700",
};

export const SLIDER_STYLE_RESET_KEYS = {
  layout: ["showSlideText", "showButton", "showArrows", "showProgress"],
  theme: ["theme"],
  text: ["titleAlign", "titleColor", "subtitleColor", "descriptionColor"],
  overlay: [
    "overlayEnabled",
    "overlayColor",
    "overlayFromOpacity",
    "overlayViaOpacity",
    "overlayDirection",
  ],
  motion: [
    "autoplay",
    "autoplaySpeed",
    "fade",
    "infinite",
    "pauseOnHover",
    "speed",
  ],
};
