"use client";

import { useState } from "react";

export default function useRepeater({ items = [], onChange, createItem }) {
  const [openIndexes, setOpenIndexes] = useState(
    () => new Set(items.length ? [0] : [])
  );

  const toggleItem = (index) => {
    setOpenIndexes((current) => {
      const next = new Set(current);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const addItem = () => {
    const nextIndex = items.length;
    onChange([...items, createItem()]);
    setOpenIndexes((current) => new Set(current).add(nextIndex));
  };

  const removeItem = (index) => {
    onChange(items.filter((_, itemIndex) => itemIndex !== index));
    setOpenIndexes((current) => {
      const next = new Set();
      current.forEach((itemIndex) => {
        if (itemIndex < index) next.add(itemIndex);
        if (itemIndex > index) next.add(itemIndex - 1);
      });
      return next;
    });
  };

  const updateItem = (index, key, value) => {
    onChange(
      items.map((item, itemIndex) =>
        itemIndex === index ? { ...item, [key]: value } : item
      )
    );
  };

  return {
    openIndexes,
    isOpen: (index) => openIndexes.has(index),
    toggleItem,
    addItem,
    removeItem,
    updateItem,
  };
}
