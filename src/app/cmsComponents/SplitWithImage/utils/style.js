export const TITLE_ALIGN_OPTIONS = [
  { value: "left", label: "Start" },
  { value: "center", label: "Center" },
];

export const IMAGE_SIDE_OPTIONS = [
  { value: "right", label: "Right" },
  { value: "left", label: "Left" },
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
  tight: "py-4 lg:py-6",
  default: "mb-8",
  loose: "mb-8 py-8 lg:py-12",
};

export const DEFAULT_SPLIT_WITH_IMAGE_STYLE = {
  showTitle: true,
  showDescription: true,
  showImage: true,
  showBackgroundImage: true,
  showSectionBg: false,
  sectionBg: "100",
  sectionPadding: "default",
  imageSide: "right",
  titleAlign: "left",
  titleColor: "primary-1",
  descriptionColor: "secondary-2",
};

export function resolveSplitWithImageStyle(style = {}) {
  return {
    ...DEFAULT_SPLIT_WITH_IMAGE_STYLE,
    ...style,
  };
}

export const SPLIT_WITH_IMAGE_STYLE_RESET_KEYS = {
  layout: [
    "showTitle",
    "showDescription",
    "showSectionBg",
    "sectionBg",
    "sectionPadding",
    "imageSide",
  ],
  title: ["titleAlign", "titleColor", "descriptionColor"],
  images: ["showImage", "showBackgroundImage"],
};
