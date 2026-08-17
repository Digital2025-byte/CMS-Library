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
  { value: "2000", label: "2s" },
  { value: "3000", label: "3s" },
  { value: "5000", label: "5s" },
  { value: "7000", label: "7s" },
  { value: "10000", label: "10s" },
];

export const TRANSITION_SPEED_OPTIONS = [
  { value: "200", label: "Very fast" },
  { value: "400", label: "Fast" },
  { value: "700", label: "Default" },
  { value: "1000", label: "Slow" },
  { value: "1500", label: "Very slow" },
];

export const EASING_OPTIONS = [
  { value: "ease", label: "Ease" },
  { value: "ease-in-out", label: "Ease in-out" },
  { value: "ease-out", label: "Ease out" },
  { value: "linear", label: "Linear" },
];

export const EFFECT_OPTIONS = [
  { value: "slide", label: "Slide" },
  { value: "fade", label: "Fade" },
];

export const TOUCH_OPTIONS = [
  { value: "5", label: "Sensitive" },
  { value: "8", label: "Default" },
  { value: "14", label: "Firm" },
];

export const OVERLAY_TO_OPTIONS = [
  { value: "transparent", label: "Transparent" },
  { value: "white", label: "White" },
  { value: "50", label: "Off white" },
];

export const BUTTON_VARIANT_OPTIONS = [
  { value: "primary", label: "Solid" },
  { value: "secondary", label: "Ghost" },
  { value: "outline", label: "Outline" },
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
  buttonVariant: "primary",
  overlayEnabled: true,
  overlayColor: "main",
  overlayFromOpacity: "0.7",
  overlayViaOpacity: "0.2",
  overlayDirection: "to bottom",
  overlayTo: "transparent",
  autoplay: true,
  autoplaySpeed: "5000",
  fade: false,
  infinite: true,
  pauseOnHover: true,
  pauseOnFocus: true,
  speed: "700",
  cssEase: "ease-in-out",
  waitForAnimate: true,
  swipe: true,
  draggable: true,
  touchThreshold: "8",
  adaptiveHeight: false,
};

export const SLIDER_STYLE_RESET_KEYS = {
  layout: ["showSlideText", "showButton", "showArrows", "showProgress"],
  theme: ["theme"],
  text: ["titleAlign", "titleColor", "subtitleColor", "descriptionColor"],
  button: ["buttonVariant"],
  overlay: [
    "overlayEnabled",
    "overlayColor",
    "overlayFromOpacity",
    "overlayViaOpacity",
    "overlayDirection",
    "overlayTo",
  ],
  slider: [
    "autoplay",
    "autoplaySpeed",
    "fade",
    "infinite",
    "pauseOnHover",
    "pauseOnFocus",
    "speed",
    "cssEase",
    "waitForAnimate",
    "swipe",
    "draggable",
    "touchThreshold",
    "adaptiveHeight",
  ],
};
