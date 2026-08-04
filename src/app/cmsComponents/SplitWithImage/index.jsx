"use client";

import SplitWithImagePanel from "./components/SplitWithImagePanel";
import { getSplitWithImageContent } from "./utils/helpers";

const SplitWithImage = ({ lang = "en", data }) => {
  const {
    title,
    description,
    backgroundImageUrl,
    imageUrl,
    imageAlt,
    hasContent,
  } = getSplitWithImageContent(data, lang);

  if (!hasContent) {
    return null;
  }

  return (
    <SplitWithImagePanel
      lang={lang}
      title={title}
      description={description}
      backgroundImageUrl={backgroundImageUrl}
      imageUrl={imageUrl}
      imageAlt={imageAlt}
    />
  );
};

export default SplitWithImage;
