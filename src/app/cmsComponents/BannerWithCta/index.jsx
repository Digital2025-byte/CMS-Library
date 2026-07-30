"use client";

import BannerWithCtaPanel from "./components/BannerWithCtaPanel";
import { getBannerWithCtaContent } from "./utils/helpers";

const BannerWithCta = ({ lang = "en", data, posParams }) => {
  const { title, description, ctaLabel, ctaHref, backgroundImage, hasContent } =
    getBannerWithCtaContent(data, lang, posParams);

  if (!hasContent) {
    return null;
  }

  return (
    <>
      <BannerWithCtaPanel
        title={title}
        description={description}
        ctaLabel={ctaLabel}
        ctaHref={ctaHref}
        backgroundImage={backgroundImage}
      />
    </>
  );
};

export default BannerWithCta;
