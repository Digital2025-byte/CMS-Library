"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import CustomBackgroundImage from "@/components/ui/CustomBackgroundImage";
import { typography } from "@/styles/typography";
import { pageContentPadding } from "@/styles/layout";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.035,
    },
  },
};

const wordVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.15,
      ease: "easeOut",
    },
  },
};

export default function SplitWithImagePanel({
  lang = "en",
  title,
  description,
  backgroundImageUrl,
  imageUrl,
  imageAlt,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: false });
  const words = String(description || "")
    .split(/\s+/)
    .filter(Boolean);

  return (
    <div ref={ref} dir={lang === "ar" ? "rtl" : "ltr"}>
      <CustomBackgroundImage
        imageUrl={backgroundImageUrl}
        className="min-h-screen"
        initialAnimation={{ scale: 1 }}
        animateAnimation={isInView ? { scale: 1.3 } : { scale: 1 }}
        transition={{ duration: 7, ease: "easeInOut" }}
      >
        <section className="flex min-h-screen items-center justify-center">
          <div
            className={`${pageContentPadding} mx-auto mb-8 grid w-full max-w-[1430px] grid-cols-1 gap-0 lg:grid-cols-2`}
          >
            <div className="order-2 -mt-14 p-4 lg:order-1">
              <h2
                className={`${typography.pageTitle} mb-4 font-bold text-primary-1`}
              >
                {title}
              </h2>
              <motion.p
                className={`${typography.sectionDescription} text-start font-medium leading-9 text-secondary-2`}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {words.map((wordText, index) => (
                  <motion.span
                    key={`${wordText}-${index}`}
                    variants={wordVariants}
                    className="me-1 inline-block"
                  >
                    {wordText}
                  </motion.span>
                ))}
              </motion.p>
            </div>

            <motion.div
              className="order-1 p-4 py-0 lg:order-2"
              initial={{ x: -45, y: -40 }}
              animate={
                isInView ? { x: -5, y: -55 } : { x: -45, y: -40 }
              }
              transition={{ delay: 1.5, duration: 5, ease: "easeIn" }}
            >
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  alt={imageAlt || ""}
                  width={1000}
                  height={1000}
                  className="h-full w-full scale-110 object-contain"
                  priority
                />
              ) : null}
            </motion.div>
          </div>
        </section>
      </CustomBackgroundImage>
    </div>
  );
}
