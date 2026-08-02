"use client";

import ServiceBenefitsPanel from "./components/ServiceBenefitsPanel";
import { getServiceBenefitsContent } from "./utils/helpers";

const ServiceBenefitsList = ({ lang = "en", data }) => {
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
    />
  );
};

export default ServiceBenefitsList;
