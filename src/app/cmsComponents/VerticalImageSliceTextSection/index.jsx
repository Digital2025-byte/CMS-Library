"use client";

import VerticalImageSliceImage from "./components/VerticalImageSliceImage";
import VerticalImageSliceText from "./components/VerticalImageSliceText";
import { getVerticalImageSliceContent } from "./utils/helpers";

const VerticalImageSliceTextSection = ({ lang = "en", data }) => {
  const {
    firstPart,
    highlightPart,
    restPart,
    description,
    imageSrc,
    imageAlt,
    hasContent,
  } = getVerticalImageSliceContent(data, lang);

  if (!hasContent) {
    return null;
  }

  return (
    <div className="grid w-full grid-cols-1 items-center gap-6 overflow-visible lg:grid-cols-2 ">
      <VerticalImageSliceText
        firstPart={firstPart}
        highlightPart={highlightPart}
        restPart={restPart}
        description={description}
      />

      <div className="order-first overflow-hidden lg:order-last">
        <VerticalImageSliceImage imageSrc={imageSrc} imageAlt={imageAlt} />
      </div>
    </div>
  );
};

export default VerticalImageSliceTextSection;
