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
  tight: "py-5 lg:py-8",
  default: "py-8 lg:py-14",
  loose: "py-12 lg:py-20",
};

export const DEFAULT_CONNECTION_STEPS_STYLE = {
  showTitle: true,
  showDescription: true,
  showImages: true,
  showSectionBg: true,
  sectionBg: "100",
  sectionPadding: "default",
  titleAlign: "left",
  titleColor: "primary-1",
  labelColor: "secondary-2",
  descriptionColor: "secondary-2",
};

export function resolveConnectionStepsListStyle(style = {}) {
  return {
    ...DEFAULT_CONNECTION_STEPS_STYLE,
    ...style,
  };
}

export const CONNECTION_STEPS_STYLE_RESET_KEYS = {
  layout: [
    "showTitle",
    "showDescription",
    "showImages",
    "showSectionBg",
    "sectionBg",
    "sectionPadding",
  ],
  title: ["titleAlign", "titleColor", "labelColor", "descriptionColor"],
};
