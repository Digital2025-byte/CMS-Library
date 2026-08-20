"use client";

import SimpleGrid from "./components/SimpleGrid";
import SimpleGridHeader from "./components/SimpleGridHeader";
import { getSimpleGridWithPrefixContent } from "./utils/helpers";
import { resolveSimpleGridStyle } from "./utils/style";

export default function SimpleGridWithPrefix({
  lang = "en",
  data,
  style,
  cId,
}) {
  const resolvedStyle = resolveSimpleGridStyle(style);
  const { title, description, items, hasContent } =
    getSimpleGridWithPrefixContent(data, lang);

  if (!hasContent) {
    return null;
  }

  return (
    <>
      <SimpleGridHeader
        title={title}
        description={description}
        style={resolvedStyle}
      />
      <SimpleGrid
        items={items}
        lang={lang}
        cId={cId}
        style={resolvedStyle}
      />
    </>
  );
}
