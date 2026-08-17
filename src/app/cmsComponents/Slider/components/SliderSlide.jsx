"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import PageContentContainer from "@/components/layout/PageContentContainer";
import SliderSlideContent from "./SliderSlideContent";
import { resolveImageOverlay } from "../utils/imageOverlay";

export default function SliderSlide({
  slide,
  lang = "en",
  posParams = "gb",
  cId,
  priority = false,
  imageOverlay,
  isActive = false,
  isPaused = false,
  showSlideText = true,
  showButton = true,
  titleAlign = "left",
  titleColor = "white",
  subtitleColor = "white",
  descriptionColor = "white",
  buttonVariant = "primary",
}) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    if (isActive && !isPaused) {
      const playPromise = video.play();
      if (playPromise?.catch) {
        playPromise.catch(() => {});
      }
    } else {
      video.pause();
      if (!isActive) {
        video.currentTime = 0;
      }
    }
  }, [isActive, isPaused]);

  if (!slide) {
    return null;
  }

  const overlay = resolveImageOverlay(imageOverlay);
  const hasVideo = Boolean(slide.video);
  const hasImage = Boolean(slide.image);

  return (
    <div className="relative box-border w-full min-h-[280px] overflow-hidden leading-normal sm:min-h-[320px] md:min-h-[420px] lg:min-h-[500px]">
      {hasVideo || hasImage ? (
        <div className="absolute inset-0 h-full w-full">
          {hasVideo ? (
            <video
              ref={videoRef}
              className="absolute inset-0 h-full w-full object-cover object-center"
              src={slide.video}
              poster={slide.image || undefined}
              muted
              loop
              playsInline
              autoPlay={isActive && !isPaused}
              preload={priority || isActive ? "auto" : "metadata"}
              aria-label={slide.alt || slide.title || "Slide video"}
            />
          ) : (
            <Image
              src={slide.image}
              alt={slide.alt || slide.title || "Slide"}
              fill
              className="object-cover object-center"
              priority={priority}
              sizes="100vw"
            />
          )}
          {overlay ? (
            <div
              className="absolute inset-0"
              style={{ backgroundImage: overlay.backgroundImage }}
              aria-hidden
            />
          ) : null}
        </div>
      ) : (
        <div className="absolute inset-0 bg-primary-800" aria-hidden />
      )}

      <div className="relative z-[1] flex h-full min-h-[280px] w-full items-end py-8 leading-normal sm:min-h-[320px] sm:py-10 md:min-h-[420px] md:py-12 lg:min-h-[500px] lg:py-16">
        <PageContentContainer className="w-full">
          <SliderSlideContent
            lang={lang}
            posParams={posParams}
            cId={cId}
            title={slide.title}
            subtitle={slide.subtitle}
            description={slide.description}
            buttonText={slide.buttonText}
            ctaHref={slide.ctaHref}
            showSlideText={showSlideText}
            showButton={showButton}
            titleAlign={titleAlign}
            titleColor={titleColor}
            subtitleColor={subtitleColor}
            descriptionColor={descriptionColor}
            buttonVariant={buttonVariant}
          />
        </PageContentContainer>
      </div>
    </div>
  );
}
