"use client";

import TrainingSection from "./components/TrainingSection";
import TowardsSection from "./components/TowardsSection";
import { getDualImageTextContent } from "./utils/helpers";

const DualImageText = ({ lang = "en", data }) => {
  const { items, variant, hasContent } = getDualImageTextContent(data, lang);

  if (!hasContent) {
    return null;
  }

  if (variant === "training") {
    return <TrainingSection lang={lang} items={items} />;
  }

  return <TowardsSection lang={lang} items={items} />;
};

export default DualImageText;
