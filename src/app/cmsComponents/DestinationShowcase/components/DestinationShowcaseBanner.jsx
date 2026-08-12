"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import DestinationShowcaseBlueLayer from "./DestinationShowcaseBlueLayer";
import DestinationShowcaseContent from "./DestinationShowcaseContent";
import DestinationShowcaseNav from "./DestinationShowcaseNav";
import DestinationShowcaseCards from "./DestinationShowcaseCards";
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
    <div className="relative min-h-[540px] overflow-hidden shadow-xl lg:rounded-xl">
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

      <div className="relative z-10 flex h-full min-h-[500px] flex-col justify-center md:min-h-[540px] md:flex-row">
        <div className="relative flex h-[335px] min-h-0 flex-none flex-col overflow-hidden p-8 md:h-[530px] md:flex-1 md:p-12 lg:p-16">
          <DestinationShowcaseContent
            name={current.name}
            description={current.description}
            activeIndex={activeIndex}
            direction={direction}
          />
          <DestinationShowcaseNav
            exploreLabel={exploreLabel}
            exploreHref={current.exploreLink}
            lang={lang}
            onPrev={onPrev}
            onNext={onNext}
            showButton={showButton}
            showSliderArrows={showSliderArrows}
          />
        </div>

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
  );
}
