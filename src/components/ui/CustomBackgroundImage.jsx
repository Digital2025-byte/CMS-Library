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
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        className={`absolute inset-0 z-0 bg-cover bg-center ${
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
          className={`absolute inset-y-0 z-[1] w-full opacity-90 lg:w-3/4 ${
            lang === "ar"
              ? "right-0 bg-gradient-to-l from-main via-main/70 to-transparent"
              : "left-0 bg-gradient-to-r from-main via-main/70 to-transparent"
          }`}
        />
      ) : null}

      {specialGradient ? (
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-main/20 to-primary-800"
          aria-hidden
        />
      ) : null}

      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}
