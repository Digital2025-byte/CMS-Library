const WIDE_INDEXES = new Set([1, 4]);

export function getCardSizeByIndex(index) {
  const isWide = WIDE_INDEXES.has(index);
  return isWide ? { w: 520, h: 350 } : { w: 320, h: 350 };
}
