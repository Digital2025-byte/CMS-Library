"use client";

import PageContentContainer from "@/components/layout/PageContentContainer";
import LegalInformationCard from "./LegalInformationCard";

export default function LegalInformationCardsPanel({
  lang = "en",
  cards = [],
  posParams = "gb",
  cId,
}) {
  return (
    <section
      className="py-12 md:py-16"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <PageContentContainer>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {cards.map((card, index) => (
            <LegalInformationCard
              key={`${card.slug || card.title}-${index}`}
              card={card}
              lang={lang}
              posParams={posParams}
              cId={cId}
            />
          ))}
        </div>
      </PageContentContainer>
    </section>
  );
}
