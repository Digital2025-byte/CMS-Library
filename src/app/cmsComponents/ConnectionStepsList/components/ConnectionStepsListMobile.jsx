import {
  CONNECTION_STEPS_MOBILE_LAYOUT,
  getMobileTrackHeightPx,
} from "../utils/layoutMobile";
import ConnectionStepMobile from "./ConnectionStepMobile";
import ConnectionStepsPathMobile from "./ConnectionStepsPathMobile";

/**
 * Mobile zigzag matching the design:
 * Step 1/3 image left + text right, Step 2/4 image right + text left,
 * continuous dashed curve through the circle centers.
 */
export default function ConnectionStepsListMobile({
  steps = [],
  stepLabelPrefix = "Step",
  isRtl = false,
}) {
  const { circleSize, gapHeight, path } = CONNECTION_STEPS_MOBILE_LAYOUT;
  const trackHeight = getMobileTrackHeightPx(steps.length);

  return (
    <div
      className="relative w-full overflow-visible md:hidden"
      style={{ height: trackHeight }}
    >
      <ConnectionStepsPathMobile stepCount={steps.length} isRtl={isRtl} />

      <ol className="absolute inset-0 z-10 list-none">
        {steps.map((step, index) => {
          // Same L/R slots the SVG path uses (before RTL mirror)
          const slotOnLeft = index % 2 === 0;
          const centerX = isRtl
            ? 100 - (slotOnLeft ? path.leftX : path.rightX)
            : slotOnLeft
              ? path.leftX
              : path.rightX;
          // After RTL mirror, "image on visual left" flips
          const imageOnLeft = isRtl ? !slotOnLeft : slotOnLeft;

          return (
            <li
              key={`mobile-step-${step.description || index}`}
              className="relative w-full"
              style={{
                height: circleSize,
                marginBottom: index === steps.length - 1 ? 0 : gapHeight,
              }}
            >
              <ConnectionStepMobile
                step={step}
                stepLabel={`${stepLabelPrefix} ${index + 1}`}
                imageOnLeft={imageOnLeft}
                circleSize={circleSize}
                centerX={centerX}
              />
            </li>
          );
        })}
      </ol>
    </div>
  );
}
