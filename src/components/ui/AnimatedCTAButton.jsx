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
  arrowColor = "var(--color-background)",
  textColor = "var(--color-background)",
  bgColor,
  bgFillColor,
  textFillColor = textColor,
  arrowFillColor = arrowColor,
  mobileBgColor,
  mobileTextColor,
  mobileArrowColor,
}) {
  const isMobile = useIsMobile(768);
  const isRtl = lang === "ar";
  const ArrowIcon = isRtl ? ArrowLeftIcon : ArrowRightIcon;
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

  if (isMobile) {
    return (
      <div className="mt-4 flex items-center" dir={isRtl ? "rtl" : "ltr"}>
        <Link href={href || "#"} className="inline-flex text-inherit no-underline">
          <div
            className="flex h-10 items-center gap-3 rounded-4xl px-2.5"
            style={{
              width: "fit-content",
              minWidth: "180px",
              backgroundColor: mobileBgColor ?? bgColor,
              color: mobileTextColor ?? textColor,
            }}
          >
            <ArrowIcon
              className="h-5 w-5 shrink-0"
              style={{ color: mobileArrowColor ?? arrowColor }}
            />
            <span
              className={`${typography.button} whitespace-nowrap font-semibold`}
            >
              {label}
            </span>
          </div>
        </Link>
      </div>
    );
  }

  return (
    <div
      className="relative mt-2 inline-flex h-10 max-w-full items-center overflow-visible"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <motion.div
        className={`absolute inset-y-0 rounded-4xl bg-primary-1 ${
          isRtl ? "right-0" : "left-0"
        }`}
        style={{ backgroundColor: hovered ? bgFillColor ?? bgColor : bgColor }}
        initial={false}
        animate={{ width: hovered ? "100%" : 40 }}
        transition={{ duration: 0.3 }}
      />

      <Link
        href={href || "#"}
        className="relative z-10 inline-flex h-10 items-center gap-3 px-2.5 text-inherit no-underline"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
      >
        <ArrowIcon
          className="h-5 w-5 shrink-0"
          style={{ color: effectiveArrowColor }}
        />
        <span
          className={`${typography.button} whitespace-nowrap font-semibold`}
          style={{ color: effectiveTextColor }}
        >
          {label}
        </span>
      </Link>
    </div>
  );
}
