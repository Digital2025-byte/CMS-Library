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
  tight: "py-5 lg:py-6",
  default: "py-8 lg:py-10",
  loose: "py-12 lg:py-16",
};

export const DEFAULT_TITLE_WITH_LIST_STYLE = {
  showTitle: true,
  showDescription: true,
  showIcon: true,
  showBullets: true,
  showSectionBg: true,
  sectionBg: "100",
  sectionPadding: "default",
  titleAlign: "left",
  titleColor: "primary-1",
  descriptionColor: "primary-1",
  bulletColor: "primary-2",
  iconColor: "primary-1",
};

export function resolveTitleWithListStyle(style = {}) {
  return {
    ...DEFAULT_TITLE_WITH_LIST_STYLE,
    ...style,
  };
}

export const TITLE_WITH_LIST_STYLE_RESET_KEYS = {
  layout: [
    "showTitle",
    "showDescription",
    "showIcon",
    "showBullets",
    "showSectionBg",
    "sectionBg",
    "sectionPadding",
  ],
  title: ["titleAlign", "titleColor", "descriptionColor", "bulletColor", "iconColor"],
};
