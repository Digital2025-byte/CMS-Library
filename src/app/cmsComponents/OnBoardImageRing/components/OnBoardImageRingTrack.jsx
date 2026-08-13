"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { animate, useMotionValue } from "framer-motion";
import { typography } from "@/styles/typography";
import {
  CARD_ASPECT,
  CARD_GAP_PX,
  CONCAVE_PUSH,
  RING_PERSPECTIVE,
  VISIBLE_COUNT,
} from "../utils/constants";

/**
 * Concave cylinder: cards sit on the INNER surface.
 * Center goes back (tight / smaller). Left & right come forward (wide / taller).
 * Radius is sized so VISIBLE_COUNT cards span the full viewport.
 */
function layoutForWidth(containerWidth, count) {
  const usable = Math.max(containerWidth, 320);
  const angle = count > 0 ? 360 / count : 0;
  const edgeSteps = Math.floor((VISIBLE_COUNT - 1) / 2);
  const edgeRad = ((angle * edgeSteps) * Math.PI) / 180;
  const radius =
    (usable * 0.5) / Math.max(Math.sin(edgeRad) || 0.35, 0.2);

  const packedWidth = 2 * radius * Math.tan(Math.PI / Math.max(count, 2));
  const cardWidth = Math.round(
    Math.min(420, Math.max(140, packedWidth - CARD_GAP_PX))
  );

  return {
    cardWidth,
    cardHeight: Math.round(cardWidth * CARD_ASPECT),
    radius,
    angle,
    pushZ: radius * CONCAVE_PUSH,
  };
}

export default function OnBoardImageRingTrack({
  images = [],
  captions = [],
  lang = "en",
}) {
  const viewportRef = useRef(null);
  const ringRef = useRef(null);
  const isDragging = useRef(false);
  const lastX = useRef(0);
  const velocity = useRef(0);
  const currentRotation = useRef(0);

  const count = images.length;
  const rotationY = useMotionValue(0);
  const [containerWidth, setContainerWidth] = useState(1200);

  const { cardWidth, cardHeight, radius, angle, pushZ } = useMemo(
    () => layoutForWidth(containerWidth, count),
    [containerWidth, count]
  );

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return undefined;

    const measure = () => setContainerWidth(el.clientWidth);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const applyTransform = (value) => {
    if (!ringRef.current) return;
    ringRef.current.style.transform = `translateZ(${pushZ}px) rotateY(${value}deg)`;
  };

  useEffect(() => {
    applyTransform(rotationY.get());
    const unsubscribe = rotationY.on("change", (latest) => {
      currentRotation.current = latest;
      applyTransform(latest);
    });
    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rotationY, pushZ]);

  const onPointerDown = (event) => {
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
    velocity.current = delta * 0.35;
    const dir = lang === "ar" ? -1 : 1;
    rotationY.set(currentRotation.current + dir * velocity.current);
  };

  const onPointerUp = (event) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    try {
      event.currentTarget.releasePointerCapture?.(event.pointerId);
    } catch {
      // ignore
    }

    if (!angle) return;
    const initial = rotationY.get();
    const boost = velocity.current * 14;
    animate(initial, initial + boost, {
      type: "inertia",
      velocity: boost,
      power: 0.82,
      timeConstant: 280,
      restDelta: 0.4,
      modifyTarget: (target) => Math.round(target / angle) * angle,
      onUpdate: (latest) => rotationY.set(latest),
    });
    velocity.current = 0;
  };

  if (!count) return null;

  return (
    <div
      ref={viewportRef}
      className="relative h-full w-full touch-none select-none overflow-hidden"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      role="presentation"
      style={{
        perspective: `${RING_PERSPECTIVE}px`,
        perspectiveOrigin: "50% 46%",
        cursor: "grab",
      }}
    >
      <div
        className="absolute left-1/2 top-1/2"
        style={{
          width: cardWidth,
          height: cardHeight,
          marginLeft: -cardWidth / 2,
          marginTop: -cardHeight / 2,
          transformStyle: "preserve-3d",
        }}
      >
        <div
          ref={ringRef}
          className="relative h-full w-full"
          style={{
            transformStyle: "preserve-3d",
            transform: `translateZ(${pushZ}px) rotateY(0deg)`,
          }}
        >
          {images.map((imageUrl, index) => (
            <div
              key={`${imageUrl}-${index}`}
              className="absolute inset-0 overflow-hidden bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${imageUrl})`,
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                transform: `rotateY(${index * angle}deg) translateZ(${-radius}px)`,
              }}
            >
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />
              {captions[index] ? (
                <p
                  className={`${typography.itemTitle} pointer-events-none absolute bottom-4 start-4 z-10 font-medium text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] md:bottom-5 md:start-5`}
                >
                  {captions[index]}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
