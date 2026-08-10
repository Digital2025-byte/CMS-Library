"use client";

import React from "react";
import { ThreeDImageRing } from "@/components/lightswind/3d-image-ring";
import TitleDescription from "./TitleDescription";

/**
 * ThreeDImageRingSection Component
 * Displays a 3D rotating image ring with captions
 * 
 * @param {Object} props
 * @param {string} props.lang - Language code ('en' or 'ar')
 * @param {Object} props.data - Component data with translations
 * @param {Array} props.data.translations - Array of translation objects
 * @param {Object} props.data.translations[0].content - Content object
 * @param {string} props.data.translations[0].content.title - Section title
 * @param {string} props.data.translations[0].content.description - Section description
 * @param {Array<string>} props.data.translations[0].content.images - Array of image URLs
 * @param {Array<string>} props.data.translations[0].content.captions - Array of captions for each image
 * @param {Object} [props.data.translations[0].content.config - Optional configuration
 * @param {number} [props.data.translations[0].content.config.width - Ring width (default: 500)
 * @param {number} [props.data.translations[0].content.config.perspective - 3D perspective (default: 1000)
 * @param {number} [props.data.translations[0].content.config.imageDistanc - Image distance (default: 800)
 * @param {string} [props.data.translations[0].content.config.backgroundColor - Background color (default: "#054E72")
 * @param {string} [props.data.translations[0].content.sectionClassNam - Custom section className
 * @param {string} [props.data.translations[0].content.containerHeight - Container height (default: "h-[500px] md:h-[600px] lg:h-[800px]")
 */
const ThreeDImageRingSection = ({ lang = "en", data }) => {
  const translations = Array.isArray(data?.translations) ? data.translations : [];
  const normalizedLang = String(lang || "").toLowerCase();
  const selectedTranslation =
    translations.find(
      (translation) =>
        String(translation?.languageCode || "").toLowerCase() === normalizedLang
    ) || translations[0];
  const content = selectedTranslation?.content;

  if (!content) {
    return null;
  }

  const {
    title,
    description,
    images = [],
    captions = [],
    config = {},
    sectionClassName = "",
    containerHeight = "h-[360px] sm:h-[460px] md:h-[600px] lg:h-[800px]",
  } = content;

  /**
   * Supports both legacy shape:
   * - images: [url]
   * - captions: [title]
   *
   * and new CMS shape:
   * - pages: [{ title, CardImage: { fileUrl }, CTA: { ... } }]
   */
  const pages = Array.isArray(content?.pages) ? content.pages : [];
  const resolvedImages =
    pages.length > 0
      ? pages
          .map((page) => page?.CardImage?.fileUrl || page?.CardImage?.url || page?.CardImage?.src)
          .filter(Boolean)
      : images
          .map((img) => (typeof img === "string" ? img : img?.fileUrl || img?.url || img?.src))
          .filter(Boolean);

  const resolvedCaptions =
    pages.length > 0
      ? pages.map((page) => page?.title || "").filter(Boolean)
      : captions;

  const {
    width = 400,
    perspective = 1000,
    imageDistance = 800,
    backgroundColor = "#01263B",
  } = config;
  return (
    <section
      className={`w-full ${sectionClassName}`}
      style={{ backgroundColor: backgroundColor }}
    >
      <TitleDescription
        title={title}
        description={description}
        backgroundColor={backgroundColor}
      />
      <div className={`w-full ${containerHeight} flex flex-col`}>
        <ThreeDImageRing
          images={resolvedImages}
          captions={resolvedCaptions}
          lang={lang}
          width={width}
          perspective={perspective}
          imageDistance={imageDistance}
          draggable={true}
          containerClassName="w-full h-full"
          backgroundColor={backgroundColor}
        />
      </div>
    </section>
  );
};

export default ThreeDImageRingSection;
