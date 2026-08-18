import Link from "next/link";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import { typography } from "@/styles/typography";
import { getThemeColorCss } from "@/styles/themeColors";
import {
  DEFAULT_DESTINATION_SHOWCASE_STYLE,
  TITLE_ALIGN_CLASS,
} from "../utils/style";

export default function DestinationShowcaseHeader({
  title,
  description,
  viewAllLabel,
  viewAllHref,
  lang = "en",
  showTitle = DEFAULT_DESTINATION_SHOWCASE_STYLE.showTitle,
  showDescription = DEFAULT_DESTINATION_SHOWCASE_STYLE.showDescription,
  showViewAll = DEFAULT_DESTINATION_SHOWCASE_STYLE.showViewAll,
  titleAlign = DEFAULT_DESTINATION_SHOWCASE_STYLE.titleAlign,
  titleColor = DEFAULT_DESTINATION_SHOWCASE_STYLE.titleColor,
  descriptionColor = DEFAULT_DESTINATION_SHOWCASE_STYLE.descriptionColor,
  viewAllColor = DEFAULT_DESTINATION_SHOWCASE_STYLE.viewAllColor,
}) {
  const showHeading = showTitle && title;
  const showBody = showDescription && description;
  const showViewAllLink = showViewAll && viewAllLabel && viewAllHref;
  const alignClass = TITLE_ALIGN_CLASS[titleAlign] ?? TITLE_ALIGN_CLASS.left;

  if (!showHeading && !showBody && !showViewAllLink) return null;

  return (
    <div className={`mb-6 flex flex-col gap-4 sm:mb-8 ${alignClass}`}>
      {showHeading ? (
        <h2
          className={`${typography.sectionTitle} font-semibold`}
          style={{ color: getThemeColorCss(titleColor, "primary-1") }}
        >
          {title}
        </h2>
      ) : null}

      {showBody || showViewAllLink ? (
        <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          {showBody ? (
            <p
              className={`${typography.sectionDescription} max-w-2xl ${
                titleAlign === "center" ? "mx-auto sm:mx-0" : ""
              }`}
              style={{ color: getThemeColorCss(descriptionColor, "700") }}
            >
              {description}
            </p>
          ) : (
            <span />
          )}

          {showViewAllLink ? (
            <Link
              href={viewAllHref}
              className={`${typography.button} inline-flex shrink-0 items-center gap-2 font-semibold hover:opacity-80`}
              style={{ color: getThemeColorCss(viewAllColor, "secondary-2") }}
            >
              {viewAllLabel}
              {lang === "ar" ? (
                <CaretLeftIcon size={16} weight="bold" aria-hidden />
              ) : (
                <CaretRightIcon size={16} weight="bold" aria-hidden />
              )}
            </Link>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
