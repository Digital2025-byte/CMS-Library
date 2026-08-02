"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";
import useIsMobile from "@/hooks/useIsMobile";
import { typography } from "@/styles/typography";

export default function AnimatedCTAButton({
  lang = "en",
  label = "",
  href = "#",
  arrowColor = "#fff",
  textColor = "#fff",
  bgColor,
  bgFillColor,
  textFillColor = textColor,
  arrowFillColor = arrowColor,
  mobileBgColor,
  mobileTextColor,
  mobileArrowColor,
}) {
  const isMobile = useIsMobile(768);
  const ArrowIcon = lang === "ar" ? ArrowLeftIcon : ArrowRightIcon;
  const [hovered, setHovered] = useState(false);

  if (!label) {
    return null;
  }

  const effectiveTextColor =
    isMobile && mobileTextColor != null
      ? mobileTextColor
      : hovered
        ? textFillColor
        : textColor;
  const effectiveArrowColor =
    isMobile && mobileArrowColor != null
      ? mobileArrowColor
      : hovered
        ? arrowFillColor
        : arrowColor;

  const buttonContent = (
    <button
      type="button"
      className={`${isMobile ? "" : "relative z-10"} flex items-center gap-3 rounded-lg px-2.5 py-2`}
      style={{ color: effectiveTextColor }}
    >
      <ArrowIcon className="h-5 w-5 shrink-0" style={{ color: effectiveArrowColor }} />
      <span className={`${typography.button} w-30`}>{label}</span>
    </button>
  );

  const motionProps = isMobile
    ? {
        initial: { width: "180px", height: "40px", color: effectiveTextColor },
      }
    : {
        initial: { width: "40px", height: "40px", color: effectiveTextColor },
        whileHover: {
          width: "180px",
          color: textFillColor,
          backgroundColor: bgFillColor,
        },
        transition: { duration: 0.3 },
      };

  const wrapperStyles = {
    backgroundColor:
      isMobile && mobileBgColor != null ? mobileBgColor : bgColor,
    ...(isMobile ? { color: effectiveTextColor } : {}),
  };

  return (
    <div
      className={`${isMobile ? "" : "relative"} flex items-center ${
        isMobile ? "mt-4" : "mt-8"
      }`}
    >
      <Link href={href || "#"} className="inline-flex text-inherit no-underline">
        <motion.div
          {...motionProps}
          className={`${isMobile ? "" : "absolute"} h-full rounded-4xl bg-primary-1`}
          style={wrapperStyles}
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
        >
          {buttonContent}
        </motion.div>
      </Link>
    </div>
  );
}
