"use client";

import ServiceCardsSliderPanel from "./components/ServiceCardsSliderPanel";
import { getServiceCardsSliderContent } from "./utils/helpers";

const ServiceCardsSlider = ({
  lang = "en",
  data,
  posParams,
  cId,
  showTitleDescription = true,
}) => {
  const { title, description, services, hasContent } =
    getServiceCardsSliderContent(data, lang, posParams, cId);

  if (!hasContent) {
    return null;
  }

  return (
    <ServiceCardsSliderPanel
      lang={lang}
      title={title}
      description={description}
      services={services}
      showTitleDescription={showTitleDescription}
    />
  );
};

export default ServiceCardsSlider;
