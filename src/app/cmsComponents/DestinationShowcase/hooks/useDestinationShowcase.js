"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  CLONE_COUNT,
  JUMP_DELAY_MS,
  START_DELAY_MS,
  TRANSITION_MS,
} from "../utils/constants";
import { buildInfiniteList, toActualIndex } from "../utils/helpers";

/**
 * Infinite destination slider state (virtual index + seamless jumps).
 */
export default function useDestinationShowcase(destinations = []) {
  const length = destinations.length;
  const infiniteList = useMemo(
    () => buildInfiniteList(destinations, CLONE_COUNT),
    [destinations]
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [virtualIndex, setVirtualIndex] = useState(CLONE_COUNT);
  const [direction, setDirection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef(null);
  const isJumpingRef = useRef(false);

  useEffect(() => {
    if (isJumpingRef.current) return;
    const next = toActualIndex(virtualIndex, length, CLONE_COUNT);
    if (next !== activeIndex) setActiveIndex(next);
  }, [virtualIndex, length, activeIndex]);

  const jumpToPosition = useCallback(
    (newIndex) => {
      if (!sliderRef.current) return;
      isJumpingRef.current = true;
      sliderRef.current.style.transition = "none";
      setVirtualIndex(newIndex);
      setActiveIndex(toActualIndex(newIndex, length, CLONE_COUNT));
      setTimeout(() => {
        if (sliderRef.current) {
          sliderRef.current.style.transition = "";
          requestAnimationFrame(() => {
            isJumpingRef.current = false;
          });
        }
      }, START_DELAY_MS);
    },
    [length]
  );

  const runTransition = useCallback((nextDirection, updateIndex) => {
    if (isTransitioning || isJumpingRef.current) return;
    setIsTransitioning(true);
    setDirection(nextDirection);

    setTimeout(() => {
      setVirtualIndex(updateIndex);
    }, START_DELAY_MS);

    setTimeout(() => {
      setIsTransitioning(false);
      setDirection(0);
    }, TRANSITION_MS);
  }, [isTransitioning]);

  const handleNext = useCallback(() => {
    runTransition(1, (prev) => {
      const next = prev + 1;
      if (next >= infiniteList.length - CLONE_COUNT) {
        setTimeout(() => jumpToPosition(CLONE_COUNT), JUMP_DELAY_MS);
      }
      return next;
    });
  }, [runTransition, infiniteList.length, jumpToPosition]);

  const handlePrev = useCallback(() => {
    runTransition(-1, (prev) => {
      const next = prev - 1;
      if (next < CLONE_COUNT) {
        setTimeout(
          () => jumpToPosition(infiniteList.length - CLONE_COUNT - 1),
          JUMP_DELAY_MS
        );
      }
      return next;
    });
  }, [runTransition, infiniteList.length, jumpToPosition]);

  const handleCardClick = useCallback(
    (clickedIndex) => {
      if (isTransitioning || isJumpingRef.current) return;
      if (clickedIndex === activeIndex) return;
      const targetVirtualIndex = clickedIndex + CLONE_COUNT;
      const nextDirection = clickedIndex > activeIndex ? 1 : -1;
      runTransition(nextDirection, () => targetVirtualIndex);
    },
    [activeIndex, isTransitioning, runTransition]
  );

  return {
    activeIndex,
    virtualIndex,
    direction,
    infiniteList,
    sliderRef,
    handleNext,
    handlePrev,
    handleCardClick,
    current: destinations[activeIndex] || null,
  };
}
