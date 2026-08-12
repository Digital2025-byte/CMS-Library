"use client";

import Image from "next/image";
import {
  CARD_ACTIVE_W_PX,
  CARD_GAP_PX,
  CARD_IMAGE_SIZES,
  CARD_INACTIVE_W_PX,
  CARD_STEP_PX,
} from "../utils/constants";

export default function DestinationShowcaseCards({
  infiniteList,
  destinationsLength,
  virtualIndex,
  jumping,
  lang = "en",
  onCardClick,
}) {
  return (
    <div className="relative mt-12 flex w-full items-center justify-start overflow-hidden p-6 md:mt-0 md:w-80 md:p-8 lg:w-[470px]">
      <div className="relative h-[220px] w-full max-w-[400px] p-1 md:h-[230px] lg:p-0">
        <div
          className={`flex h-full items-end ${
            jumping
              ? ""
              : "transition-transform duration-900 ease-[cubic-bezier(0.33,1,0.68,1)]"
          }`}
          style={{
            gap: `${CARD_GAP_PX}px`,
            transform:
              lang === "ar"
                ? `translateX(${virtualIndex * CARD_STEP_PX}px)`
                : `translateX(-${virtualIndex * CARD_STEP_PX}px)`,
          }}
        >
          {infiniteList.map((dest, index) => {
            // The card sitting at the left edge (== virtualIndex) is the active
            // one; modulo maps any copy back to its real destination index.
            const isActive = index === virtualIndex;
            const mappedIndex =
              destinationsLength > 0 ? index % destinationsLength : 0;

            return (
              <button
                key={`${dest.id}-${index}`}
                type="button"
                onClick={() => onCardClick(mappedIndex)}
                className={`relative shrink-0 cursor-pointer overflow-hidden rounded-2xl shadow-lg ${
                  jumping ? "" : "transition-all duration-300"
                } ${
                  isActive
                    ? "ring-3 shadow-2xl ring-50/80"
                    : "opacity-80 hover:opacity-100"
                }`}
                style={{
                  width: `${isActive ? CARD_ACTIVE_W_PX : CARD_INACTIVE_W_PX}px`,
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
