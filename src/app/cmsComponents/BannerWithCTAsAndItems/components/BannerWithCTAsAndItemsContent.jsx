import { typography } from "@/styles/typography";
import { getThemeColorCss } from "@/styles/themeColors";
import {
  DEFAULT_BANNER_WITH_CTAS_STYLE,
  TITLE_ALIGN_CLASS,
} from "../utils/style";
import BannerWithCTAsAndItemsButtons from "./BannerWithCTAsAndItemsButtons";
import BannerWithCTAsAndItemsList from "./BannerWithCTAsAndItemsList";

export default function BannerWithCTAsAndItemsContent({
  content,
  style = DEFAULT_BANNER_WITH_CTAS_STYLE,
  cId,
}) {
  const title = content.title;
  const description = content.description;
  const showHeading = style.showTitle && title;
  const showCopy = style.showDescription && description;
  const alignClass =
    TITLE_ALIGN_CLASS[style.titleAlign] ?? TITLE_ALIGN_CLASS.left;

  return (
    <div
      className={`mx-auto w-full max-w-md py-10 sm:mx-0 sm:max-w-none sm:py-12 lg:w-1/2 lg:py-14 ${alignClass}`}
    >
      {showHeading ? (
        <h1
          className={`${typography.sectionTitle} font-semibold leading-tight`}
          style={{ color: getThemeColorCss(style.titleColor, "white") }}
        >
          {title}
        </h1>
      ) : null}

      {showCopy ? (
        <p
          className={`${typography.sectionDescription} mt-3 leading-relaxed sm:mt-4`}
          style={{ color: getThemeColorCss(style.descriptionColor, "white") }}
        >
          {description}
        </p>
      ) : null}

      {style.showItems ? (
        <BannerWithCTAsAndItemsList items={content.items} style={style} />
      ) : null}

      <BannerWithCTAsAndItemsButtons
        primaryLabel={style.showPrimaryButton ? content.primaryLabel : ""}
        primaryHref={content.primaryHref}
        secondaryLabel={style.showSecondaryButton ? content.secondaryLabel : ""}
        secondaryHref={content.secondaryHref}
        style={style}
        cId={cId}
      />
    </div>
  );
}
