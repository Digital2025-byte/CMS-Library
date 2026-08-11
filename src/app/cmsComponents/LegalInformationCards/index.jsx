"use client";

import LegalInformationCardsPanel from "./components/LegalInformationCardsPanel";
import { getLegalInformationCardsContent } from "./utils/helpers";

/**
 * LegalInformationCards — privacy, cookies, and terms cards.
 */
export default function LegalInformationCards({
  lang = "en",
  data,
  posParams = "gb",
  cId,
}) {
  const { cards, hasContent } = getLegalInformationCardsContent(data, lang);

  if (!hasContent) {
    return null;
  }

  return (
    <LegalInformationCardsPanel
      lang={lang}
      cards={cards}
      posParams={posParams}
      cId={cId}
    />
  );
}
