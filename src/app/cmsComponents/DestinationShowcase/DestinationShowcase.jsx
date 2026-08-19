"use client";

import DestinationShowcasePanel from "./components/DestinationShowcasePanel";
import { getDestinationShowcaseContent } from "./utils/helpers";
import { resolveDestinationShowcaseStyle } from "./utils/style";

export default function DestinationShowcase({
  lang = "en",
  data,
  style,
  posParams = "gb",
  cId,
}) {
  const content = getDestinationShowcaseContent(data, lang, { posParams, cId });
  const resolvedStyle = resolveDestinationShowcaseStyle(style);

  if (!content.hasContent) {
    return null;
  }

  return (
    <DestinationShowcasePanel
      lang={lang}
      content={content}
      style={resolvedStyle}
    />
  );
}
