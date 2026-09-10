export const TITLE_ALIGN_OPTIONS = [
  { value: "left", label: "Start" },
  { value: "center", label: "Center" },
  { value: "right", label: "End" },
];

export const SPACING_OPTIONS = [
  { value: "tight", label: "Tight" },
  { value: "default", label: "Default" },
  { value: "loose", label: "Loose" },
];

export const IMAGE_SIDE_OPTIONS = [
  { value: "right", label: "Right" },
  { value: "left", label: "Left" },
];

export const IMAGE_RADIUS_OPTIONS = [
  { value: "none", label: "Square" },
  { value: "sm", label: "Small" },
  { value: "lg", label: "Rounded" },
  { value: "full", label: "Pill" },
];

export const TITLE_ALIGN_CLASS = {
  left: "text-start items-start",
  center: "text-center items-center",
  right: "text-end items-end",
};

export const SECTION_PADDING_CLASS = {
  tight: "py-4 md:py-6",
  default: "py-6 md:py-10",
  loose: "py-10 md:py-16",
};

export const IMAGE_RADIUS_CLASS = {
  none: "rounded-none",
  sm: "rounded-xl",
  lg: "rounded-2xl",
  full: "rounded-3xl",
};

export const DEFAULT_PAGE_HERO_STYLE = {
  showTitle: true,
  showSubtitle: true,
  showImage: true,
  showSectionBg: false,
  sectionBg: "100",
  sectionPadding: "default",
  titleAlign: "left",
  imageSide: "right",
  imageRadius: "lg",
  titleColor: "primary-1",
  subtitleColor: "700",
  titleFontWeight: "bold",
  subtitleFontWeight: "medium",
};

export function resolvePageHeroStyle(style = {}) {
  return { ...DEFAULT_PAGE_HERO_STYLE, ...style };
}

export const PAGE_HERO_STYLE_RESET_KEYS = {
  layout: [
    "showSectionBg",
    "sectionBg",
    "sectionPadding",
    "titleAlign",
  ],
  text: [
    "showTitle",
    "titleColor",
    "titleFontWeight",
    "showSubtitle",
    "subtitleColor",
    "subtitleFontWeight",
  ],
  image: ["showImage", "imageSide", "imageRadius"],
};
