"use client";

import CoolSlideGallery from "@/components/lightswind/cool-slide-gallery";
import { slides } from "./utils/data";

/**
 * Lightswind CoolSlideGallery demo.
 * @see https://lightswind.com/components/cool-slide-gallery
 */
export default function CoolSlideGallerySection({ lang = "en" }) {
  return (
    <section className="w-full" lang={lang}>
      <div
        className="flex h-[560px] w-full items-center justify-center"
        style={{
          backgroundColor: "#050505",
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.14) 1px, transparent 1.2px)",
          backgroundSize: "22px 22px",
        }}
      >
        <CoolSlideGallery
          slides={slides}
          cardWidth={360}
          cardHeight={420}
          radius={5}
          tilt={14}
          sideTilt={6}
          gap={8}
          dimOpacity={55}
          showTitle
          showBadge
          titlePosition="bottom-left"
          showArrows
          showDots
          showCounter={false}
          clickable
          draggable
          keyboardNavigation
          autoplay={false}
          animationDuration={0.6}
          easing="smooth"
          maxVisible={2}
          depth={230}
          scaleStep={0.15}
          perspective={1500}
        />
      </div>
    </section>
  );
}
