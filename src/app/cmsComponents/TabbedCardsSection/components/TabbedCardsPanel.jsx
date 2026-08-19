"use client";

import TabbedCardsGrid from "./TabbedCardsGrid";
import TabbedCardsHeader from "./TabbedCardsHeader";
import TabbedCardsTabs from "./TabbedCardsTabs";
import { useTabbedCards } from "../hooks/useTabbedCards";
import { DEFAULT_TABBED_CARDS_STYLE } from "../utils/style";

export default function TabbedCardsPanel({
  lang = "en",
  content,
  style = DEFAULT_TABBED_CARDS_STYLE,
}) {
  void lang;
  const { activeTabIndex, setActiveTabIndex, activeCards } = useTabbedCards(
    content.tabs
  );

  const visibleCards = style.showTabs
    ? activeCards
    : (content.tabs || []).flatMap((tab) => tab.cards || []);

  return (
    <>
      <TabbedCardsHeader
        title={content.title}
        subtitle={content.subtitle}
        style={style}
      />
      {style.showTabs ? (
        <TabbedCardsTabs
          tabs={content.tabs}
          activeTabIndex={activeTabIndex}
          onTabChange={setActiveTabIndex}
          style={style}
        />
      ) : null}
      <TabbedCardsGrid
        key={style.showTabs ? activeTabIndex : "all"}
        cards={visibleCards}
        style={style}
      />
    </>
  );
}
