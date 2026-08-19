"use client";

import ConnectionStepsListPanel from "./components/ConnectionStepsListPanel";
import { getConnectionStepsListContent } from "./utils/helpers";
import { resolveConnectionStepsListStyle } from "./utils/style";

export default function ConnectionStepsList({ lang = "en", data, style }) {
  const resolvedStyle = resolveConnectionStepsListStyle(style);
  const { title, steps, stepLabel, hasContent } = getConnectionStepsListContent(
    data,
    lang
  );

  if (!hasContent) {
    return null;
  }

  return (
    <ConnectionStepsListPanel
      lang={lang}
      title={title}
      steps={steps}
      stepLabelPrefix={stepLabel || (lang === "ar" ? "الخطوة" : "Step")}
      style={resolvedStyle}
    />
  );
}
