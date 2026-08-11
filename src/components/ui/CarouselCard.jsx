"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CalendarCheckIcon, ClockIcon, StarIcon } from "@phosphor-icons/react";
import Link from "next/link";

const MAX_VISIBLE_STACK = 5;

/** Bottom glass panel — blur + tint + all copy share this height (matches blur layer). */
const BOTTOM_PANEL_CLASS = "h-[38%] sm:h-[35%]";

export default function CarouselCard({
  IATACode,
  imageUrl,
  numberOfFlightsPerWeek,
  duration,
  cityName,
  description,
  subtitle,
  isActive,
  stackIndex,
  direction,
  isLeaving,
  isEntering,
  onSelect,
  onDragEnd,
  posParams,
  lang,
}) {
  const safeStackIndex =
    typeof stackIndex === "number" && !Number.isNaN(stackIndex)
      ? stackIndex
      : 0;

  const isPast = safeStackIndex < 0;
  const rawIndex = Math.max(safeStackIndex, 0);
  const clampedIndex = Math.min(rawIndex, MAX_VISIBLE_STACK - 1);
  const hidden = isPast || clampedIndex >= MAX_VISIBLE_STACK;

  const translateX = -clampedIndex * 60;
  const translateY = clampedIndex * 8;
  const scale = 1 - clampedIndex * 0.08;
  const opacity = hidden ? 0 : 1 - clampedIndex * 0.15;

  const baseTransform = {
    x: translateX,
    y: translateY,
    scale,
    opacity,
    rotateZ: 0,
  };

  const calculatedZIndex = 40 - (safeStackIndex < 0 ? 0 : safeStackIndex);
  const safeZIndex =
    typeof calculatedZIndex === "number" && !Number.isNaN(calculatedZIndex)
      ? calculatedZIndex
      : 40;

  const originLabel =
    subtitle && String(subtitle).trim() ? String(subtitle).trim() : "From Dam";

  const src =
    typeof imageUrl === "string"
      ? imageUrl
      : imageUrl?.src || imageUrl?.[0] || "";

  return (
    <motion.div
      className={`absolute inset-0 cursor-grab overflow-hidden rounded-3xl ${
        isActive ? "" : "blur-[2px]"
      }`}
      style={{
        zIndex: safeZIndex,
        pointerEvents: hidden ? "none" : "auto",
      }}
      drag={isActive ? "x" : false}
      dragConstraints={isActive ? { left: 0, right: 0 } : undefined}
      dragElastic={0.2}
      onDragEnd={isActive ? onDragEnd : undefined}
      onClick={onSelect}
      onKeyDown={(event) => {
        if (!onSelect) return;
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onSelect();
        }
      }}
      role="button"
      tabIndex={hidden ? -1 : 0}
      aria-pressed={isActive}
      aria-hidden={hidden}
      initial={
        isEntering && direction === -1
          ? {
              x: "120%",
              y: 0,
              scale: 0.98,
              opacity: 0,
              rotateZ: 4,
            }
          : false
      }
      animate={
        hidden
          ? {
              ...baseTransform,
              opacity: 0,
            }
          : isLeaving && direction === 1
            ? {
                x: "120%",
                y: 0,
                scale: 0.98,
                opacity: 0,
                rotateZ: 4,
              }
            : baseTransform
      }
      transition={{ type: "spring", stiffness: 260, damping: 26 }}
    >
      <div className="relative h-full w-full">
        <div className="relative h-full w-full">
          {src ? (
            <Image
              src={src}
              alt={cityName || "Destination"}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 680px"
            />
          ) : null}
        </div>
        <div
          className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${
            isActive ? "opacity-0" : "opacity-40"
          }`}
        />
      </div>

      <div
        className={`pointer-events-none absolute inset-x-0 bottom-0 ${BOTTOM_PANEL_CLASS} flex flex-col overflow-visible`}
      >
        <div
          className="absolute inset-0 overflow-hidden rounded-b-3xl"
          style={{
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
          }}
        />
        <div className="absolute inset-0 overflow-hidden rounded-b-3xl bg-[#000000]/40" />

        <div className="relative z-10 flex h-full min-h-0 flex-1 flex-col overflow-visible">
          <div className="flex flex-none items-center justify-between gap-2 overflow-visible px-3 pt-2.5 pb-1 sm:px-4 sm:pt-3 sm:pb-1.5">
            <div className="flex min-w-0 flex-1 items-center gap-2 pe-2">
              <h3 className="min-w-0 truncate text-start text-base font-bold text-[#FFFFFF] sm:text-lg">
                {cityName}
              </h3>
              <span className="-mt-1 inline-flex max-w-[min(100%,11rem)] shrink-0 items-center truncate rounded-full bg-[#1D1B20]/30 px-2.5 py-1 text-xs font-medium text-[#FFFFFF] sm:max-w-[14rem] sm:px-2.5 sm:py-1 sm:text-sm">
                {originLabel}
              </span>
            </div>
            <Link
              href={`/${posParams}/${lang}/flight-schedule${
                IATACode ? `?to=${IATACode}` : ""
              }`}
              className="pointer-events-auto relative z-20 shrink-0 -translate-y-1/2"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={(event) => event.stopPropagation()}
                className="whitespace-nowrap rounded-lg bg-[#054E72] px-3 py-2 text-[13px] font-semibold text-[#FDFDFC] shadow-md transition hover:bg-white hover:text-[#054E72] sm:px-4 sm:py-2 sm:text-sm lg:px-5 lg:py-2.5"
              >
                {lang === "ar" ? "تحقق من الرحلات" : "Check flights"}
              </button>
            </Link>
          </div>

          <div className="flex min-h-0 flex-1 flex-col gap-1 overflow-hidden px-3 pb-2 sm:gap-1.5 sm:px-4 sm:pb-2.5">
            <div className="flex min-h-0 w-full flex-none flex-nowrap items-center gap-x-2 overflow-x-auto overscroll-x-contain text-[10px] leading-tight font-medium text-[#FFFFFF] [scrollbar-width:none] sm:text-xs [&::-webkit-scrollbar]:hidden">
              <span className="inline-flex shrink-0 items-center gap-1">
                <StarIcon
                  weight="fill"
                  className="h-3 w-3 shrink-0 text-[#E9B328] sm:h-3.5 sm:w-3.5"
                />
                New
              </span>
              <span className="shrink-0 text-white/35" aria-hidden>
                |
              </span>
              <span className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap">
                <CalendarCheckIcon className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5" />
                {numberOfFlightsPerWeek}{" "}
                {lang === "ar" ? "رحلات في الأسبوع" : "Flights per week"}
              </span>
              <span className="shrink-0 text-white/35" aria-hidden>
                |
              </span>
              <span className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap">
                <ClockIcon className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5" />
                {`${lang === "ar" ? "مدة الرحلة" : "Duration"}: ${duration}`}
              </span>
            </div>

            <p className="min-h-0 flex-1 overflow-hidden text-start text-[11px] leading-snug font-light text-[#FFFFFF] [overflow-wrap:anywhere] line-clamp-2 sm:line-clamp-3 lg:line-clamp-4">
              {description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
