"use client";

import { motion } from "framer-motion";
import useIsMobile from "@/hooks/useIsMobile";

function toCssUrl(url = "") {
  return String(url)
    .replace(/\s/g, "%20")
    .replace(/\(/g, "%28")
    .replace(/\)/g, "%29");
}

export default function CustomBackgroundImage({
  imageUrl,
  mobileImageUrl,
  className = "",
  children,
  initialAnimation = { scale: 1 },
  animateAnimation = { scale: 1 },
  transition = { duration: 5, ease: "easeInOut" },
  desktopGradient = false,
  mobileGradient = false,
  lang = "en",
  flipImage = false,
  specialGradient = false,
}) {
  const isMobile = useIsMobile(768);

  const bgSrc =
    isMobile && (mobileImageUrl?.src || mobileImageUrl)
      ? mobileImageUrl?.src || mobileImageUrl
      : imageUrl?.src || imageUrl;

  const safeBgSrc = typeof bgSrc === "string" ? toCssUrl(bgSrc) : bgSrc;

  return (
    <div className={`relative ${className}`}>
      {/* Clip image/gradient only — keep children outside so backdrop-blur works */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className={`absolute inset-0 h-full w-full bg-cover bg-center ${
            flipImage ? "scale-x-[-1]" : ""
          }`}
          style={{
            backgroundImage: safeBgSrc ? `url(${safeBgSrc})` : undefined,
            backgroundPosition: isMobile ? "center top" : "center center",
          }}
          initial={initialAnimation}
          animate={animateAnimation}
          transition={transition}
        />

        {desktopGradient ? (
          <div
            className={`absolute inset-y-0 w-full lg:w-3/4 ${
              mobileGradient ? "hidden lg:block" : ""
            } ${
              lang === "ar"
                ? "right-0 bg-gradient-to-l from-main/50 to-transparent"
                : "left-0 bg-gradient-to-r from-main/50 to-transparent"
            }`}
            aria-hidden
          />
        ) : null}

        {mobileGradient ? (
          <div
            className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-main/50 to-transparent lg:hidden"
            aria-hidden
          />
        ) : null}

        {specialGradient ? (
          <div
            className="absolute inset-0"
            style={{
              // Keep photo visible at the bottom so the city card can blur it
              backgroundImage:
                "linear-gradient(180deg, rgb(5 78 114 / 0.2) 0%, rgb(19 54 75 / 0.72) 100%)",
            }}
            aria-hidden
          />
        ) : null}
      </div>

      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
}
