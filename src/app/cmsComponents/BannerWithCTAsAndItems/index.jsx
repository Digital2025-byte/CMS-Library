"use client";

import BannerWithCTAsAndItemsPanel from "./components/BannerWithCTAsAndItemsPanel";
import { getBannerWithCTAsAndItemsContent } from "./utils/helpers";

const BannerWithCTAsAndItems = ({
  lang = "en",
  data,
  posParams,
  cId,
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
    />
  );
};

export default BannerWithCTAsAndItems;
