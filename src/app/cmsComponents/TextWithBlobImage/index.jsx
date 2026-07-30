"use client";

import TextBlobContent from "./components/TextBlobContent";
import TextBlobMedia from "./components/TextBlobMedia";
import { getTextWithBlobContent } from "./utils/helpers";

const TextWithBlobImage = ({ lang = "en", data }) => {
  const { title, description, imageSrc, imageAlt } = getTextWithBlobContent(
    data,
    lang
  );

  if (!title && !description && !imageSrc) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <TextBlobContent title={title} description={description} />
      <TextBlobMedia imageSrc={imageSrc} imageAlt={imageAlt} />
    </div>
  );
};

export default TextWithBlobImage;
