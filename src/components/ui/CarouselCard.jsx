"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CalendarCheckIcon, ClockIcon, StarIcon } from "@phosphor-icons/react";
import Button from "@/components/ui/Button";
import { typography } from "@/styles/typography";

const MAX_VISIBLE_STACK = 5;

/** Bottom glass panel — blur + tint + all copy share this height (matches blur layer). */
const BOTTOM_PANEL_CLASS = "h-[38%] sm:h-[30%]";

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
      className={`absolute inset-0 cursor-grab overflow-hidden rounded-3xl ${isActive ? "" : "blur-[2px]"
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
          className={`absolute inset-0 bg-secondary-2/30 transition-opacity duration-300 ${isActive ? "opacity-0" : "opacity-40"
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
        <div className="absolute inset-0 overflow-hidden rounded-b-3xl bg-secondary-2/40" />

        <div className="relative z-10 flex h-full min-h-0 flex-1 flex-col overflow-visible">
          <div className="flex flex-none items-center justify-between gap-2 overflow-visible px-3 pt-2.5 pb-1 sm:px-4 sm:pt-3 sm:pb-1.5">
            <div className="flex min-w-0 flex-1 items-center gap-2 pe-2">
              <h3
                className={`${typography.itemTitle} min-w-0 truncate text-start font-semibold text-50`}
              >
                {cityName}
              </h3>
              <span
                className={`${typography.caption} -mt-1 inline-flex max-w-[min(100%,11rem)] shrink-0 items-center truncate rounded-full bg-900/30 px-2.5 py-1 font-medium text-50 sm:max-w-[14rem]`}
              >
                {originLabel}
              </span>
            </div>
            <Button
              href={`/${posParams}/${lang}/flight-schedule${IATACode ? `?to=${IATACode}` : ""
                }`}
              label={lang === "ar" ? "احجز الان" : "Book now"}
              className="pointer-events-auto relative z-20 shrink-0 -translate-y-1/2 !border-main !bg-main !p-3    hover:text-main "
              onClick={(event) => event.stopPropagation()}
              variant="primary"
            />
          </div>

          <div className="flex min-h-0 flex-1 flex-col gap-1 overflow-hidden px-3 pb-2 sm:gap-1.5 sm:px-4 sm:pb-2.5">
            <div
              className={`${typography.caption} flex min-h-0 w-full flex-none flex-nowrap items-center gap-x-2 overflow-x-auto overscroll-x-contain font-medium text-50 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`}
            >
              <span className="inline-flex shrink-0 items-center gap-1">
                <StarIcon
                  weight="fill"
                  className="h-3 w-3 shrink-0 text-secondary sm:h-3.5 sm:w-3.5"
                />
                New
              </span>
              <span className="shrink-0 text-50/35" aria-hidden>
                |
              </span>
              <span className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap">
                <CalendarCheckIcon className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5" />
                {numberOfFlightsPerWeek}{" "}
                {lang === "ar" ? "رحلات في الأسبوع" : "Flights per week"}
              </span>
              <span className="shrink-0 text-50/35" aria-hidden>
                |
              </span>
              <span className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap">
                <ClockIcon className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5" />
                {`${lang === "ar" ? "مدة الرحلة" : "Duration"}: ${duration}`}
              </span>
            </div>

            <p
              className={`${typography.caption} min-h-0 flex-1 overflow-hidden text-start leading-snug font-light text-50 [overflow-wrap:anywhere] line-clamp-2 sm:line-clamp-3 lg:line-clamp-4`}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
