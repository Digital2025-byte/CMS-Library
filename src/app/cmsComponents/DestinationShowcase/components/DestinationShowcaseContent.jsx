"use client";

import { AnimatePresence, motion } from "framer-motion";
import { typography } from "@/styles/typography";

export default function DestinationShowcaseContent({
  name,
  description,
  activeIndex,
  direction,
}) {
  return (
    <div className="flex min-h-0 flex-1 flex-col justify-center overflow-hidden">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={activeIndex}
          initial={{
            opacity: 0,
            y: direction === 1 ? 50 : -50,
            scale: 0.8,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
          }}
          exit={{
            opacity: 0,
            y: direction === 1 ? -50 : 50,
            scale: 0.8,
            filter: "blur(10px)",
          }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.01 }}
          className="relative z-20"
        >
          {name ? (
            <h3
              className={`${typography.pageTitle} mb-4 font-bold text-50 md:mb-6`}
            >
              {name}
            </h3>
          ) : null}
          {description ? (
            <p
              className={`${typography.body} mb-6 max-w-lg text-50/90 md:mb-6`}
            >
              {description}
            </p>
          ) : null}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
