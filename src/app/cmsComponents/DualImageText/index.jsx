"use client";

import DualImageTextPanel from "./components/DualImageTextPanel";
import { getDualImageTextContent } from "./utils/helpers";

/**
 * Dual image + text blocks.
 *
 * @param {boolean} [blueLayer=false] - Offset blue plate behind images
 * @param {boolean} [underlineFirstWord=false] - Accent line under the first title word
 * @param {boolean} [animate=false] - In-view entrance animation
 * @param {string} [bgColor="bg-100"] - Section background Tailwind class (e.g. "bg-100", "bg-200")
 */
const DualImageText = ({
  lang = "en",
  data,
  blueLayer = false,
  underlineFirstWord = false,
  animate = false,
  bgColor = "bg-100",
}) => {
  const { items, hasContent } = getDualImageTextContent(data, lang);

  if (!hasContent) {
    return null;
  }

  return (
    <DualImageTextPanel
      lang={lang}
      items={items}
      blueLayer={blueLayer}
      underlineFirstWord={underlineFirstWord}
      animate={animate}
      bgColor={bgColor}
    />
  );
};

export default DualImageText;
