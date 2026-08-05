import PageContentContainer from "@/components/layout/PageContentContainer";
import { typography } from "@/styles/typography";
import { CONNECTION_STEPS_LAYOUT } from "../utils/layout";
import ConnectionStep from "./ConnectionStep";
import ConnectionStep1 from "./ConnectionStep1";
import ConnectionStep2 from "./ConnectionStep2";
import ConnectionStep3 from "./ConnectionStep3";
import ConnectionStep4 from "./ConnectionStep4";
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

        {/* Mobile: simple 2×2 — no wave */}
        <ol className="grid list-none grid-cols-2 justify-items-center gap-x-6 gap-y-14 pt-8 md:hidden">
          {steps.map((step, index) => (
            <li key={`m-${step.description || index}`}>
              <ConnectionStep
                variant="stacked"
                stepLabel={`${stepLabelPrefix} ${index + 1}`}
                description={step.description}
                imageUrl={step.imageUrl}
                imageAlt={step.imageAlt}
                circleSize={110}
                labelStyle={{
                  top: "-1.5rem",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              />
            </li>
          ))}
        </ol>

        {/*
          Desktop: compose Step1–4 + one SVG path.
          Edit positions in utils/layout.js
        */}
        <div
          className="relative hidden w-full overflow-visible md:block"
          style={{ height: CONNECTION_STEPS_LAYOUT.trackHeight }}
        >
          {/* Line sits behind circles (z-0); steps are z-10 inside ConnectionStep */}
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
