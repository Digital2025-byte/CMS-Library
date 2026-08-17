export const TITLE_ALIGN_OPTIONS = [
  { value: "left", label: "Left" },
  { value: "center", label: "Center" },
];

export const TEXT_COLOR_OPTIONS = [
  { value: "primary-1", label: "Brand" },
  { value: "main", label: "Navy" },
  { value: "800", label: "Near black" },
  { value: "700", label: "Gray" },
  { value: "50", label: "White" },
];

export const SURFACE_OPTIONS = [
  { value: "white", label: "White" },
  { value: "50", label: "Off white" },
  { value: "100", label: "Light gray" },
  { value: "200", label: "Gray" },
  { value: "primary-1", label: "Brand" },
  { value: "main", label: "Navy" },
];

export const ITEM_LOOK_OPTIONS = [
  { value: "filled", label: "Filled" },
  { value: "outline", label: "Outline" },
];

export const ITEM_RADIUS_OPTIONS = [
  { value: "none", label: "Square" },
  { value: "sm", label: "Small" },
  { value: "lg", label: "Rounded" },
  { value: "full", label: "Pill" },
];

export const BUTTON_POSITION_OPTIONS = [
  { value: "left", label: "Left" },
  { value: "center", label: "Center" },
  { value: "right", label: "Right" },
];

export const SPACING_OPTIONS = [
  { value: "tight", label: "Tight" },
  { value: "default", label: "Default" },
  { value: "loose", label: "Loose" },
];

export const BUTTON_VARIANT_OPTIONS = [
  { value: "primary", label: "Solid" },
  { value: "outline", label: "Outline" },
];

export const BUTTON_WIDTH_OPTIONS = [
  { value: "auto", label: "Auto" },
  { value: "full", label: "Full" },
];

export const TITLE_ALIGN_CLASS = {
  left: "text-start",
  center: "text-center",
};

export const TEXT_COLOR_CLASS = {
  "primary-1": "text-primary-1",
  main: "text-main",
  "800": "text-800",
  "700": "text-700",
  "50": "text-50",
};

export const SURFACE_CLASS = {
  white: "bg-white",
  "50": "bg-50",
  "100": "bg-100",
  "200": "bg-200",
  "primary-1": "bg-primary-1",
  main: "bg-main",
};

export const ITEM_RADIUS_CLASS = {
  none: "rounded-none",
  sm: "rounded-sm",
  lg: "rounded-lg",
  full: "rounded-2xl",
};

export const ITEM_GAP_CLASS = {
  tight: "gap-2",
  default: "gap-3 sm:gap-4",
  loose: "gap-5 sm:gap-6",
};

export const ITEM_PADDING_CLASS = {
  tight: "px-3 py-3",
  default: "px-4 py-4 sm:px-5 sm:py-5 md:px-6",
  loose: "px-6 py-6",
};

export const DEFAULT_ACCORDION_STYLE = {
  showTitleDescription: true,
  showDescription: true,
  showButton: true,
  sectionBg: "100",
  titleAlign: "left",
  titleColor: "primary-1",
  descriptionColor: "700",
  itemLook: "filled",
  itemBg: "white",
  itemRadius: "lg",
  itemGap: "default",
  itemPadding: "default",
  itemTitleColor: "800",
  itemOpenColor: "primary-1",
  itemBodyColor: "700",
  buttonPosition: "center",
  buttonVariant: "primary",
  buttonWidth: "auto",
};
