"use client";

import LegalBodyPrivacyPolicyPanel from "./components/LegalBodyPrivacyPolicyPanel";
import { getLegalBodyPrivacyPolicyContent } from "./utils/helpers";

/**
 * LegalBodyPrivacyPolicy — privacy notice body from CMS JSON / constants.
 */
export default function LegalBodyPrivacyPolicy({ lang = "en", data }) {
  const { content, hasContent } = getLegalBodyPrivacyPolicyContent(data, lang);

  if (!hasContent) {
    return null;
  }

  return <LegalBodyPrivacyPolicyPanel lang={lang} content={content} />;
}
