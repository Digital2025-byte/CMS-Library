"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SplitTextOnlyBackground from "./components/SplitTextOnlyBackground";
import SplitTextOnlyContent from "./components/SplitTextOnlyContent";
import { getSplitTextOnlyContent } from "./utils/helpers";

const SplitTextOnly = ({ lang = "en", data }) => {
  const { title, description, backgroundImage, hasContent } =
    getSplitTextOnlyContent(data, lang);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: false });

  if (!hasContent) {
    return null;
  }

  return (
    <div ref={ref}>
      <SplitTextOnlyBackground
        imageUrl={backgroundImage}
        mobileGradient
        desktopGradient
        className="min-h-[20vh] lg:min-h-[50vh]"
      >
        <section className="flex min-h-[20vh] items-end justify-center lg:min-h-[50vh] lg:items-center">
          <motion.div
            className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 0, y: 90 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 90 }}
            transition={{ duration: 2, ease: "easeIn" }}
          >
            <SplitTextOnlyContent title={title} description={description} />
          </motion.div>
        </section>
      </SplitTextOnlyBackground>
    </div>
  );
};

export default SplitTextOnly;
