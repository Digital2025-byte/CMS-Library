"use client";

import BannerWithCTAsAndItemsPanel from "./components/BannerWithCTAsAndItemsPanel";
import { getBannerWithCTAsAndItemsContent } from "./utils/helpers";
import { DEFAULT_BANNER_WITH_CTAS_STYLE } from "./utils/style";

const BannerWithCTAsAndItems = ({
  lang = "en",
  data,
  posParams,
  cId,
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
}) => {
  const {
    title,
    description,
    backgroundImage,
    imageAlt,
    primaryLabel,
    secondaryLabel,
    primaryHref,
    secondaryHref,
    items,
    hasContent,
  } = getBannerWithCTAsAndItemsContent(data, lang, posParams, cId);

  if (!hasContent) {
    return null;
  }

  return (
    <BannerWithCTAsAndItemsPanel
      lang={lang}
      title={title}
      description={description}
      backgroundImage={backgroundImage}
      imageAlt={imageAlt}
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
      showHeroImage={showHeroImage}
      showOverlay={showOverlay}
      titleAlign={titleAlign}
      titleColor={titleColor}
      descriptionColor={descriptionColor}
      overlayColor={overlayColor}
      itemColor={itemColor}
      primaryBg={primaryBg}
      primaryText={primaryText}
      secondaryText={secondaryText}
    />
  );
};

export default BannerWithCTAsAndItems;
