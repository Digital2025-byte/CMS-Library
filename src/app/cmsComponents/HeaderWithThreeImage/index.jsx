"use client";

import HeaderWithThreeImagePanel from "./components/HeaderWithThreeImagePanel";
import { getHeaderWithThreeImageContent } from "./utils/helpers";
import { DEFAULT_HEADER_WITH_THREE_IMAGE_STYLE } from "./utils/style";

const HeaderWithThreeImage = ({
  lang = "en",
  data,
  showTitle = DEFAULT_HEADER_WITH_THREE_IMAGE_STYLE.showTitle,
  showDescription = DEFAULT_HEADER_WITH_THREE_IMAGE_STYLE.showDescription,
  showHeroImage = DEFAULT_HEADER_WITH_THREE_IMAGE_STYLE.showHeroImage,
  showOverlay = DEFAULT_HEADER_WITH_THREE_IMAGE_STYLE.showOverlay,
  titleAlign = DEFAULT_HEADER_WITH_THREE_IMAGE_STYLE.titleAlign,
  titleColor = DEFAULT_HEADER_WITH_THREE_IMAGE_STYLE.titleColor,
  descriptionColor = DEFAULT_HEADER_WITH_THREE_IMAGE_STYLE.descriptionColor,
  overlayColor = DEFAULT_HEADER_WITH_THREE_IMAGE_STYLE.overlayColor,
}) => {
  const {
    title,
    description,
    imageOne,
    imageTwo,
    imageThree,
    mobileImageOne,
    mobileImageTwo,
    mobileImageThree,
    hasContent,
  } = getHeaderWithThreeImageContent(data, lang);

  if (!hasContent) {
    return null;
  }

  return (
    <HeaderWithThreeImagePanel
      lang={lang}
      title={title}
      description={description}
      imageOne={imageOne}
      imageTwo={imageTwo}
      imageThree={imageThree}
      mobileImageOne={mobileImageOne}
      mobileImageTwo={mobileImageTwo}
      mobileImageThree={mobileImageThree}
      showTitle={showTitle}
      showDescription={showDescription}
      showHeroImage={showHeroImage}
      showOverlay={showOverlay}
      titleAlign={titleAlign}
      titleColor={titleColor}
      descriptionColor={descriptionColor}
      overlayColor={overlayColor}
    />
  );
};

export default HeaderWithThreeImage;
