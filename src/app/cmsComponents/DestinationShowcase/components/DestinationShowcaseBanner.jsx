"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import DestinationShowcaseBlueLayer from "./DestinationShowcaseBlueLayer";
import DestinationShowcaseContent from "./DestinationShowcaseContent";
import DestinationShowcaseNav from "./DestinationShowcaseNav";
import DestinationShowcaseCards from "./DestinationShowcaseCards";
import DestinationShowcaseControls from "./DestinationShowcaseControls";
import {
  HERO_IMAGE_QUALITY,
  HERO_IMAGE_SIZES,
} from "../utils/constants";

export default function DestinationShowcaseBanner({
  lang = "en",
  exploreLabel,
  current,
  activeIndex,
  direction,
  virtualIndex,
  jumping,
  infiniteList,
  destinationsLength,
  onPrev,
  onNext,
  onCardClick,
  showButton = true,
  showSliderArrows = true,
}) {
  if (!current) return null;

  return (
    <div className="relative min-h-[540px] overflow-hidden shadow-xl md:rounded-xl">
      <div className="absolute inset-0 min-h-[540px]">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeIndex}
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.01, opacity: 1 }}
            transition={{ duration: 0.3, ease: "circOut", delay: 0.01 }}
            className="absolute inset-0"
          >
            {current.imageUrl ? (
              <Image
                src={current.imageUrl}
                alt={current.name || "Destination"}
                fill
                sizes={HERO_IMAGE_SIZES}
                quality={HERO_IMAGE_QUALITY}
                className="object-cover"
                priority={activeIndex === 0}
                unoptimized={
                  typeof current.imageUrl === "string" &&
                  current.imageUrl.startsWith("http")
                }
              />
            ) : null}
          </motion.div>
        </AnimatePresence>
        <DestinationShowcaseBlueLayer />
      </div>

      <div className="relative z-10 flex min-h-[540px] flex-col overflow-hidden">
        <div className="relative flex flex-1 flex-col justify-between gap-6 pb-4 pt-10 sm:pt-12 md:flex-row md:items-stretch md:gap-6 md:px-12 md:pb-6 md:pt-14 lg:px-16">
          <div className="relative z-10 w-full max-w-xl shrink-0 px-5 sm:px-8 md:flex md:flex-1 md:flex-col md:justify-center md:px-0">
            <DestinationShowcaseContent
              name={current.name}
              description={current.description}
              activeIndex={activeIndex}
              direction={direction}
            />
            <DestinationShowcaseNav
              exploreLabel={exploreLabel}
              exploreHref={current.exploreLink}
              showButton={showButton}
            />
          </div>

          <div className="relative z-20 w-full min-w-0 max-w-full overflow-hidden md:flex md:w-[min(100%,560px)] md:shrink-0 md:items-end md:self-end lg:w-[min(100%,640px)]">
            <DestinationShowcaseCards
              infiniteList={infiniteList}
              destinationsLength={destinationsLength}
              virtualIndex={virtualIndex}
              jumping={jumping}
              lang={lang}
              onCardClick={onCardClick}
            />
          </div>
        </div>

        {/* Bottom-center: arrows + dots (mobile target) */}
        <div className="relative z-30 flex shrink-0 justify-center px-5 pb-6 pt-2 sm:pb-8">
          <DestinationShowcaseControls
            lang={lang}
            activeIndex={activeIndex}
            count={destinationsLength}
            onPrev={onPrev}
            onNext={onNext}
            onDotClick={onCardClick}
            showSliderArrows={showSliderArrows}
          />
        </div>
      </div>
    </div>
  );
}
