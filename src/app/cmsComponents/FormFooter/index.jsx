"use client";

import FormFooterPanel from "./components/FormFooterPanel";
import { getFormFooterContent } from "./utils/helpers";

/**
 * FormFooter — survey follow/contact footer and copyright.
 */
export default function FormFooter({
  lang = "en",
  data,
  isTransportationSurvey: isTransportationSurveyProp,
}) {
  const content = getFormFooterContent(data, lang);
  const isTransportationSurvey =
    typeof isTransportationSurveyProp === "boolean"
      ? isTransportationSurveyProp
      : content.isTransportationSurvey;

  if (!content.hasContent) {
    return null;
  }

  return (
    <FormFooterPanel
      lang={lang}
      followTitle={content.followTitle}
      followDescription={content.followDescription}
      contactTitle={content.contactTitle}
      email={content.email}
      website={content.website}
      copyright={content.copyright}
      phone={isTransportationSurvey ? content.transportPhone : content.phone}
      phoneHref={
        isTransportationSurvey
          ? content.transportPhoneHref
          : content.phoneHref
      }
      socialLinks={content.socialLinks}
    />
  );
}
