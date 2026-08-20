export const TITLE_ALIGN_OPTIONS = [
  { value: "left", label: "Start" },
  { value: "center", label: "Center" },
];

export const SPACING_OPTIONS = [
  { value: "tight", label: "Tight" },
  { value: "default", label: "Default" },
  { value: "loose", label: "Loose" },
];

export const LINK_UNDERLINE_OPTIONS = [
  { value: "none", label: "None" },
  { value: "always", label: "Always" },
  { value: "hover", label: "On hover" },
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
  showLinks: true,
  showSectionBg: true,
  sectionBg: "background",
  sectionPadding: "default",
  titleAlign: "left",
  titleColor: "primary-1",
  descriptionColor: "700",
  linkColor: "primary-1",
  linkHoverColor: "primary-2",
  linkFontWeight: "semibold",
  linkUnderline: "always",
  linkItalic: false,
  titleFontWeight: "semibold",
  descriptionFontWeight: "normal",
};

export function resolveParagraphStyle(style = {}) {
  const { linkUnderline, ...rest } = style;

  let resolvedUnderline = DEFAULT_PARAGRAPH_STYLE.linkUnderline;
  if (linkUnderline === true) resolvedUnderline = "always";
  else if (linkUnderline === false) resolvedUnderline = "none";
  else if (LINK_UNDERLINE_OPTIONS.some((option) => option.value === linkUnderline)) {
    resolvedUnderline = linkUnderline;
  }

  return {
    ...DEFAULT_PARAGRAPH_STYLE,
    ...rest,
    linkUnderline: resolvedUnderline,
  };
}

export const PARAGRAPH_STYLE_RESET_KEYS = {
  layout: [
    "showTitle",
    "showDescription",
    "showSectionBg",
    "sectionBg",
    "sectionPadding",
    "titleAlign",
    "titleColor",
    "titleFontWeight",
    "descriptionColor",
    "descriptionFontWeight",
  ],
  links: [
    "showLinks",
    "linkColor",
    "linkHoverColor",
    "linkFontWeight",
    "linkUnderline",
    "linkItalic",
  ],
};
