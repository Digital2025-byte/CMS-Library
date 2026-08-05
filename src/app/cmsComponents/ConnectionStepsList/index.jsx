"use client";

import ConnectionStepsListPanel from "./components/ConnectionStepsListPanel";
import { getConnectionStepsListContent } from "./utils/helpers";

const ConnectionStepsList = ({ lang = "en", data }) => {
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
    />
  );
};

export default ConnectionStepsList;
