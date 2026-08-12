"use client";

import Image from "next/image";
import { CARD_IMAGE_SIZES, CARD_STEP_PX, CLONE_COUNT } from "../utils/constants";

function toMappedIndex(index, destinationsLength) {
  if (index < CLONE_COUNT) {
    return destinationsLength - CLONE_COUNT + index;
  }
  if (index >= destinationsLength + CLONE_COUNT) {
    return index - destinationsLength - CLONE_COUNT;
  }
  return index - CLONE_COUNT;
}

export default function DestinationShowcaseCards({
  infiniteList,
  destinationsLength,
  activeIndex,
  virtualIndex,
  sliderRef,
  lang = "en",
  onCardClick,
}) {
  return (
    <div className="relative mt-12 flex w-full items-center justify-start overflow-hidden p-6 md:mt-0 md:w-80 md:p-8 lg:w-[470px]">
      <div className="relative h-[220px] w-full max-w-[400px] p-1 md:h-[230px] lg:p-0">
        <div
          ref={sliderRef}
          className="flex h-full items-end gap-5 transition-transform duration-900 ease-initial"
          style={{
            transform:
              lang === "ar"
                ? `translateX(${virtualIndex * CARD_STEP_PX}px)`
                : `translateX(-${virtualIndex * CARD_STEP_PX}px)`,
          }}
        >
          {infiniteList.map((dest, index) => {
            const mappedIndex = toMappedIndex(index, destinationsLength);
            const isActive = mappedIndex === activeIndex;

            return (
              <button
                key={`${dest.id}-${index}`}
                type="button"
                onClick={() => onCardClick(mappedIndex)}
                className={`relative shrink-0 cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-all duration-300 ${
                  isActive
                    ? "ring-3 shadow-2xl ring-50/80"
                    : "opacity-80 hover:opacity-100"
                }`}
                style={{
                  width: isActive ? "160px" : "148px",
                  height: isActive ? "100%" : "75%",
                }}
                aria-label={dest.name || "Destination"}
              >
                {dest.cardImageUrl ? (
                  <Image
                    src={dest.cardImageUrl}
                    alt={dest.name || "Destination"}
                    fill
                    sizes={CARD_IMAGE_SIZES}
                    className="object-cover"
                    unoptimized={
                      typeof dest.cardImageUrl === "string" &&
                      dest.cardImageUrl.startsWith("http")
                    }
                  />
                ) : null}
                <div className="absolute inset-0 bg-gradient-to-t from-main/30 to-transparent" />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
