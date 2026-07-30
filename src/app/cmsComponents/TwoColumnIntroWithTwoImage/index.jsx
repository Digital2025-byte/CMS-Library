"use client";

import TwoColumnContent from "./components/TwoColumnContent";
import TwoColumnMedia from "./components/TwoColumnMedia";
import { getTwoColumnIntroContent } from "./utils/helpers";

const TwoColumnIntroWithTwoImage = ({ lang = "en", data }) => {
  const {
    title,
    description,
    ctaButton,
    ctaHref,
    mainImage,
    mainImageAlt,
    overlayImage,
    overlayImageAlt,
    isReversed,
  } = getTwoColumnIntroContent(data);

  if (!title && !description && !mainImage && !overlayImage) {
    return null;
  }

  return (
    <section
      className={`flex flex-col items-center gap-10 lg:gap-3  ${
        isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <TwoColumnContent
        title={title}
        description={description}
        ctaButton={ctaButton}
        ctaHref={ctaHref}
      />
      <TwoColumnMedia
        lang={lang}
        mainImage={mainImage}
        mainImageAlt={mainImageAlt}
        overlayImage={overlayImage}
        overlayImageAlt={overlayImageAlt}
      />
    </section>
  );
};

export default TwoColumnIntroWithTwoImage;
