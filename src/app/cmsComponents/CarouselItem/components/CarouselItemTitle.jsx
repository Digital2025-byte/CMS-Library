import { typography } from "@/styles/typography";
import { getThemeColorCss } from "@/styles/themeColors";
import {
  DEFAULT_CAROUSEL_ITEM_STYLE,
  TITLE_ALIGN_CLASS,
} from "../utils/style";

export default function CarouselItemTitle({
  title = "",
  align = DEFAULT_CAROUSEL_ITEM_STYLE.titleAlign,
  color = DEFAULT_CAROUSEL_ITEM_STYLE.titleColor,
}) {
  if (!title) return null;

  const alignClass = TITLE_ALIGN_CLASS[align] ?? TITLE_ALIGN_CLASS.left;

  return (
    <h1
      className={`${typography.sectionTitle} font-semibold ${alignClass}`}
      style={{ color: getThemeColorCss(color, "white") }}
    >
      {title}
    </h1>
  );
}
