"use client";

import BannerWithCTAsAndItemsPanel from "./components/BannerWithCTAsAndItemsPanel";
import { getBannerWithCTAsAndItemsContent } from "./utils/helpers";

const BannerWithCTAsAndItems = ({
  lang = "en",
  data,
  posParams,
  cId,
  showTitleDescription = true,
  showItems = true,
  showPrimaryButton = true,
  showSecondaryButton = true,
}) => {
  const {
    title,
    description,
    backgroundImage,
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
      items={items}
      primaryLabel={primaryLabel}
      primaryHref={primaryHref}
      secondaryLabel={secondaryLabel}
      secondaryHref={secondaryHref}
      showTitleDescription={showTitleDescription}
      showItems={showItems}
      showPrimaryButton={showPrimaryButton}
      showSecondaryButton={showSecondaryButton}
    />
  );
};

export default BannerWithCTAsAndItems;
