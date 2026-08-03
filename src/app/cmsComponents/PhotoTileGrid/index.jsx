"use client";

import PhotoTileGridPanel from "./components/PhotoTileGridPanel";
import { getPhotoTileGridContent } from "./utils/helpers";

const PhotoTileGrid = ({ lang = "en", data, cId }) => {
  const { title, destinations, hasContent } = getPhotoTileGridContent(
    data,
    lang
  );

  if (!hasContent) {
    return null;
  }

  return (
    <PhotoTileGridPanel
      lang={lang}
      title={title}
      destinations={destinations}
      cId={cId}
    />
  );
};

export default PhotoTileGrid;
