"use client";

import ServiceBenefitsPanel from "./components/ServiceBenefitsPanel";
import { getServiceBenefitsContent } from "./utils/helpers";
import { resolveServiceBenefitsStyle } from "./utils/style";

export default function ServiceBenefitsList({ lang = "en", data, style }) {
  const resolvedStyle = resolveServiceBenefitsStyle(style);
  const { mainTitle, backgroundImage, benefits, hasContent } =
    getServiceBenefitsContent(data, lang);

  if (!hasContent) {
    return null;
  }

  return (
    <ServiceBenefitsPanel
      mainTitle={mainTitle}
      backgroundImage={backgroundImage}
      benefits={benefits}
      style={resolvedStyle}
    />
  );
}
