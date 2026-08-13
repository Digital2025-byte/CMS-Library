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
      <div
        style={{
          backgroundColor: "#050505",
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.14) 1px, transparent 1.2px)",
          backgroundSize: "22px 22px",
        }}
      >
        <ScrollCarousel features={features} />
      </div>
    </section>
  );
}
