"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import PageContentContainer from "@/components/layout/PageContentContainer";
import DualImageTextContent from "./DualImageTextContent";

export default function DualImageTextPanel({
  lang = "en",
  items = [],
  blueLayer = false,
  underlineFirstWord = false,
  animate = false,
  bgColor = "bg-100",
  showExploreButton = false,
  exploreButtonLabel = "Explore more",
  exploreButtonHref = "explore",
  cId,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.35, once: false });

  const content = (
    <DualImageTextContent
      items={items}
      blueLayer={blueLayer}
      underlineFirstWord={underlineFirstWord}
      showExploreButton={showExploreButton}
      exploreButtonLabel={exploreButtonLabel}
      exploreButtonHref={exploreButtonHref}
      cId={cId}
    />
  );

  return (
    <section
      ref={ref}
      className={`flex items-center justify-center py-10 sm:py-12 lg:py-16 ${bgColor}`}
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <PageContentContainer>
        {animate ? (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 2, ease: "easeIn" }}
          >
            {content}
          </motion.div>
        ) : (
          content
        )}
      </PageContentContainer>
    </section>
  );
}
