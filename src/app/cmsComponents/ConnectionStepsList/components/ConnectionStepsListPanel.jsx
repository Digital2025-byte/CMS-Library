import PageContentContainer from "@/components/layout/PageContentContainer";
import { typography } from "@/styles/typography";
import { CONNECTION_STEPS_LAYOUT } from "../utils/layout";
import ConnectionStep1 from "./ConnectionStep1";
import ConnectionStep2 from "./ConnectionStep2";
import ConnectionStep3 from "./ConnectionStep3";
import ConnectionStep4 from "./ConnectionStep4";
import ConnectionStepsListMobile from "./ConnectionStepsListMobile";
import ConnectionStepsPath from "./ConnectionStepsPath";

const STEP_COMPONENTS = [
  ConnectionStep1,
  ConnectionStep2,
  ConnectionStep3,
  ConnectionStep4,
];

export default function ConnectionStepsListPanel({
  lang = "en",
  title,
  steps = [],
  stepLabelPrefix = "Step",
}) {
  const isRtl = lang === "ar";

  return (
    <section
      className="w-full overflow-visible bg-100 py-8 lg:py-14"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <PageContentContainer>
        {title ? (
          <h2
            className={`${typography.sectionTitle} mb-8 font-semibold text-primary-1 md:mb-12`}
          >
            {title}
          </h2>
        ) : null}

        {/* Small screens — zigzag + dashed connectors */}
        <ConnectionStepsListMobile
          steps={steps}
          stepLabelPrefix={stepLabelPrefix}
          isRtl={isRtl}
        />

        {/* Desktop — horizontal wave (unchanged) */}
        <div
          className="relative hidden w-full overflow-visible md:block"
          style={{ height: CONNECTION_STEPS_LAYOUT.trackHeight }}
        >
          <div className="absolute inset-0 z-0">
            <ConnectionStepsPath isRtl={isRtl} />
          </div>

          <ol className="absolute inset-0 z-10 list-none">
            {STEP_COMPONENTS.map((StepComponent, index) => {
              const step = steps[index];
              if (!step) {
                return null;
              }

              return (
                <StepComponent
                  key={`d-${step.description || index}`}
                  step={step}
                  stepLabel={`${stepLabelPrefix} ${index + 1}`}
                  isRtl={isRtl}
                />
              );
            })}
          </ol>
        </div>
      </PageContentContainer>
    </section>
  );
}
