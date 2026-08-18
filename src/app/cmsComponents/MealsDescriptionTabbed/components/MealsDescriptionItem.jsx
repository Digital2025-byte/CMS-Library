import { typography } from "@/styles/typography";
import { getThemeColorCss } from "@/styles/themeColors";
import { DEFAULT_MEALS_TABBED_STYLE } from "../utils/style";

export default function MealsDescriptionItem({
  item,
  striped = false,
  titleColor = DEFAULT_MEALS_TABBED_STYLE.itemTitleColor,
  accordionStyle = {},
}) {
  const showTitle =
    accordionStyle.showItemTitle !== false && Boolean(item?.title);
  const showDescription =
    accordionStyle.showItemDescription !== false && Boolean(item?.description);

  if (!showTitle && !showDescription) {
    return null;
  }

  const stripeCss = getThemeColorCss(
    accordionStyle.stripeColor || DEFAULT_MEALS_TABBED_STYLE.stripeColor,
    "primary-2"
  );
  const itemBgCss = getThemeColorCss(
    accordionStyle.itemBg || DEFAULT_MEALS_TABBED_STYLE.itemBg,
    "white"
  );
  const titleCss = getThemeColorCss(titleColor, "primary-1");
  const bodyCss = getThemeColorCss(
    accordionStyle.itemBodyColor || DEFAULT_MEALS_TABBED_STYLE.itemBodyColor,
    "600"
  );

  return (
    <div
      className="px-4 py-4"
      style={{
        backgroundColor: striped
          ? `color-mix(in srgb, ${stripeCss} 10%, transparent)`
          : itemBgCss,
      }}
    >
      {showTitle ? (
        <h4
          className={`${typography.itemDescription} font-medium wrap-break-word`}
          style={{ color: titleCss }}
        >
          {item.title}
        </h4>
      ) : null}
      {showDescription ? (
        <p
          className={`${typography.body} mt-1 leading-relaxed wrap-break-word`}
          style={{ color: bodyCss }}
        >
          {item.description}
        </p>
      ) : null}
    </div>
  );
}
