import Image from "next/image";
import { typography } from "@/styles/typography";
import { CONNECTION_STEPS_MOBILE_LAYOUT } from "../utils/layoutMobile";

/**
 * Mobile step: circle centered on layout leftX/rightX,
 * text sitting beside it (same coords as the dashed path).
 */
export default function ConnectionStepMobile({
  step,
  stepLabel,
  imageOnLeft = true,
  circleSize = CONNECTION_STEPS_MOBILE_LAYOUT.circleSize,
  centerX,
}) {
  const { path } = CONNECTION_STEPS_MOBILE_LAYOUT;
  const x = centerX ?? (imageOnLeft ? path.leftX : path.rightX);

  return (
    <div
      className="absolute top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${x}%`, width: circleSize, height: circleSize }}
    >
      <div className="relative h-full w-full overflow-hidden rounded-full bg-100">
        {step?.imageUrl ? (
          <Image
            src={step.imageUrl}
            alt={step.imageAlt || stepLabel || ""}
            fill
            className="object-cover"
            sizes={`${circleSize}px`}
          />
        ) : (
          <div className="h-full w-full bg-surface-2" aria-hidden />
        )}
      </div>

      <div
        className={`absolute top-1/2 z-20 w-[9.75rem] -translate-y-1/2 text-start sm:w-[11rem] ${
          imageOnLeft
            ? "left-[calc(100%+0.75rem)]"
            : "right-[calc(100%+0.75rem)]"
        }`}
      >
        {stepLabel ? (
          <p
            className={`${typography.itemTitle} italic font-medium leading-tight text-secondary-2`}
          >
            {stepLabel}
          </p>
        ) : null}
        {step?.description ? (
          <p
            className={`${typography.caption} mt-1.5 leading-snug text-secondary-2`}
          >
            {step.description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
