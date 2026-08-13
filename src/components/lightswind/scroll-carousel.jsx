"use client";

import { forwardRef, useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/components/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const FALLBACK_IMAGE =
  "https://images.pexels.com/photos/9934462/pexels-photo-9934462.jpeg";

function useFeatureAnimations(
  containerRef,
  scrollContainerRef,
  scrollContainerRef2,
  progressBarRef,
  cardRefs,
  cardRefs2,
  isDesktop,
  maxScrollHeight
) {
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const ctx = gsap.context(() => {
      if (isDesktop) {
        const scrollWidth1 = scrollContainerRef.current?.scrollWidth || 0;
        const scrollWidth2 = scrollContainerRef2.current?.scrollWidth || 0;
        const containerWidth = container.offsetWidth || 0;
        const cardWidth = cardRefs.current[0]?.offsetWidth || 0;
        const viewportOffset = (containerWidth - cardWidth) / 2;
        const finalOffset1 = scrollWidth1 - containerWidth + viewportOffset;
        const finalOffset2 = scrollWidth2 - containerWidth + viewportOffset;
        const scrollDistance = maxScrollHeight || Math.max(finalOffset1, 1);

        if (scrollContainerRef2.current) {
          gsap.set(scrollContainerRef2.current, {
            x: -finalOffset2 + viewportOffset * 2,
          });
        }

        gsap
          .timeline({
            scrollTrigger: {
              trigger: container,
              start: "top top",
              end: () => `+=${scrollDistance}`,
              scrub: 1,
              pin: true,
            },
          })
          .fromTo(
            scrollContainerRef.current,
            { x: viewportOffset },
            { x: -finalOffset1 + viewportOffset, ease: "none" }
          );

        if (scrollContainerRef2.current) {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: container,
                start: "top top",
                end: () => `+=${scrollDistance}`,
                scrub: 1,
              },
            })
            .to(scrollContainerRef2.current, {
              x: viewportOffset,
              ease: "none",
            });
        }

        if (progressBarRef.current) {
          gsap.to(progressBarRef.current, {
            width: "100%",
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top top",
              end: () => `+=${scrollDistance}`,
              scrub: true,
            },
          });
        }
      } else {
        const allCards = [...cardRefs.current, ...cardRefs2.current];
        allCards.forEach((card, index) => {
          if (!card) return;
          gsap.fromTo(
            card,
            { opacity: 0, x: index % 2 === 0 ? -200 : 200 },
            {
              opacity: 1,
              x: 0,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none none",
                once: true,
              },
            }
          );
        });
      }
    }, container);

    return () => ctx.revert();
  }, [
    cardRefs,
    cardRefs2,
    containerRef,
    isDesktop,
    maxScrollHeight,
    progressBarRef,
    scrollContainerRef,
    scrollContainerRef2,
  ]);
}

function FeatureCard({ feature, cardRef }) {
  return (
    <div
      ref={cardRef}
      className="feature-card relative z-10 w-[85vw] flex-shrink-0 sm:w-[340px] lg:w-[380px]"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-[28px]">
        <img
          src={feature.image || FALLBACK_IMAGE}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
        <div className="absolute right-6 bottom-6 left-6 text-white">
          {feature.title ? (
            <h3 className="text-[22px] leading-tight font-semibold tracking-tight lg:text-2xl">
              {feature.title}
            </h3>
          ) : null}
          {feature.description ? (
            <p className="mt-1.5 text-sm leading-snug text-white/80">
              {feature.description}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

/**
 * Lightswind ScrollCarousel — pinned dual-row horizontal scroll.
 * @see https://lightswind.com/components/scroll-carousel
 */
export const ScrollCarousel = forwardRef(function ScrollCarousel(
  { features = [], className, maxScrollHeight },
  ref
) {
  const containerRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const scrollContainerRef2 = useRef(null);
  const progressBarRef = useRef(null);
  const cardRefs = useRef([]);
  const cardRefs2 = useRef([]);
  const [isDesktop, setIsDesktop] = useState(false);
  const [features2] = useState(() =>
    [...features].sort(() => Math.random() - 0.5)
  );

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.matchMedia("(min-width: 768px)").matches);
    };
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  useFeatureAnimations(
    containerRef,
    scrollContainerRef,
    scrollContainerRef2,
    progressBarRef,
    cardRefs,
    cardRefs2,
    isDesktop,
    maxScrollHeight
  );

  const renderFeatureCards = (featureSet, refs) =>
    featureSet.map((feature, index) => (
      <FeatureCard
        key={`${feature.title}-${index}`}
        feature={feature}
        cardRef={(el) => {
          if (el) refs.current[index] = el;
        }}
      />
    ));

  return (
    <section
      ref={ref}
      className={cn("relative overflow-hidden bg-transparent", className)}
    >
      <div
        ref={containerRef}
        className="relative z-10 flex flex-col justify-center gap-4 overflow-hidden py-16 md:h-screen md:gap-5 md:py-0 lg:[mask-image:linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)]"
      >
        <div
          ref={scrollContainerRef}
          className="flex flex-col items-center gap-4 px-6 md:flex-row md:px-0"
        >
          {renderFeatureCards(features, cardRefs)}
        </div>

        <div
          ref={scrollContainerRef2}
          className="hidden items-center gap-4 px-6 md:flex md:flex-row md:px-0"
        >
          {renderFeatureCards(features2, cardRefs2)}
        </div>

        {isDesktop ? (
          <div className="absolute bottom-8 left-1/2 z-20 h-1 w-40 -translate-x-1/2 overflow-hidden rounded-full bg-white/15">
            <div
              ref={progressBarRef}
              className="animated-water h-full rounded-full"
              style={{ width: "0%" }}
            />
          </div>
        ) : null}
      </div>

      <style>{`
        .animated-water {
          background: repeating-linear-gradient(
            -45deg,
            rgba(255, 255, 255, 0.9) 0%,
            rgba(255, 255, 255, 0.55) 25%,
            rgba(255, 255, 255, 0.9) 50%
          );
          background-size: 40px 40px;
          animation: scroll-carousel-wave 2s linear infinite;
        }
        @keyframes scroll-carousel-wave {
          from { background-position: 0 0; }
          to { background-position: 40px 40px; }
        }
      `}</style>
    </section>
  );
});

ScrollCarousel.displayName = "ScrollCarousel";

export default ScrollCarousel;
