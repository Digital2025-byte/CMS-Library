import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";
import Button from "@/components/ui/Button";
import { getThemeColorCss } from "@/styles/themeColors";
import { typography } from "@/styles/typography";
import {
  DEFAULT_FULL_HEIGHT_HEADER_STYLE,
  TITLE_ALIGN_CLASS,
} from "../utils/style";

export default function FullHeightHeaderWithTextContent({
  lang = "en",
  title = "",
  description = "",
  buttonLabel = "",
  ctaHref = "",
  cId,
  showTitle = DEFAULT_FULL_HEIGHT_HEADER_STYLE.showTitle,
  showDescription = DEFAULT_FULL_HEIGHT_HEADER_STYLE.showDescription,
  showButton = DEFAULT_FULL_HEIGHT_HEADER_STYLE.showButton,
  titleAlign = DEFAULT_FULL_HEIGHT_HEADER_STYLE.titleAlign,
  titleColor = DEFAULT_FULL_HEIGHT_HEADER_STYLE.titleColor,
  descriptionColor = DEFAULT_FULL_HEIGHT_HEADER_STYLE.descriptionColor,
  buttonBg = DEFAULT_FULL_HEIGHT_HEADER_STYLE.buttonBg,
  buttonText = DEFAULT_FULL_HEIGHT_HEADER_STYLE.buttonText,
}) {
  const isRtl = lang === "ar";
  const ArrowIcon = isRtl ? ArrowLeftIcon : ArrowRightIcon;
  const showHeading = showTitle && title;
  const showCopy = showDescription && description;
  const showCta = showButton && buttonLabel;
  const alignClass =
    TITLE_ALIGN_CLASS[titleAlign] ?? TITLE_ALIGN_CLASS.left;
  const titleCss = getThemeColorCss(titleColor, "secondary-100");
  const descriptionCss = getThemeColorCss(descriptionColor, "secondary-100");
  const pillCss = getThemeColorCss(buttonBg, "primary-2");
  const labelCss = getThemeColorCss(buttonText, "white");

  if (!showHeading && !showCopy && !showCta) {
    return null;
  }

  return (
    <div className={`w-full max-w-xl ${alignClass}`}>
      {showHeading ? (
        <h1
          className={`${typography.sectionTitle} max-w-lg font-semibold`}
          style={{ color: titleCss }}
        >
          {title}
        </h1>
      ) : null}

      {showCopy ? (
        <p
          className={`${typography.sectionDescription} mt-3 max-w-md leading-relaxed sm:mt-4`}
          style={{ color: descriptionCss }}
        >
          {description}
        </p>
      ) : null}

      {showCta ? (
        <div className="mt-5 sm:mt-6">
          <Button
            label={buttonLabel}
            href={ctaHref || undefined}
            cId={cId}
            variant="primary"
            icon={<ArrowIcon size={20} weight="regular" aria-hidden />}
            iconPosition="end"
            className="min-w-[140px] sm:min-w-[160px]"
            style={{
              backgroundColor: pillCss,
              borderColor: pillCss,
              color: labelCss,
            }}
          />
        </div>
      ) : null}
    </div>
  );
}
