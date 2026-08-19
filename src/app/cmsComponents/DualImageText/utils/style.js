export const DEFAULT_DUAL_IMAGE_TEXT_STYLE = {
  underlineFirstWord: false,
  blueLayer: false,
  animate: false,
  showExploreButton: false,
  showFirstSection: false,
  showExtraImage: false,
  bgColor: "bg-100",
};

export function resolveDualImageTextStyle(style = {}) {
  return {
    ...DEFAULT_DUAL_IMAGE_TEXT_STYLE,
    ...style,
  };
}
