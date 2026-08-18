"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CustomBackgroundImage from "@/components/ui/CustomBackgroundImage";
import PageContentContainer from "@/components/layout/PageContentContainer";
import { getThemeColorCss } from "@/styles/themeColors";
import { isUsableImageSrc } from "../utils/helpers";
import { DEFAULT_FULL_HEIGHT_HEADER_STYLE } from "../utils/style";
import FullHeightHeaderWithTextContent from "./FullHeightHeaderWithTextContent";

export default function FullHeightHeaderWithTextPanel({
  lang = "en",
  title = "",
  description = "",
  buttonLabel = "",
  ctaHref = "",
  backgroundImage = "",
  imageAlt = "",
  cId,
  showTitle = DEFAULT_FULL_HEIGHT_HEADER_STYLE.showTitle,
  showDescription = DEFAULT_FULL_HEIGHT_HEADER_STYLE.showDescription,
  showButton = DEFAULT_FULL_HEIGHT_HEADER_STYLE.showButton,
  showHeroImage = DEFAULT_FULL_HEIGHT_HEADER_STYLE.showHeroImage,
  showOverlay = DEFAULT_FULL_HEIGHT_HEADER_STYLE.showOverlay,
  titleAlign = DEFAULT_FULL_HEIGHT_HEADER_STYLE.titleAlign,
  titleColor = DEFAULT_FULL_HEIGHT_HEADER_STYLE.titleColor,
  descriptionColor = DEFAULT_FULL_HEIGHT_HEADER_STYLE.descriptionColor,
  overlayColor = DEFAULT_FULL_HEIGHT_HEADER_STYLE.overlayColor,
  buttonBg = DEFAULT_FULL_HEIGHT_HEADER_STYLE.buttonBg,
  buttonText = DEFAULT_FULL_HEIGHT_HEADER_STYLE.buttonText,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.4, once: false });
  const isRtl = lang === "ar";
  const heroSrc =
    showHeroImage && isUsableImageSrc(backgroundImage) ? backgroundImage : "";
  const overlayCss = showOverlay
    ? getThemeColorCss(overlayColor, "main")
    : undefined;

  return (
    <div
      ref={ref}
      className="relative h-dvh min-h-dvh w-full"
      dir={isRtl ? "rtl" : "ltr"}
      style={
        heroSrc
          ? undefined
          : { backgroundColor: getThemeColorCss(overlayColor, "main") }
      }
    >
      <CustomBackgroundImage
        imageUrl={heroSrc}
        className="h-full min-h-dvh"
        initialAnimation={{ scale: 1 }}
        animateAnimation={{ scale: 1.12 }}
        transition={{ duration: 5, ease: "easeInOut" }}
        mobileGradient={showOverlay}
        desktopGradient={showOverlay}
        overlayColor={overlayCss}
        lang={lang}
      >
        <section
          className="flex h-full min-h-dvh items-end justify-center py-16 sm:py-20 lg:items-center lg:py-24"
          aria-label={imageAlt || title || undefined}
        >
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
                buttonLabel={buttonLabel}
                ctaHref={ctaHref}
                cId={cId}
                showTitle={showTitle}
                showDescription={showDescription}
                showButton={showButton}
                titleAlign={titleAlign}
                titleColor={titleColor}
                descriptionColor={descriptionColor}
                buttonBg={buttonBg}
                buttonText={buttonText}
              />
            </motion.div>
          </PageContentContainer>
        </section>
      </CustomBackgroundImage>
    </div>
  );
}
