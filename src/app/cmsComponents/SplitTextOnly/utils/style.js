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

export const IMAGE_FIT_OPTIONS = [
  { value: "cover", label: "Cover" },
  { value: "contain", label: "Contain" },
  { value: "fill", label: "Stretch" },
];

export const IMAGE_POSITION_OPTIONS = [
  { value: "center", label: "Center" },
  { value: "top", label: "Top" },
  { value: "bottom", label: "Bottom" },
  { value: "left", label: "Left" },
  { value: "right", label: "Right" },
];

export const TITLE_ALIGN_CLASS = {
  left: "text-start",
  center: "text-center",
};

export const IMAGE_FIT_CSS = {
  cover: "cover",
  contain: "contain",
  fill: "100% 100%",
};

export const IMAGE_POSITION_CSS = {
  center: "center",
  top: "center top",
  bottom: "center bottom",
  left: "left center",
  right: "right center",
};

export const DEFAULT_SPLIT_TEXT_ONLY_STYLE = {
  showTitle: true,
  showDescription: true,
  showBackgroundImage: true,
  imageFit: "cover",
  imagePosition: "center",
  showOverlay: true,
  overlayColor: "primary-1",
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
  const merged = resolveBacklinkStyle(
    { ...DEFAULT_SPLIT_TEXT_ONLY_STYLE, ...style },
    DEFAULT_SPLIT_TEXT_ONLY_STYLE
  );

  return {
    ...merged,
    imageFit: IMAGE_FIT_CSS[merged.imageFit] ? merged.imageFit : "cover",
    imagePosition: IMAGE_POSITION_CSS[merged.imagePosition]
      ? merged.imagePosition
      : "center",
  };
}

export const SPLIT_TEXT_ONLY_STYLE_RESET_KEYS = {
  layout: [
    "showTitle",
    "showDescription",
    "showSectionBg",
    "sectionBg",
    "showBackgroundImage",
    "imageFit",
    "imagePosition",
    "showOverlay",
    "overlayColor",
  ],
  title: [
    "titleAlign",
    "titleColor",
    "titleFontWeight",
    "descriptionColor",
    "descriptionFontWeight",
  ],
  links: [...BACKLINK_STYLE_RESET_KEYS],
};
