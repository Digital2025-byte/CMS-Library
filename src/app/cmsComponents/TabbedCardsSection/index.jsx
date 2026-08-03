"use client";

import TabbedCardsGrid from "./components/TabbedCardsGrid";
import TabbedCardsHeader from "./components/TabbedCardsHeader";
import TabbedCardsTabs from "./components/TabbedCardsTabs";
import { useTabbedCards } from "./hooks/useTabbedCards";
import { getTabbedCardsContent } from "./utils/helpers";

const TabbedCardsSection = ({ lang = "en", data }) => {
  const { title, subtitle, tabs, hasContent } = getTabbedCardsContent(
    data,
    lang
  );
  const { activeTabIndex, setActiveTabIndex, activeCards } =
    useTabbedCards(tabs);

  if (!hasContent) {
    return null;
  }

  return (
    <>
      <TabbedCardsHeader title={title} subtitle={subtitle} />
      <TabbedCardsTabs
        tabs={tabs}
        activeTabIndex={activeTabIndex}
        onTabChange={setActiveTabIndex}
      />
      <TabbedCardsGrid key={activeTabIndex} cards={activeCards} />
    </>
  );
};

export default TabbedCardsSection;
