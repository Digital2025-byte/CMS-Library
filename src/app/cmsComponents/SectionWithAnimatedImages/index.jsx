"use client";

import AnimatedImagesPanel from "./components/AnimatedImagesPanel";
import { getSectionWithAnimatedImagesContent } from "./utils/helpers";

const SectionWithAnimatedImages = ({ lang = "en", data, cId }) => {
  const {
    preTitle,
    title,
    buttonText,
    buttonLink,
    iconType,
    images,
    hasContent,
  } = getSectionWithAnimatedImagesContent(data, lang);

  if (!hasContent) {
    return null;
  }

  return (
    <AnimatedImagesPanel
      preTitle={preTitle}
      title={title}
      buttonText={buttonText}
      buttonLink={buttonLink}
      iconType={iconType}
      images={images}
      cId={cId}
    />
  );
};

export default SectionWithAnimatedImages;
