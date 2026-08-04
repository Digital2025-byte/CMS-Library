"use client";

import MixedRightThreeImagesPanel from "./components/MixedRightThreeImagesPanel";
import { getMixedRightThreeImagesContent } from "./utils/helpers";

const MixedRightThreeImages = ({ lang = "en", data }) => {
  const {
    title,
    description,
    primaryCta,
    secondaryCta,
    largeImage,
    smallImageOne,
    smallImageTwo,
    hasContent,
  } = getMixedRightThreeImagesContent(data, lang);

  if (!hasContent) {
    return null;
  }

  return (
    <MixedRightThreeImagesPanel
      lang={lang}
      title={title}
      description={description}
      primaryCta={primaryCta}
      secondaryCta={secondaryCta}
      largeImage={largeImage}
      smallImageOne={smallImageOne}
      smallImageTwo={smallImageTwo}
    />
  );
};

export default MixedRightThreeImages;
