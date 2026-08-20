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

export const IMAGE_DIRECTION_OPTIONS = [
  { value: "left", label: "Left" },
  { value: "none", label: "None" },
  { value: "right", label: "Right" },
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
  compact: "min-h-[36vh] h-[36vh]",
  default: "min-h-[50vh] h-[51vh]",
  tall: "min-h-[70vh] h-[70vh]",
};

export const DEFAULT_HEADER_WITH_THREE_IMAGE_STYLE = {
  showTitle: true,
  showDescription: true,
  showHeroImage: true,
  showOverlay: true,
  showSectionBg: false,
  titleAlign: "left",
  verticalAlign: "center",
  sectionHeight: "default",
  imageDirection: "right",
  titleColor: "50",
  descriptionColor: "50",
  overlayColor: "main",
  sectionBg: "main",
};

export function resolveHeaderWithThreeImageStyle(style = {}) {
  return {
    ...DEFAULT_HEADER_WITH_THREE_IMAGE_STYLE,
    ...style,
  };
}

export const HEADER_WITH_THREE_IMAGE_STYLE_RESET_KEYS = {
  layout: [
    "showTitle",
    "showDescription",
    "titleAlign",
    "verticalAlign",
    "sectionHeight",
    "showSectionBg",
    "sectionBg",
  ],
  banner: [
    "showHeroImage",
    "imageDirection",
    "showOverlay",
    "overlayColor",
  ],
};
