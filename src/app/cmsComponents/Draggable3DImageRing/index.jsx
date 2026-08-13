"use client";

import { ThreeDImageRing } from "@/components/lightswind/draggable-3d-image-ring";

const imageUrls = [
  "https://images.pexels.com/photos/1704120/pexels-photo-1704120.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/912110/pexels-photo-912110.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/114979/pexels-photo-114979.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/698808/pexels-photo-698808.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/2449540/pexels-photo-2449540.jpeg?auto=compress&cs=tinysrgb&w=1200",
];

/**
 * Lightswind draggable 3D image ring — framed like the library preview.
 */
export default function Draggable3DImageRing({ lang = "en" }) {
  return (
    <section className="w-full bg-white py-8 sm:py-12 lg:py-16" lang={lang}>
      <div
        className="relative mx-4 overflow-hidden rounded-2xl border border-zinc-200/80 sm:mx-6 lg:mx-auto lg:max-w-5xl"
        style={{
          backgroundColor: "#ffffff",
          backgroundImage:
            "radial-gradient(circle, #d4d4d8 1px, transparent 1.2px)",
          backgroundSize: "18px 18px",
        }}
      >
        <div className="h-[460px] w-full sm:h-[540px] md:h-[600px]">
          <ThreeDImageRing images={imageUrls} />
        </div>
      </div>
    </section>
  );
}
