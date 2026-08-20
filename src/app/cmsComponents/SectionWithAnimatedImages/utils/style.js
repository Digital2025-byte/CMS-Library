export const TITLE_ALIGN_OPTIONS = [
  { value: "left", label: "Start" },
  { value: "center", label: "Center" },
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

export const SECTION_PADDING_CLASS = {
  tight: "py-10 md:py-12 lg:py-16",
  default: "py-16 md:py-20 lg:py-24",
  loose: "py-20 md:py-24 lg:py-28",
};

export const DEFAULT_ANIMATED_IMAGES_STYLE = {
  showTitle: true,
  showDescription: true,
  showCta: true,
  showImages: true,
  showSectionBg: true,
  sectionBg: "primary-100",
  sectionPadding: "default",
  titleAlign: "center",
  titleColor: "primary-1",
  descriptionColor: "primary-1",
  buttonBg: "primary-2",
  buttonText: "white",
  titleFontWeight: "semibold",
  descriptionFontWeight: "normal",
  buttonTextFontWeight: "semibold",
};

export function resolveAnimatedImagesStyle(style = {}) {
  return {
    ...DEFAULT_ANIMATED_IMAGES_STYLE,
    ...style,
  };
}

export const ANIMATED_IMAGES_STYLE_RESET_KEYS = {
  layout: [
    "showTitle",
    "showDescription",
    "showSectionBg",
    "sectionBg",
    "sectionPadding",
  ],
  title: ["titleAlign", "titleColor", "titleFontWeight", "descriptionColor", "descriptionFontWeight"],
  images: ["showImages"],
  button: ["showCta", "buttonBg", "buttonText", "buttonTextFontWeight"],
};
