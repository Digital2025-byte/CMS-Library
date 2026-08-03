"use client";

import OppositeScrollPanel from "./components/OppositeScrollPanel";
import { getOppositeScrollCarouselContent } from "./utils/helpers";

const ImageCarouselsWithOppositeScrollDirections = ({
  lang = "en",
  data,
  cId,
}) => {
  const {
    title,
    description,
    exploreLabel,
    exploreHref,
    topRow,
    bottomRow,
    hasContent,
  } = getOppositeScrollCarouselContent(data, lang);

  if (!hasContent) {
    return null;
  }

  return (
    <OppositeScrollPanel
      title={title}
      description={description}
      exploreLabel={exploreLabel}
      exploreHref={exploreHref}
      topRow={topRow}
      bottomRow={bottomRow}
      cId={cId}
    />
  );
};

export default ImageCarouselsWithOppositeScrollDirections;
