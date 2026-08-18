import CustomBackgroundImage from "@/components/ui/CustomBackgroundImage";
import PageContentContainer from "@/components/layout/PageContentContainer";
import { getThemeColorCss } from "@/styles/themeColors";
import { isUsableImageSrc } from "../utils/helpers";
import { DEFAULT_BANNER_WITH_CTAS_STYLE } from "../utils/style";
import BannerWithCTAsAndItemsContent from "./BannerWithCTAsAndItemsContent";

export default function BannerWithCTAsAndItemsPanel({
  lang = "en",
  title,
  description,
  backgroundImage,
  imageAlt = "",
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
  showHeroImage = DEFAULT_BANNER_WITH_CTAS_STYLE.showHeroImage,
  showOverlay = DEFAULT_BANNER_WITH_CTAS_STYLE.showOverlay,
  titleAlign = DEFAULT_BANNER_WITH_CTAS_STYLE.titleAlign,
  titleColor = DEFAULT_BANNER_WITH_CTAS_STYLE.titleColor,
  descriptionColor = DEFAULT_BANNER_WITH_CTAS_STYLE.descriptionColor,
  overlayColor = DEFAULT_BANNER_WITH_CTAS_STYLE.overlayColor,
  itemColor = DEFAULT_BANNER_WITH_CTAS_STYLE.itemColor,
  primaryBg = DEFAULT_BANNER_WITH_CTAS_STYLE.primaryBg,
  primaryText = DEFAULT_BANNER_WITH_CTAS_STYLE.primaryText,
  secondaryText = DEFAULT_BANNER_WITH_CTAS_STYLE.secondaryText,
}) {
  const heroSrc =
    showHeroImage && isUsableImageSrc(backgroundImage) ? backgroundImage : "";
  const overlayCss = showOverlay
    ? getThemeColorCss(overlayColor, "main")
    : undefined;

  return (
    <CustomBackgroundImage
      imageUrl={heroSrc}
      desktopGradient={showOverlay}
      overlayColor={overlayCss}
      lang={lang}
      className="w-full min-h-[52vh] sm:min-h-[48vh] lg:min-h-[56vh]"
      style={
        heroSrc
          ? undefined
          : { backgroundColor: getThemeColorCss(overlayColor, "main") }
      }
    >
      <PageContentContainer
        className="flex min-h-[52vh] items-center sm:min-h-[48vh] lg:min-h-[56vh]"
        aria-label={imageAlt || title || undefined}
      >
        <BannerWithCTAsAndItemsContent
          title={title}
          description={description}
          items={items}
          primaryLabel={primaryLabel}
          primaryHref={primaryHref}
          secondaryLabel={secondaryLabel}
          secondaryHref={secondaryHref}
          showTitle={showTitle}
          showDescription={showDescription}
          showItems={showItems}
          showPrimaryButton={showPrimaryButton}
          showSecondaryButton={showSecondaryButton}
          titleAlign={titleAlign}
          titleColor={titleColor}
          descriptionColor={descriptionColor}
          itemColor={itemColor}
          primaryBg={primaryBg}
          primaryText={primaryText}
          secondaryText={secondaryText}
        />
      </PageContentContainer>
    </CustomBackgroundImage>
  );
}
