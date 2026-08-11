"use client";

import FormHeaderPanel from "./components/FormHeaderPanel";
import { getFormHeaderContent } from "./utils/helpers";

/**
 * FormHeader — survey form banner, promo, title, and start CTA.
 */
export default function FormHeader({
  lang = "en",
  data,
  posParams = "gb",
  title: titleProp,
  subtitle: subtitleProp,
  isTransportationSurvey: isTransportationSurveyProp,
  children,
}) {
  const content = getFormHeaderContent(data, lang);
  const title = titleProp || content.title;
  const subtitle = subtitleProp ?? content.subtitle;
  const isTransportationSurvey =
    typeof isTransportationSurveyProp === "boolean"
      ? isTransportationSurveyProp
      : content.isTransportationSurvey;

  if (!content.hasContent && !title) {
    return null;
  }

  return (
    <FormHeaderPanel
      lang={lang}
      posParams={posParams}
      title={title}
      subtitle={subtitle}
      ctaLabel={content.ctaLabel}
      headerImageSrc={content.headerImageSrc}
      promoImageSrc={content.promoImageSrc}
      promoHref={content.promoHref}
      promoAlt={content.promoAlt}
      isTransportationSurvey={isTransportationSurvey}
    >
      {children}
    </FormHeaderPanel>
  );
}
