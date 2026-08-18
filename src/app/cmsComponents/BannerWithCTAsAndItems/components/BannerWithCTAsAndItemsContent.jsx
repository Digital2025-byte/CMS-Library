import { typography } from "@/styles/typography";
import { getThemeColorCss } from "@/styles/themeColors";
import {
  DEFAULT_BANNER_WITH_CTAS_STYLE,
  TITLE_ALIGN_CLASS,
} from "../utils/style";
import BannerWithCTAsAndItemsButtons from "./BannerWithCTAsAndItemsButtons";
import BannerWithCTAsAndItemsList from "./BannerWithCTAsAndItemsList";

export default function BannerWithCTAsAndItemsContent({
  title,
  description,
  items,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  showTitle = DEFAULT_BANNER_WITH_CTAS_STYLE.showTitle,
  showDescription = DEFAULT_BANNER_WITH_CTAS_STYLE.showDescription,
  showItems = DEFAULT_BANNER_WITH_CTAS_STYLE.showItems,
  showPrimaryButton = DEFAULT_BANNER_WITH_CTAS_STYLE.showPrimaryButton,
  showSecondaryButton = DEFAULT_BANNER_WITH_CTAS_STYLE.showSecondaryButton,
  titleAlign = DEFAULT_BANNER_WITH_CTAS_STYLE.titleAlign,
  titleColor = DEFAULT_BANNER_WITH_CTAS_STYLE.titleColor,
  descriptionColor = DEFAULT_BANNER_WITH_CTAS_STYLE.descriptionColor,
  itemColor = DEFAULT_BANNER_WITH_CTAS_STYLE.itemColor,
  primaryBg = DEFAULT_BANNER_WITH_CTAS_STYLE.primaryBg,
  primaryText = DEFAULT_BANNER_WITH_CTAS_STYLE.primaryText,
  secondaryText = DEFAULT_BANNER_WITH_CTAS_STYLE.secondaryText,
}) {
  const showHeading = showTitle && title;
  const showCopy = showDescription && description;
  const alignClass = TITLE_ALIGN_CLASS[titleAlign] ?? TITLE_ALIGN_CLASS.left;

  return (
    <div
      className={`mx-auto w-full max-w-md py-10 sm:mx-0 sm:max-w-none sm:py-12 lg:w-1/2 lg:py-14 ${alignClass}`}
    >
      {showHeading ? (
        <h1
          className={`${typography.sectionTitle} font-semibold leading-tight`}
          style={{ color: getThemeColorCss(titleColor, "white") }}
        >
          {title}
        </h1>
      ) : null}

      {showCopy ? (
        <p
          className={`${typography.sectionDescription} mt-3 leading-relaxed sm:mt-4`}
          style={{ color: getThemeColorCss(descriptionColor, "white") }}
        >
          {description}
        </p>
      ) : null}

      {showItems ? (
        <BannerWithCTAsAndItemsList items={items} itemColor={itemColor} />
      ) : null}

      <BannerWithCTAsAndItemsButtons
        primaryLabel={showPrimaryButton ? primaryLabel : ""}
        primaryHref={primaryHref}
        secondaryLabel={showSecondaryButton ? secondaryLabel : ""}
        secondaryHref={secondaryHref}
        primaryBg={primaryBg}
        primaryText={primaryText}
        secondaryText={secondaryText}
      />
    </div>
  );
}
