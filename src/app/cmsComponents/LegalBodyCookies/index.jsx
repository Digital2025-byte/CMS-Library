"use client";

import LegalBodyCookiesPanel from "./components/LegalBodyCookiesPanel";
import { getLegalBodyCookiesContent } from "./utils/helpers";

/**
 * LegalBodyCookies — cookies policy body (types, third-party, preferences).
 */
export default function LegalBodyCookies({ lang = "en", data }) {
  const { content, hasContent } = getLegalBodyCookiesContent(data, lang);

  if (!hasContent) {
    return null;
  }

  return <LegalBodyCookiesPanel lang={lang} content={content} />;
}
