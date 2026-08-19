import { typography } from "@/styles/typography";
import { getThemeColorCss } from "@/styles/themeColors";
import {
  DEFAULT_VERTICAL_IMAGE_SLICE_STYLE,
  TITLE_ALIGN_CLASS,
} from "../utils/style";

export default function VerticalImageSliceText({
  firstPart,
  highlightPart,
  restPart,
  description,
  style = DEFAULT_VERTICAL_IMAGE_SLICE_STYLE,
}) {
  const showTitle =
    style.showTitle && (firstPart || highlightPart || restPart);
  const showDescription = style.showDescription && description;
  const alignClass =
    TITLE_ALIGN_CLASS[style.titleAlign] ?? TITLE_ALIGN_CLASS.left;

  if (!showTitle && !showDescription) {
    return null;
  }

  return (
    <div className={`flex flex-col justify-center ${alignClass}`}>
      {showTitle ? (
        <h2
          className={`${typography.sectionTitle} mb-4 font-semibold leading-snug tracking-tight wrap-break-word sm:mb-5 sm:leading-tight md:mb-6`}
        >
          {firstPart ? (
            <span
              className="font-semibold"
              style={{
                color: getThemeColorCss(style.titleColor, "secondary-2"),
              }}
            >
              {firstPart}
            </span>
          ) : null}
          {highlightPart ? (
            <span
              className="font-bold"
              style={{
                color: getThemeColorCss(style.highlightColor, "primary-2"),
              }}
            >
              {highlightPart}
            </span>
          ) : null}
          {restPart ? (
            <span
              className="font-semibold"
              style={{
                color: getThemeColorCss(style.titleColor, "secondary-2"),
              }}
            >
              {restPart}
            </span>
          ) : null}
        </h2>
      ) : null}

      {showDescription ? (
        <p
          className={`${typography.sectionDescription} max-w-xl leading-relaxed wrap-break-word sm:leading-loose`}
          style={{ color: getThemeColorCss(style.descriptionColor, "700") }}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
