import { typography } from "@/styles/typography";
import { getThemeColorCss } from "@/styles/themeColors";
import { getFontWeightValue } from "@/styles/fontWeight";
import { LinkedText } from "@/app/cmsComponents/shared/backlinks";
import {
  DEFAULT_SPLIT_TEXT_ONLY_STYLE,
  TITLE_ALIGN_CLASS,
} from "../utils/style";

export default function SplitTextOnlyContent({
  title,
  description,
  links = [],
  style = DEFAULT_SPLIT_TEXT_ONLY_STYLE,
}) {
  const showHeading = style.showTitle && title;
  const showCopy = style.showDescription && description;

  if (!showHeading && !showCopy) {
    return null;
  }

  const alignClass =
    TITLE_ALIGN_CLASS[style.titleAlign] ?? TITLE_ALIGN_CLASS.left;

  return (
    <div className={`p-2 ${alignClass}`}>
      {showHeading ? (
        <h1
          className={`${typography.sectionTitle} font-semibold`}
          style={{ color: getThemeColorCss(style.titleColor, "secondary-100"), fontWeight: getFontWeightValue(style.titleFontWeight),
          }}
        >
          {title}
        </h1>
      ) : null}

      {showCopy ? (
        <p
          className={`${typography.sectionDescription} mt-2 p-1 leading-relaxed`}
          style={{ color: getThemeColorCss(style.descriptionColor, "secondary-100"), fontWeight: getFontWeightValue(style.descriptionFontWeight),
          }}
        >
          <LinkedText
            text={description}
            links={links}
            style={style}
            enabled={style.showLinks !== false}
          />
        </p>
      ) : null}
    </div>
  );
}
