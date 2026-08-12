import Link from "next/link";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import { typography } from "@/styles/typography";

export default function DestinationShowcaseHeader({
  title,
  description,
  viewAllLabel,
  viewAllHref,
  lang = "en",
  showTitleDescription = true,
  showViewAll = true,
}) {
  const showTitle = showTitleDescription && title;
  const showDescription = showTitleDescription && description;
  const showViewAllLink = showViewAll && viewAllLabel && viewAllHref;

  if (!showTitle && !showDescription && !showViewAllLink) return null;

  return (
    <div className="mb-6 flex flex-col gap-4 sm:mb-8">
      {showTitle ? (
        <h2
          className={`${typography.sectionTitle} font-semibold text-primary-1 `}
        >
          {title}
        </h2>
      ) : null}

      {showDescription || showViewAllLink ? (
        <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          {showDescription ? (
            <p
              className={`${typography.sectionDescription} max-w-2xl text-700`}
            >
              {description}
            </p>
          ) : (
            <span />
          )}

          {showViewAllLink ? (
            <Link
              href={viewAllHref}
              className={`${typography.button} inline-flex shrink-0 items-center gap-2 font-semibold text-secondary-2 hover:text-primary-1`}
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
