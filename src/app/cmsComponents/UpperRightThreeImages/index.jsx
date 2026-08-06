"use client";

import UpperRightThreeImagesPanel from "./components/UpperRightThreeImagesPanel";
import { getUpperRightThreeImagesContent } from "./utils/helpers";

const UpperRightThreeImages = ({ lang = "en", data, cId }) => {
  const content = getUpperRightThreeImagesContent(data, lang);

  if (!content.hasContent) {
    return null;
  }

  return (
    <UpperRightThreeImagesPanel
      lang={lang}
      cId={cId}
      title={content.title}
      description={content.description}
      cta={content.cta}
      largeImage={content.largeImage}
      smallImageOne={content.smallImageOne}
      smallImageTwo={content.smallImageTwo}
    />
  );
};

export default UpperRightThreeImages;
