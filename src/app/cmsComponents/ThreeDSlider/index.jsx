"use client";

import ThreeDSlider from "@/components/lightswind/3d-slider";
import { sliderItems } from "./utils/data";

/**
 * Lightswind 3D slider — destination cards on a dotted stage.
 */
export default function ThreeDSliderSection({ lang = "en" }) {
  return (
    <section className="w-full" lang={lang}>
      <ThreeDSlider items={sliderItems} speedWheel={0.03} speedDrag={-0.15} />
    </section>
  );
}
