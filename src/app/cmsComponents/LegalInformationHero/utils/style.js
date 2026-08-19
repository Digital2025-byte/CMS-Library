export const TITLE_ALIGN_OPTIONS = [
  { value: "left", label: "Start" },
  { value: "center", label: "Center" },
];

export const TITLE_ALIGN_CLASS = {
  left: "text-start",
  center: "text-center",
};

export const DEFAULT_LEGAL_INFORMATION_HERO_STYLE = {
  showTitle: true,
  showDescription: true,
  showPattern: true,
  showSectionBg: true,
  sectionBg: "main",
  titleAlign: "center",
  titleColor: "50",
  descriptionColor: "50",
};

export function resolveLegalInformationHeroStyle(style = {}) {
  return {
    ...DEFAULT_LEGAL_INFORMATION_HERO_STYLE,
    ...style,
  };
}

export const LEGAL_INFORMATION_HERO_STYLE_RESET_KEYS = {
  layout: [
    "showTitle",
    "showDescription",
    "showPattern",
    "showSectionBg",
    "sectionBg",
  ],
  title: ["titleAlign", "titleColor", "descriptionColor"],
};
