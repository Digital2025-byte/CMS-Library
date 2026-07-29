"use client";

import { useEffect, useRef, useState } from "react";

export function useAccordionImages(items) {
  const [openIndex, setOpenIndex] = useState(0);
  const [imageKey, setImageKey] = useState(0);
  const itemRefs = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    if (items.length === 0) {
      setOpenIndex(0);
      return;
    }

    if (openIndex > items.length - 1) {
      setOpenIndex(0);
    }
  }, [items, openIndex]);

  const toggleAccordion = (index) => {
    if (openIndex === index) {
      return;
    }

    setOpenIndex(index);
    setImageKey((prev) => prev + 1);

    setTimeout(() => {
      const container = containerRef.current;
      const item = itemRefs.current[index];
      if (!container || !item) {
        return;
      }

      const containerRect = container.getBoundingClientRect();
      const itemRect = item.getBoundingClientRect();
      const relativeTop =
        itemRect.top - containerRect.top + container.scrollTop;

      container.scrollTo({
        top: relativeTop,
        behavior: "smooth",
      });
    }, 100);
  };

  const setItemRef = (index, element) => {
    itemRefs.current[index] = element;
  };

  return {
    openIndex,
    imageKey,
    containerRef,
    setItemRef,
    toggleAccordion,
    currentImage: items[openIndex]?.image || "",
    currentImageAlt: items[openIndex]?.imageAlt || "Service Image",
  };
}
