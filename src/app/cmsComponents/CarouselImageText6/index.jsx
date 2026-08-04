"use client";

import CarouselImageText6Panel from "./components/CarouselImageText6Panel";
import { getCarouselImageText6Content } from "./utils/helpers";

const CarouselImageText6 = ({ lang = "en", data }) => {
  const { title, items, hasContent } = getCarouselImageText6Content(data, lang);

  if (!hasContent) {
    return null;
  }

  return (
    <CarouselImageText6Panel lang={lang} title={title} items={items} />
  );
};

export default CarouselImageText6;
