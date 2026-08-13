"use client";

import OnBoardImageRingPanel from "./components/OnBoardImageRingPanel";
import { getOnBoardImageRingContent } from "./utils/helpers";

/**
 * OnBoardImageRing — full-width navy 3D image strip with title and captions.
 */
export default function OnBoardImageRing({ lang = "en", data }) {
  const { title, description, images, captions, hasContent } =
    getOnBoardImageRingContent(data, lang);

  if (!hasContent) return null;

  return (
    <OnBoardImageRingPanel
      lang={lang}
      title={title}
      description={description}
      images={images}
      captions={captions}
    />
  );
}
