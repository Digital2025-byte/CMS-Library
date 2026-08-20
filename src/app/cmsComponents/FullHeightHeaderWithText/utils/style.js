import {
  BACKLINK_STYLE_RESET_KEYS,
  DEFAULT_BACKLINK_STYLE,
  resolveBacklinkStyle,
} from "@/app/cmsComponents/shared/backlinks";

export const TITLE_ALIGN_OPTIONS = [
  { value: "left", label: "Start" },
  { value: "center", label: "Center" },
];

export const TITLE_ALIGN_CLASS = {
  left: "text-start",
  center: "text-center",
};

export const DEFAULT_FULL_HEIGHT_HEADER_STYLE = {
  showTitle: true,
  showDescription: true,
  showButton: true,
  showHeroImage: true,
  showOverlay: true,
  titleAlign: "left",
  titleColor: "secondary-100",
  descriptionColor: "secondary-100",
  overlayColor: "main",
  buttonBg: "primary-2",
  buttonText: "white",
  titleFontWeight: "semibold",
  descriptionFontWeight: "normal",
  buttonTextFontWeight: "semibold",
  ...DEFAULT_BACKLINK_STYLE,
};

export function resolveFullHeightHeaderStyle(style = {}) {
  return resolveBacklinkStyle(
    { ...DEFAULT_FULL_HEIGHT_HEADER_STYLE, ...style },
    DEFAULT_FULL_HEIGHT_HEADER_STYLE
  );
}

export const FULL_HEIGHT_HEADER_STYLE_RESET_KEYS = {
  layout: ["showTitle", "showDescription"],
  banner: ["showHeroImage", "showOverlay", "overlayColor"],
  title: ["titleAlign", "titleColor", "titleFontWeight", "descriptionColor", "descriptionFontWeight"],
  button: ["showButton", "buttonBg", "buttonText", "buttonTextFontWeight"],
  links: [...BACKLINK_STYLE_RESET_KEYS],
};
