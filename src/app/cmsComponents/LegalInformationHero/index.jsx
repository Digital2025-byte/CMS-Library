"use client";

import LegalInformationHeroPanel from "./components/LegalInformationHeroPanel";
import { getLegalInformationHeroContent } from "./utils/helpers";

/**
 * LegalInformationHero — full-bleed legal page hero with pattern overlay.
 */
export default function LegalInformationHero({
  lang = "en",
  data,
  title: titleProp,
  description: descriptionProp,
  patternUrl: patternUrlProp,
}) {
  const content = getLegalInformationHeroContent(data, lang);
  const title = titleProp || content.title;
  const description = descriptionProp || content.description;
  const patternUrl = patternUrlProp || content.patternUrl;

  if (!title && !description) {
    return null;
  }

  return (
    <LegalInformationHeroPanel
      lang={lang}
      title={title}
      description={description}
      patternUrl={patternUrl}
    />
  );
}
