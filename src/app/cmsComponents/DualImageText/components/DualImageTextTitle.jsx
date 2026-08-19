import { UnderlinedFirstWord } from "@/utils/UnderlinedFirstWord";
import { typography } from "@/styles/typography";
import { getThemeColorCss } from "@/styles/themeColors";
import { DEFAULT_DUAL_IMAGE_TEXT_STYLE } from "../utils/style";

export default function DualImageTextTitle({
  text = "",
  underlineFirstWord = false,
  style = DEFAULT_DUAL_IMAGE_TEXT_STYLE,
}) {
  if (!text) {
    return null;
  }

  const titleStyle = {
    color: getThemeColorCss(style.titleColor, "primary-1"),
  };

  if (underlineFirstWord) {
    return (
      <div style={titleStyle}>
        <UnderlinedFirstWord text={text} underline />
      </div>
    );
  }

  return (
    <h2
      className={`${typography.sectionTitle} font-semibold wrap-break-word`}
      style={titleStyle}
    >
      {text}
    </h2>
  );
}
