"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { animate, useMotionValue } from "framer-motion";
import { cn } from "../lib/utils";

/** Radius so cards sit nearly edge-to-edge on the cylinder. */
function packingRadius(cardWidth, count) {
  if (!count || count < 2) return cardWidth;
  return cardWidth / 2 / Math.tan(Math.PI / count);
}

/**
 * ThreeDImageRing — cylindrical 3D image ring (Lightswind-compatible API).
 * Renders a concave portrait arc matching the “On Board” reference.
 */
export function ThreeDImageRing({
  images = [],
  width = 300,
  perspective = 2000,
  imageDistance = 500,
  initialRotation = 0,
  animationDuration = 1.15,
  staggerDelay = 0.07,
  hoverOpacity = 0.55,
  containerClassName,
  ringClassName,
  imageClassName,
  backgroundColor,
  draggable = true,
  ease = "easeOut",
  mobileBreakpoint = 768,
  mobileScaleFactor = 0.7,
  inertiaPower = 0.85,
  inertiaTimeConstant = 280,
  inertiaVelocityMultiplier = 16,
  captions = [],
  title = "",
  description = "",
  lang = "en",
}) {
  const rotationY = useMotionValue(initialRotation);
  const currentRotationY = useRef(initialRotation);
  const isDragging = useRef(false);
  const lastX = useRef(0);
  const velocity = useRef(0);
  const ringRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(width);

  void ease;
  void title;
  void description;
  void lang;
  void imageDistance;
  void animationDuration;
  void staggerDelay;

  const count = images.length;
  const angle = count > 0 ? 360 / count : 0;
  const cardHeight = Math.round(cardWidth * 1.42);

  // Tight arc like the reference — packing radius with a small gap.
  const radius = useMemo(() => {
    const packed = packingRadius(cardWidth, count) * 1.06;
    return Math.min(packed, perspective * 0.38);
  }, [cardWidth, count, perspective]);

  const applyRingTransform = (value) => {
    if (!ringRef.current) return;
    ringRef.current.style.transform = `translateZ(${-radius}px) rotateY(${value}deg)`;
  };

  useEffect(() => {
    applyRingTransform(rotationY.get());
    const unsubscribe = rotationY.on("change", (latest) => {
      currentRotationY.current = latest;
      applyRingTransform(latest);
    });
    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rotationY, radius]);

  useEffect(() => {
    const onResize = () => {
      const vw = window.innerWidth;
      if (vw <= mobileBreakpoint) {
        setCardWidth(Math.max(140, Math.round(width * mobileScaleFactor)));
      } else if (vw < 1024) {
        setCardWidth(Math.round(width * 0.9));
      } else {
        setCardWidth(width);
      }
    };
    window.addEventListener("resize", onResize);
    onResize();
    return () => window.removeEventListener("resize", onResize);
  }, [width, mobileBreakpoint, mobileScaleFactor]);

  const setSiblingOpacity = (activeIndex) => {
    const cards = ringRef.current?.querySelectorAll("[data-3d-ring-card]");
    if (!cards) return;
    cards.forEach((el, i) => {
      el.style.opacity =
        activeIndex == null || i === activeIndex ? "1" : String(hoverOpacity);
    });
  };

  const onPointerDown = (event) => {
    if (!draggable) return;
    isDragging.current = true;
    lastX.current = event.clientX;
    velocity.current = 0;
    rotationY.stop();
    event.currentTarget.setPointerCapture?.(event.pointerId);
  };

  const onPointerMove = (event) => {
    if (!isDragging.current) return;
    const delta = event.clientX - lastX.current;
    lastX.current = event.clientX;
    velocity.current = delta * 0.4;
    rotationY.set(currentRotationY.current + velocity.current);
  };

  const onPointerUp = (event) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    try {
      event.currentTarget.releasePointerCapture?.(event.pointerId);
    } catch {
      // ignore
    }

    const initial = rotationY.get();
    const boost = velocity.current * inertiaVelocityMultiplier;

    animate(initial, initial + boost, {
      type: "inertia",
      velocity: boost,
      power: inertiaPower,
      timeConstant: inertiaTimeConstant,
      restDelta: 0.5,
      modifyTarget: (value) => Math.round(value / angle) * angle,
      onUpdate: (latest) => rotationY.set(latest),
    });

    velocity.current = 0;
  };

  if (!count) {
    return null;
  }

  return (
    <div
      className={cn(
        "relative flex h-full w-full flex-col overflow-hidden",
        containerClassName
      )}
      style={{ backgroundColor }}
    >
      <div
        className="relative flex h-full w-full flex-1 touch-none select-none items-center justify-center overflow-hidden"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        role="presentation"
        style={{
          perspective: `${perspective}px`,
          perspectiveOrigin: "50% 48%",
          cursor: draggable ? "grab" : "default",
        }}
      >
        <div
          style={{
            width: cardWidth,
            height: cardHeight,
            transformStyle: "preserve-3d",
          }}
        >
          <div
            ref={ringRef}
            className={cn("relative h-full w-full", ringClassName)}
            style={{
              transformStyle: "preserve-3d",
              transform: `translateZ(${-radius}px) rotateY(${initialRotation}deg)`,
            }}
          >
            {images.map((imageUrl, index) => (
              <div
                key={`${imageUrl}-${index}`}
                data-3d-ring-card
                className={cn(
                  "absolute inset-0 overflow-hidden bg-cover bg-center bg-no-repeat transition-opacity duration-150",
                  imageClassName
                )}
                style={{
                  backgroundImage: `url(${imageUrl})`,
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  transform: `rotateY(${index * angle}deg) translateZ(${radius}px)`,
                }}
                onMouseEnter={() => {
                  if (!isDragging.current) setSiblingOpacity(index);
                }}
                onMouseLeave={() => {
                  if (!isDragging.current) setSiblingOpacity(null);
                }}
              >
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/55 to-transparent" />
                {captions[index] ? (
                  <p className="pointer-events-none absolute bottom-4 start-4 z-10 text-sm font-medium text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.75)] md:bottom-6 md:start-6 md:text-lg">
                    {captions[index]}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThreeDImageRing;
