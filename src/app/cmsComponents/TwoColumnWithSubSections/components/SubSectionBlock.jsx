import { getThemeColorCss } from "@/styles/themeColors";
import { getFontWeightValue } from "@/styles/fontWeight";
import { DEFAULT_TWO_COLUMN_SUB_SECTIONS_STYLE } from "../utils/style";

export default function SubSectionBlock({
  title,
  description,
  style = DEFAULT_TWO_COLUMN_SUB_SECTIONS_STYLE,
}) {
  if (!title && !description) {
    return null;
  }

  return (
    <div className="min-w-0 flex-1">
      {title ? (
        <h3
          className="mb-2 text-sm font-medium sm:text-base"
          style={{ color: getThemeColorCss(style.itemTitleColor, "secondary-2"), fontWeight: getFontWeightValue(style.itemTitleFontWeight),
          }}
        >
          {title}
        </h3>
      ) : null}
      {description ? (
        <p
          className="text-sm leading-6"
          style={{ color: getThemeColorCss(style.itemBodyColor, "600") }}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
