"use client";

import FullHeightHeaderWithTextPanel from "./components/FullHeightHeaderWithTextPanel";
import { getFullHeightHeaderWithTextContent } from "./utils/helpers";
import { DEFAULT_FULL_HEIGHT_HEADER_STYLE } from "./utils/style";

/**
 * Full-viewport hero with background image, title, description, and CTA.
 */
const FullHeightHeaderWithText = ({
  lang = "en",
  data,
  posParams = "gb",
  cId,
  showTitle = DEFAULT_FULL_HEIGHT_HEADER_STYLE.showTitle,
  showDescription = DEFAULT_FULL_HEIGHT_HEADER_STYLE.showDescription,
  showButton = DEFAULT_FULL_HEIGHT_HEADER_STYLE.showButton,
  showHeroImage = DEFAULT_FULL_HEIGHT_HEADER_STYLE.showHeroImage,
  showOverlay = DEFAULT_FULL_HEIGHT_HEADER_STYLE.showOverlay,
  titleAlign = DEFAULT_FULL_HEIGHT_HEADER_STYLE.titleAlign,
  titleColor = DEFAULT_FULL_HEIGHT_HEADER_STYLE.titleColor,
  descriptionColor = DEFAULT_FULL_HEIGHT_HEADER_STYLE.descriptionColor,
  overlayColor = DEFAULT_FULL_HEIGHT_HEADER_STYLE.overlayColor,
  buttonBg = DEFAULT_FULL_HEIGHT_HEADER_STYLE.buttonBg,
  buttonText = DEFAULT_FULL_HEIGHT_HEADER_STYLE.buttonText,
}) => {
  const content = getFullHeightHeaderWithTextContent(data, lang, posParams);

  if (!content.hasContent) {
    return null;
  }

  return (
    <FullHeightHeaderWithTextPanel
      lang={lang}
      title={content.title}
      description={content.description}
      buttonLabel={content.buttonText}
      ctaHref={content.ctaHref}
      backgroundImage={content.backgroundImage}
      imageAlt={content.imageAlt}
      cId={cId}
      showTitle={showTitle}
      showDescription={showDescription}
      showButton={showButton}
      showHeroImage={showHeroImage}
      showOverlay={showOverlay}
      titleAlign={titleAlign}
      titleColor={titleColor}
      descriptionColor={descriptionColor}
      overlayColor={overlayColor}
      buttonBg={buttonBg}
      buttonText={buttonText}
    />
  );
};

export default FullHeightHeaderWithText;
