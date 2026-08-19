import { InfoIcon } from "@phosphor-icons/react";
import { typography } from "@/styles/typography";
import { getThemeColorCss } from "@/styles/themeColors";
import {
  DEFAULT_TITLE_WITH_LIST_STYLE,
  TITLE_ALIGN_CLASS,
} from "../utils/style";

export default function TitleWithListPanel({
  lang = "en",
  title,
  items = [],
  style = DEFAULT_TITLE_WITH_LIST_STYLE,
}) {
  const isRtl = lang === "ar";
  const showHeading = style.showTitle && title;
  const showList = style.showDescription && items.length;
  const alignClass =
    TITLE_ALIGN_CLASS[style.titleAlign] ?? TITLE_ALIGN_CLASS.left;
  const titleColor = getThemeColorCss(style.titleColor, "primary-1");
  const itemColor = getThemeColorCss(style.descriptionColor, "primary-1");

  if (!showHeading && !showList) {
    return null;
  }

  return (
    <div className={alignClass} dir={isRtl ? "rtl" : "ltr"}>
      {showHeading ? (
        <h2
          className={`${typography.itemTitle} flex items-center gap-2 font-medium`}
          style={{ color: titleColor }}
        >
          {style.showIcon ? (
            <InfoIcon
              size={24}
              weight="regular"
              aria-hidden
              className="shrink-0"
              style={{ color: getThemeColorCss(style.iconColor, "primary-1") }}
            />
          ) : null}
          <span>{title}</span>
        </h2>
      ) : null}

      {showList ? (
        <ul
          className={`${typography.body} mt-3 space-y-3 leading-relaxed`}
          style={{ color: itemColor }}
        >
          {items.map((item, index) => (
            <li
              key={`${String(item).slice(0, 32)}-${index}`}
              className="flex items-start gap-2.5"
            >
              {style.showBullets ? (
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{
                    backgroundColor: getThemeColorCss(
                      style.bulletColor,
                      "primary-2"
                    ),
                  }}
                  aria-hidden
                />
              ) : null}
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
