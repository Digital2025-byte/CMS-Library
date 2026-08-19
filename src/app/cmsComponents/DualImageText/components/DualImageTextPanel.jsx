"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import PageContentContainer from "@/components/layout/PageContentContainer";
import DualImageTextContent from "./DualImageTextContent";
import { DEFAULT_DUAL_IMAGE_TEXT_STYLE } from "../utils/style";

export default function DualImageTextPanel({
  lang = "en",
  content,
  style = DEFAULT_DUAL_IMAGE_TEXT_STYLE,
  extraImagePositions = [],
  cId,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.35, once: false });

  const copy = (
    <DualImageTextContent
      items={content.items}
      firstSection={content.firstSection}
      showFirstSection={style.showFirstSection}
      blueLayer={style.blueLayer}
      underlineFirstWord={style.underlineFirstWord}
      showExploreButton={style.showExploreButton}
      exploreButtonLabel={content.exploreButtonLabel}
      exploreButtonHref={content.exploreButtonHref}
      showExtraImage={style.showExtraImage}
      extraImageUrl={content.extraImageUrl}
      extraImageAlt={content.extraImageAlt}
      extraImagePositions={extraImagePositions}
      cId={cId}
    />
  );

  return (
    <section
      ref={ref}
      className={`flex items-center justify-center py-10 sm:py-12 lg:py-16 ${style.bgColor}`}
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <PageContentContainer>
        {style.animate ? (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 2, ease: "easeIn" }}
          >
            {copy}
          </motion.div>
        ) : (
          copy
        )}
      </PageContentContainer>
    </section>
  );
}
