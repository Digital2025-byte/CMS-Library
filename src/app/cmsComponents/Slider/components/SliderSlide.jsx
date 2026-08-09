import Image from "next/image";
import PageContentContainer from "@/components/layout/PageContentContainer";
import SliderSlideContent from "./SliderSlideContent";

export default function SliderSlide({
  slide,
  lang = "en",
  posParams = "gb",
  cId,
  priority = false,
}) {
  if (!slide) {
    return null;
  }

  return (
    <div className="relative box-border w-full min-h-[280px] overflow-hidden sm:min-h-[320px] md:min-h-[420px] lg:min-h-[500px]">
      {slide.image ? (
        <div className="absolute inset-0">
          <Image
            src={slide.image}
            alt={slide.alt || slide.title || "Slide"}
            fill
            className="object-cover"
            priority={priority}
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-main/70 via-main/20 to-transparent"
            aria-hidden
          />
        </div>
      ) : (
        <div className="absolute inset-0 bg-primary-800" aria-hidden />
      )}

      <div className="relative flex h-full min-h-[280px] w-full items-end py-8 sm:min-h-[320px] sm:py-10 md:min-h-[420px] md:py-12 lg:min-h-[500px] lg:py-16">
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
          />
        </PageContentContainer>
      </div>
    </div>
  );
}
