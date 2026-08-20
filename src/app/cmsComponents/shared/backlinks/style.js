export const LINK_UNDERLINE_OPTIONS = [
  { value: "none", label: "None" },
  { value: "always", label: "Always" },
  { value: "hover", label: "On hover" },
];

export const DEFAULT_BACKLINK_STYLE = {
  showLinks: true,
  linkColor: "primary-1",
  linkHoverColor: "primary-2",
  linkFontWeight: "semibold",
  linkUnderline: "always",
  linkItalic: false,
};

export const BACKLINK_STYLE_RESET_KEYS = [
  "showLinks",
  "linkColor",
  "linkHoverColor",
  "linkFontWeight",
  "linkUnderline",
  "linkItalic",
];

export function resolveBacklinkUnderline(linkUnderline, fallback = "always") {
  if (linkUnderline === true) return "always";
  if (linkUnderline === false) return "none";
  if (LINK_UNDERLINE_OPTIONS.some((option) => option.value === linkUnderline)) {
    return linkUnderline;
  }
  return fallback;
}
