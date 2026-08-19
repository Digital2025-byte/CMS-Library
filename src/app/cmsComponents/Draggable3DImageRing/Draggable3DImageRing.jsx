"use client";

import Draggable3DImageRingContainer from "./components/Draggable3DImageRingContainer";
import Draggable3DImageRingPanel from "./components/Draggable3DImageRingPanel";
import { getDraggable3DImageRingContent } from "./utils/helpers";
import { resolveDraggable3DImageRingStyle } from "./utils/style";

export default function Draggable3DImageRing({ lang = "en", data, style }) {
  const content = getDraggable3DImageRingContent(data, lang);
  const resolvedStyle = resolveDraggable3DImageRingStyle(style);

  if (!content.hasContent) {
    return null;
  }

  return (
    <Draggable3DImageRingContainer lang={lang} style={resolvedStyle}>
      <Draggable3DImageRingPanel
        content={content}
        style={resolvedStyle}
      />
    </Draggable3DImageRingContainer>
  );
}
