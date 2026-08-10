"use client";

import { useMemo } from "react";
import CarouselItemPanel from "./components/CarouselItemPanel";
import { getCarouselItemContent } from "./utils/helpers";

/**
 * CarouselItem — destinations carousel (3-up desktop / 1-up mobile).
 */
export default function CarouselItem({
  lang = "en",
  data,
  posParams = "gb",
  cId,
}) {
  const content = useMemo(
    () => getCarouselItemContent(data, lang),
    [data, lang]
  );

  if (!content) {
    return null;
  }

  return (
    <CarouselItemPanel
      lang={lang}
      content={content}
      posParams={posParams}
      cId={cId}
    />
  );
}
