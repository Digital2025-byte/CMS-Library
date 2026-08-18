"use client";

import BannerWithCtaPanel from "./components/BannerWithCtaPanel";
import { getBannerWithCtaContent } from "./utils/helpers";
import { DEFAULT_BANNER_WITH_CTA_STYLE } from "./utils/style";

const BannerWithCta = ({
  lang = "en",
  data,
  posParams,
  showTitle = DEFAULT_BANNER_WITH_CTA_STYLE.showTitle,
  showDescription = DEFAULT_BANNER_WITH_CTA_STYLE.showDescription,
  showButton = DEFAULT_BANNER_WITH_CTA_STYLE.showButton,
  showHeroImage = DEFAULT_BANNER_WITH_CTA_STYLE.showHeroImage,
  showOverlay = DEFAULT_BANNER_WITH_CTA_STYLE.showOverlay,
  titleAlign = DEFAULT_BANNER_WITH_CTA_STYLE.titleAlign,
  titleColor = DEFAULT_BANNER_WITH_CTA_STYLE.titleColor,
  descriptionColor = DEFAULT_BANNER_WITH_CTA_STYLE.descriptionColor,
  overlayColor = DEFAULT_BANNER_WITH_CTA_STYLE.overlayColor,
  bannerRadius = DEFAULT_BANNER_WITH_CTA_STYLE.bannerRadius,
  buttonBg = DEFAULT_BANNER_WITH_CTA_STYLE.buttonBg,
  buttonText = DEFAULT_BANNER_WITH_CTA_STYLE.buttonText,
}) => {
  const { title, description, ctaLabel, ctaHref, backgroundImage, imageAlt, hasContent } =
    getBannerWithCtaContent(data, lang, posParams);

  if (!hasContent) {
    return null;
  }

  return (
    <BannerWithCtaPanel
      title={title}
      description={description}
      ctaLabel={ctaLabel}
      ctaHref={ctaHref}
      backgroundImage={backgroundImage}
      imageAlt={imageAlt}
      showTitle={showTitle}
      showDescription={showDescription}
      showButton={showButton}
      showHeroImage={showHeroImage}
      showOverlay={showOverlay}
      titleAlign={titleAlign}
      titleColor={titleColor}
      descriptionColor={descriptionColor}
      overlayColor={overlayColor}
      bannerRadius={bannerRadius}
      buttonBg={buttonBg}
      buttonText={buttonText}
    />
  );
};

export default BannerWithCta;
