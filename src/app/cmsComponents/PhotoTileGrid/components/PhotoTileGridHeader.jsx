import { typography } from "@/styles/typography";
import { getThemeColorCss } from "@/styles/themeColors";
import {
  DEFAULT_PHOTO_TILE_GRID_STYLE,
  TITLE_ALIGN_CLASS,
} from "../utils/style";

export default function PhotoTileGridHeader({
  lang = "en",
  title,
  showTitle = DEFAULT_PHOTO_TILE_GRID_STYLE.showTitle,
  titleAlign = DEFAULT_PHOTO_TILE_GRID_STYLE.titleAlign,
  titleColor = DEFAULT_PHOTO_TILE_GRID_STYLE.titleColor,
}) {
  if (!showTitle || !title) {
    return null;
  }

  const alignClass = TITLE_ALIGN_CLASS[titleAlign] ?? TITLE_ALIGN_CLASS.left;

  return (
    <div
      className={`flex w-full items-center justify-between pt-2 ${alignClass}`}
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <h2
        className={`${typography.sectionTitle} w-full font-bold`}
        style={{ color: getThemeColorCss(titleColor, "white") }}
      >
        {title}
      </h2>
    </div>
  );
}
