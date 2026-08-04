"use client";

import MixedLeftThreeImagesPanel from "./components/MixedLeftThreeImagesPanel";
import { getMixedLeftThreeImagesContent } from "./utils/helpers";

const MixedLeftThreeImages = ({ lang = "en", data }) => {
  const {
    title,
    description,
    primaryCta,
    secondaryCta,
    largeImage,
    smallImageOne,
    smallImageTwo,
    hasContent,
  } = getMixedLeftThreeImagesContent(data, lang);

  if (!hasContent) {
    return null;
  }

  return (
    <MixedLeftThreeImagesPanel
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

export default MixedLeftThreeImages;
