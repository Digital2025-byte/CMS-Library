"use client";

import { useCallback, useEffect, useRef } from "react";
import { cn } from "@/components/lib/utils";

const SliderItem = ({ item, onClick, itemRef }) => (
  <div
    ref={itemRef}
    className="pointer-events-auto absolute top-1/2 left-1/2 w-[var(--width)] h-[var(--height)] -mt-[calc(var(--height)/2)] -ml-[calc(var(--width)/2)] origin-[0%_100%] cursor-pointer select-none overflow-hidden rounded-2xl bg-black shadow-2xl will-change-transform"
    style={{
      "--width": "clamp(170px, 22vw, 280px)",
      "--height": "clamp(240px, 36vw, 400px)",
      transition: "none",
      display: "block",
    }}
    onClick={onClick}
  >
    <div className="slider-item-content absolute inset-0 z-10 will-change-opacity">
      <img
        src={item.imageUrl}
        alt={item.title}
        className="pointer-events-none h-full w-full object-cover"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/35 via-transparent via-45% to-black/55" />
      <div className="absolute top-3 left-4 z-20 text-[clamp(28px,5vw,52px)] font-semibold leading-none text-white/90">
        {item.num}
      </div>
      <div className="absolute bottom-4 left-4 z-20 text-[clamp(18px,2.4vw,28px)] font-semibold text-white drop-shadow-md">
        {item.title}
      </div>
    </div>
  </div>
);

/**
 * Lightswind ThreeDSlider — drag / wheel 3D card stack.
 */
export default function ThreeDSlider({
  items = [],
  speedWheel = 0.05,
  speedDrag = -0.15,
  containerStyle = {},
  onItemClick,
  className,
}) {
  const progressRef = useRef(50);
  const targetProgressRef = useRef(50);
  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const containerRef = useRef(null);
  const rafRef = useRef(null);
  const itemRefs = useRef([]);
  const cacheRef = useRef({});
  const numItems = items.length;

  const update = useCallback(() => {
    if (!itemRefs.current.length) return;

    progressRef.current += (targetProgressRef.current - progressRef.current) * 0.1;
    const clamped = Math.max(0, Math.min(progressRef.current, 100));
    const activeFloat = (clamped / 100) * Math.max(numItems - 1, 0);
    const denominator = numItems > 1 ? numItems - 1 : 1;

    itemRefs.current.forEach((el, index) => {
      if (!el) return;

      const ratio = (index - activeFloat) / denominator;
      const tx = ratio * 620;
      const ty = ratio * 160;
      const rot = ratio * 95;
      const dist = Math.abs(index - activeFloat);
      const z = numItems - dist;
      const opacity = (z / numItems) * 3.4 - 1.8;
      const newTransform = `translate3d(${tx}%, ${ty}%, 0) rotate(${rot}deg)`;
      const newZIndex = Math.round(z * 10).toString();
      const newOpacity = Math.max(0, Math.min(1, opacity)).toString();

      if (!cacheRef.current[index]) {
        cacheRef.current[index] = { transform: "", zIndex: "", opacity: "" };
      }
      const cache = cacheRef.current[index];

      if (cache.transform !== newTransform) {
        el.style.transform = newTransform;
        cache.transform = newTransform;
      }
      if (cache.zIndex !== newZIndex) {
        el.style.zIndex = newZIndex;
        cache.zIndex = newZIndex;
      }
      const inner = el.querySelector(".slider-item-content");
      if (inner && cache.opacity !== newOpacity) {
        inner.style.opacity = newOpacity;
        cache.opacity = newOpacity;
      }
    });
  }, [numItems]);

  useEffect(() => {
    let active = true;
    const loop = () => {
      if (!active) return;
      update();
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => {
      active = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [update]);

  const handleWheel = useCallback(
    (event) => {
      const wheelProgress = event.deltaY * speedWheel;
      const next = targetProgressRef.current + wheelProgress;
      if ((next < 0 && event.deltaY < 0) || (next > 100 && event.deltaY > 0)) {
        return;
      }
      event.preventDefault();
      targetProgressRef.current = Math.max(0, Math.min(100, next));
    },
    [speedWheel]
  );

  const getClientX = (event) =>
    "touches" in event ? event.touches[0]?.clientX : event.clientX;

  const handleMouseDown = useCallback((event) => {
    isDownRef.current = true;
    const x = getClientX(event);
    if (x !== undefined) startXRef.current = x;
  }, []);

  const handleMouseMove = useCallback(
    (event) => {
      if (!isDownRef.current) return;
      const x = getClientX(event);
      if (x === undefined) return;
      const diff = (x - startXRef.current) * speedDrag;
      targetProgressRef.current = Math.max(
        0,
        Math.min(100, targetProgressRef.current + diff)
      );
      startXRef.current = x;
    },
    [speedDrag]
  );

  const handleMouseUp = useCallback(() => {
    isDownRef.current = false;
  }, []);

  const handleClick = useCallback(
    (item, index) => {
      const denominator = numItems > 1 ? numItems - 1 : 1;
      targetProgressRef.current = (index / denominator) * 100;
      onItemClick?.(item, index);
    },
    [numItems, onItemClick]
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("mousedown", handleMouseDown);
    container.addEventListener("touchstart", handleMouseDown, { passive: true });
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleMouseMove, { passive: true });
    window.addEventListener("touchend", handleMouseUp);

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("mousedown", handleMouseDown);
      container.removeEventListener("touchstart", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleMouseMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [handleWheel, handleMouseDown, handleMouseMove, handleMouseUp]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative h-[85vh] min-h-[560px] w-full overflow-hidden bg-black",
        className
      )}
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(255,255,255,0.14) 1px, transparent 1.2px)",
        backgroundSize: "22px 22px",
        backgroundColor: "#050505",
        ...containerStyle,
      }}
    >
      <div className="pointer-events-none relative z-10 h-full w-full overflow-hidden">
        {items.map((item, index) => (
          <SliderItem
            key={`slider-item-${index}`}
            item={item}
            itemRef={(el) => {
              itemRefs.current[index] = el;
            }}
            onClick={() => handleClick(item, index)}
          />
        ))}
      </div>
    </div>
  );
}
