"use client";

import { ScrollCarousel } from "@/components/lightswind/scroll-carousel";
import { features } from "./utils/data";

/**
 * Lightswind ScrollCarousel demo.
 * @see https://lightswind.com/components/scroll-carousel
 */
export default function ScrollCarouselSection({ lang = "en" }) {
  return (
    <section className="w-full" lang={lang}>
      <ScrollCarousel features={features} />
    </section>
  );
}
