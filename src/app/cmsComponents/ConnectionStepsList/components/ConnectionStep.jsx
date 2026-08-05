import Image from "next/image";
import { typography } from "@/styles/typography";
import { CONNECTION_STEPS_LAYOUT } from "../utils/layout";

/**
 * Shared visual for one connection step.
 *
 * variant="anchored" (desktop): root = circle size so parent left/top
 *   centers the circle on the layout point. Label + caption are absolute.
 * variant="stacked" (mobile): normal document flow for 2×2 grid.
 */
export default function ConnectionStep({
  stepLabel,
  description,
  imageUrl,
  imageAlt = "",
  labelStyle,
  circleSize = CONNECTION_STEPS_LAYOUT.circleSize,
  variant = "anchored",
  className = "",
  style,
}) {
  const isStacked = variant === "stacked";

  return (
    <div
      className={`relative flex flex-col items-center text-center ${className}`}
      style={
        isStacked
          ? { width: circleSize + 40, ...style }
          : { width: circleSize, height: circleSize, ...style }
      }
    >
      <div
        className="relative"
        style={{ width: circleSize, height: circleSize }}
      >
        {stepLabel ? (
          <p
            className={`pointer-events-none absolute z-20 whitespace-nowrap italic font-medium  ${typography.itemTitle}  leading-none text-secondary-2 `}
            style={labelStyle}
          >
            {stepLabel}
          </p>
        ) : null}

        <div className="relative z-10 h-full w-full overflow-hidden rounded-full shadow-[0_8px_20px_rgb(1_38_59_/_0.14)]">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={imageAlt || stepLabel || ""}
              fill
              className="object-cover"
              sizes={`${circleSize}px`}
            />
          ) : (
            <div className="h-full w-full bg-surface-2" aria-hidden />
          )}
        </div>
      </div>

      {description ? (
        <p
          className={
            isStacked
              ? `${typography.caption} mt-3  leading-snug text-secondary-2 `
              : `${typography.caption} absolute left-1/2 top-[calc(100%+0.75rem)] z-10 w-[11rem] -translate-x-1/2 leading-snug text-secondary-2 lg:w-[12rem] lg:top-[calc(100%+1rem)]`
          }
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
