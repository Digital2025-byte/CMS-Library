import { typography } from "@/styles/typography";
import { getThemeColorCss } from "@/styles/themeColors";
import MixedThreeImagesCtas from "./MixedThreeImagesCtas";
import {
  DEFAULT_MIXED_THREE_IMAGES_STYLE,
  TITLE_ALIGN_CLASS,
} from "@/app/cmsComponents/MixedRightThreeImages/utils/style";

export default function MixedThreeImagesContent({
  lang = "en",
  title,
  description,
  primaryCta,
  secondaryCta,
  className = "",
  showDesktopCtas = true,
  style = DEFAULT_MIXED_THREE_IMAGES_STYLE,
}) {
  const showHeading = style.showTitle && title;
  const showCopy = style.showDescription && description;
  const alignClass =
    TITLE_ALIGN_CLASS[style.titleAlign] ?? TITLE_ALIGN_CLASS.left;
  const titleCss = getThemeColorCss(style.titleColor, "white");
  const descriptionCss = getThemeColorCss(style.descriptionColor, "white");

  if (!showHeading && !showCopy && !showDesktopCtas) {
    return null;
  }

  return (
    <div className={`flex flex-col justify-center ${alignClass} ${className}`.trim()}>
      {showHeading ? (
        <h2
          className={`${typography.sectionTitle} font-semibold wrap-break-word`}
          style={{ color: titleCss }}
        >
          {title}
        </h2>
      ) : null}

      {showCopy ? (
        <p
          className={`${typography.sectionDescription} mt-3 max-w-xl leading-relaxed wrap-break-word sm:mt-4`}
          style={{
            color: `color-mix(in srgb, ${descriptionCss} 90%, transparent)`,
          }}
        >
          {description}
        </p>
      ) : null}

      {showDesktopCtas ? (
        <MixedThreeImagesCtas
          lang={lang}
          primaryCta={primaryCta}
          secondaryCta={secondaryCta}
          style={style}
          className="hidden lg:flex"
        />
      ) : null}
    </div>
  );
}
