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
  tight: "py-5 sm:py-6 lg:py-8",
  default: "py-8 sm:py-12 lg:py-16",
  loose: "py-12 sm:py-16 lg:py-20",
};

export const DEFAULT_PARAGRAPH_STYLE = {
  showTitle: true,
  showDescription: true,
  showSectionBg: true,
  sectionBg: "background",
  sectionPadding: "default",
  titleAlign: "left",
  titleColor: "primary-1",
  descriptionColor: "700",
};

export function resolveParagraphStyle(style = {}) {
  return {
    ...DEFAULT_PARAGRAPH_STYLE,
    ...style,
  };
}

export const PARAGRAPH_STYLE_RESET_KEYS = {
  layout: [
    "showTitle",
    "showDescription",
    "showSectionBg",
    "sectionBg",
    "sectionPadding",
  ],
  title: ["titleAlign", "titleColor", "descriptionColor"],
};
