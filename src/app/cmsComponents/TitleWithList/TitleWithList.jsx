"use client";

import TitleWithListPanel from "./components/TitleWithListPanel";
import { getTitleWithListContent } from "./utils/helpers";
import { resolveTitleWithListStyle } from "./utils/style";

export default function TitleWithList({ lang = "en", data, style }) {
  const resolvedStyle = resolveTitleWithListStyle(style);
  const { title, items, hasContent } = getTitleWithListContent(data, lang);

  if (!hasContent) {
    return null;
  }

  return (
    <TitleWithListPanel
      lang={lang}
      title={title}
      items={items}
      style={resolvedStyle}
    />
  );
}
