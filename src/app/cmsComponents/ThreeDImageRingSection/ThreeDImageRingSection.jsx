"use client";

import ThreeDImageRingPanel from "./components/ThreeDImageRingPanel";
import { getThreeDImageRingContent } from "./utils/helpers";
import { resolveThreeDImageRingStyle } from "./utils/style";

export default function ThreeDImageRingSection({
  lang = "en",
  data,
  style,
}) {
  const content = getThreeDImageRingContent(data, lang);
  const resolvedStyle = resolveThreeDImageRingStyle(style, content.extras);

  if (!content.hasContent) {
    return null;
  }

  return (
    <ThreeDImageRingPanel
      lang={lang}
      content={content}
      style={resolvedStyle}
    />
  );
}
