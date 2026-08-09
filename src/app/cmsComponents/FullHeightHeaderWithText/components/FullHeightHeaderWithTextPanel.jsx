"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CustomBackgroundImage from "@/components/ui/CustomBackgroundImage";
import PageContentContainer from "@/components/layout/PageContentContainer";
import FullHeightHeaderWithTextContent from "./FullHeightHeaderWithTextContent";

export default function FullHeightHeaderWithTextPanel({
  lang = "en",
  title = "",
  description = "",
  buttonText = "",
  ctaHref = "",
  backgroundImage = "",
  cId,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.4, once: false });
  const isRtl = lang === "ar";

  return (
    <div
      ref={ref}
      className="relative h-dvh min-h-dvh w-full"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <CustomBackgroundImage
        imageUrl={backgroundImage}
        className="h-full min-h-dvh"
        initialAnimation={{ scale: 1 }}
        animateAnimation={{ scale: 1.12 }}
        transition={{ duration: 5, ease: "easeInOut" }}
        mobileGradient
        desktopGradient
        lang={lang}
      >
        <section className="flex h-full min-h-dvh items-end justify-center py-16 sm:py-20 lg:items-center lg:py-24">
          <PageContentContainer className="w-full">
            <motion.div
              className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2"
              initial={{ opacity: 0, y: 64 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 64 }
              }
              transition={{ delay: 0.15, duration: 0.9, ease: "easeOut" }}
            >
              <FullHeightHeaderWithTextContent
                lang={lang}
                title={title}
                description={description}
                buttonText={buttonText}
                ctaHref={ctaHref}
                cId={cId}
              />
            </motion.div>
          </PageContentContainer>
        </section>
      </CustomBackgroundImage>
    </div>
  );
}
