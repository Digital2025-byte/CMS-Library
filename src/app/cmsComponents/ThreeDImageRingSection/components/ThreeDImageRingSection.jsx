import ThreeDImageRingPanel from "./ThreeDImageRingPanel";
import { getThreeDImageRingContent } from "../utils/helpers";
import { resolveThreeDImageRingStyle } from "../utils/style";

export default function ThreeDImageRingSection({
  lang = "en",
  dir,
  data,
  style,
  className = "",
}) {
  const content = getThreeDImageRingContent(data, lang);
  const resolvedStyle = resolveThreeDImageRingStyle(style, content.extras);

  return (
    <div
      className={`w-full ${className}`.trim()}
      lang={lang}
      dir={dir || (lang === "ar" ? "rtl" : "ltr")}
    >
      {content.hasContent ? (
        <ThreeDImageRingPanel
          lang={lang}
          content={content}
          style={resolvedStyle}
        />
      ) : null}
    </div>
  );
}
