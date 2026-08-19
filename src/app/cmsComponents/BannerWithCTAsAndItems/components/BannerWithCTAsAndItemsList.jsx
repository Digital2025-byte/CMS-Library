import { CheckCircleIcon } from "@phosphor-icons/react";
import { getThemeColorCss } from "@/styles/themeColors";
import { typography } from "@/styles/typography";
import { DEFAULT_BANNER_WITH_CTAS_STYLE } from "../utils/style";

export default function BannerWithCTAsAndItemsList({
  items = [],
  style = DEFAULT_BANNER_WITH_CTAS_STYLE,
}) {
  if (!items.length) {
    return null;
  }

  const itemCss = getThemeColorCss(style.itemColor, "secondary-200");

  return (
    <ul className="mt-5 flex list-none flex-col items-start gap-3 p-0 sm:mt-6 sm:gap-3.5">
      {items.map((item, index) => (
        <li
          key={`${item}-${index}`}
          className={`${typography.itemDescription} flex items-center gap-2.5 font-medium`}
          style={{ color: itemCss }}
        >
          <CheckCircleIcon
            size={24}
            weight="regular"
            className="shrink-0"
            style={{ color: itemCss }}
            aria-hidden
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
