"use client";

import PageContentContainer from "@/components/layout/PageContentContainer";
import LegalInformationCard from "./LegalInformationCard";
import {
  CARD_GAP_CLASS,
  DEFAULT_LEGAL_INFORMATION_CARDS_STYLE,
  SECTION_PADDING_CLASS,
} from "../utils/style";

export default function LegalInformationCardsPanel({
  lang = "en",
  cards = [],
  posParams = "gb",
  cId,
  style = DEFAULT_LEGAL_INFORMATION_CARDS_STYLE,
}) {
  const paddingClass =
    SECTION_PADDING_CLASS[style.sectionPadding] ??
    SECTION_PADDING_CLASS.default;
  const gapClass = CARD_GAP_CLASS[style.cardGap] ?? CARD_GAP_CLASS.default;

  return (
    <section className={paddingClass} dir={lang === "ar" ? "rtl" : "ltr"}>
      <PageContentContainer>
        <div className={`grid grid-cols-1 md:grid-cols-3 ${gapClass}`}>
          {cards.map((card, index) => (
            <LegalInformationCard
              key={`${card.slug || card.title}-${index}`}
              card={card}
              lang={lang}
              posParams={posParams}
              cId={cId}
              style={style}
            />
          ))}
        </div>
      </PageContentContainer>
    </section>
  );
}
