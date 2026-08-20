"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SplitTextOnlyBackground from "./components/SplitTextOnlyBackground";
import SplitTextOnlyContent from "./components/SplitTextOnlyContent";
import { getSplitTextOnlyContent, isUsableImageSrc, toCssUrl } from "./utils/helpers";
import { resolveSplitTextOnlyStyle } from "./utils/style";

export default function SplitTextOnly({ lang = "en", data, style }) {
  const resolvedStyle = resolveSplitTextOnlyStyle(style);
  const { title, description, links, backgroundImage, hasContent } =
    getSplitTextOnlyContent(data, lang);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: false });

  if (!hasContent) {
    return null;
  }

  const imageUrl =
    resolvedStyle.showBackgroundImage && isUsableImageSrc(backgroundImage)
      ? toCssUrl(backgroundImage)
      : "";

  return (
    <div ref={ref}>
      <SplitTextOnlyBackground
        imageUrl={imageUrl}
        style={resolvedStyle}
        mobileGradient={resolvedStyle.showOverlay}
        desktopGradient={resolvedStyle.showOverlay}
        className="min-h-[20vh] lg:min-h-[50vh]"
      >
        <section className="flex min-h-[20vh] items-end justify-center lg:min-h-[50vh] lg:items-center">
          <motion.div
            className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 0, y: 90 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 90 }}
            transition={{ duration: 2, ease: "easeIn" }}
          >
            <SplitTextOnlyContent
              title={title}
              description={description}
              links={links}
              style={resolvedStyle}
            />
          </motion.div>
        </section>
      </SplitTextOnlyBackground>
    </div>
  );
}
