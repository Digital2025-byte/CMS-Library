"use client";

import { AnimatePresence, motion } from "framer-motion";
import { typography } from "@/styles/typography";
import { MOVE_DURATION_S, MOVE_EASE } from "../utils/constants";

const titleVariants = {
  enter: (direction) => ({
    y: direction > 0 ? "110%" : "-110%",
  }),
  center: {
    y: 0,
  },
  exit: (direction) => ({
    y: direction > 0 ? "-110%" : "110%",
  }),
};

export default function DestinationShowcaseContent({
  name,
  description,
  activeIndex,
  direction,
}) {
  const slideDirection = direction === 0 ? 1 : direction;

  return (
    <div className="flex min-h-0 flex-1 flex-col justify-center overflow-hidden">
      <div className="relative z-20">
        <div className="relative mb-4 overflow-hidden md:mb-6">
          {/* Reserve height so absolute title slides don’t collapse layout */}
          <h3
            className={`${typography.pageTitle} invisible font-bold`}
            aria-hidden
          >
            {name || "\u00A0"}
          </h3>

          <AnimatePresence
            mode="sync"
            initial={false}
            custom={slideDirection}
          >
            <motion.h3
              key={activeIndex}
              custom={slideDirection}
              variants={titleVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: MOVE_DURATION_S,
                ease: MOVE_EASE,
              }}
              className={`${typography.pageTitle} absolute inset-x-0 top-0 font-bold text-50`}
            >
              {name}
            </motion.h3>
          </AnimatePresence>
        </div>

        {description ? (
          <p className={`${typography.body} mb-6 max-w-lg text-50/90 md:mb-6`}>
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
