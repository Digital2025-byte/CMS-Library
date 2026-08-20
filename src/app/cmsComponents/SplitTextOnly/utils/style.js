import {
  BACKLINK_STYLE_RESET_KEYS,
  DEFAULT_BACKLINK_STYLE,
  resolveBacklinkStyle,
} from "@/app/cmsComponents/shared/backlinks";

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

export const DEFAULT_SPLIT_TEXT_ONLY_STYLE = {
  showTitle: true,
  showDescription: true,
  showBackgroundImage: true,
  showOverlay: true,
  showSectionBg: true,
  sectionBg: "main",
  titleAlign: "left",
  titleColor: "secondary-100",
  descriptionColor: "secondary-100",
  titleFontWeight: "semibold",
  descriptionFontWeight: "normal",
  ...DEFAULT_BACKLINK_STYLE,
};

export function resolveSplitTextOnlyStyle(style = {}) {
  return resolveBacklinkStyle(
    { ...DEFAULT_SPLIT_TEXT_ONLY_STYLE, ...style },
    DEFAULT_SPLIT_TEXT_ONLY_STYLE
  );
}

export const SPLIT_TEXT_ONLY_STYLE_RESET_KEYS = {
  layout: [
    "showTitle",
    "showDescription",
    "showSectionBg",
    "sectionBg",
    "showBackgroundImage",
    "showOverlay",
  ],
  title: ["titleAlign", "titleColor", "titleFontWeight", "descriptionColor", "descriptionFontWeight"],
  links: [...BACKLINK_STYLE_RESET_KEYS],
};
