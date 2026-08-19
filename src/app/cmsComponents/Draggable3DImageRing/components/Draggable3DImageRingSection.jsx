import Draggable3DImageRingContainer from "./Draggable3DImageRingContainer";
import Draggable3DImageRingPanel from "./Draggable3DImageRingPanel";
import { getDraggable3DImageRingContent } from "../utils/helpers";
import { resolveDraggable3DImageRingStyle } from "../utils/style";

export default function Draggable3DImageRingSection({
  lang = "en",
  dir,
  data,
  style,
  className = "",
}) {
  const resolvedStyle = resolveDraggable3DImageRingStyle(style);
  const content = getDraggable3DImageRingContent(data, lang);

  return (
    <Draggable3DImageRingContainer
      lang={lang}
      dir={dir}
      style={resolvedStyle}
      className={className}
    >
      {content.hasContent ? (
        <Draggable3DImageRingPanel
          content={content}
          style={resolvedStyle}
        />
      ) : null}
    </Draggable3DImageRingContainer>
  );
}
