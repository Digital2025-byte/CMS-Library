"use client";

import TabbedCardsGrid from "./components/TabbedCardsGrid";
import TabbedCardsHeader from "./components/TabbedCardsHeader";
import TabbedCardsTabs from "./components/TabbedCardsTabs";
import { useTabbedCards } from "./hooks/useTabbedCards";
import { getTabbedCardsContent } from "./utils/helpers";
import { DEFAULT_TABBED_CARDS_STYLE } from "./utils/style";

const TabbedCardsSection = ({
  lang = "en",
  data,
  showTitle = DEFAULT_TABBED_CARDS_STYLE.showTitle,
  showDescription = DEFAULT_TABBED_CARDS_STYLE.showDescription,
  showTabs = DEFAULT_TABBED_CARDS_STYLE.showTabs,
  showImage = DEFAULT_TABBED_CARDS_STYLE.showImage,
  showCardTitle = DEFAULT_TABBED_CARDS_STYLE.showCardTitle,
  showCardDescription = DEFAULT_TABBED_CARDS_STYLE.showCardDescription,
  showCardBg = DEFAULT_TABBED_CARDS_STYLE.showCardBg,
  titleAlign = DEFAULT_TABBED_CARDS_STYLE.titleAlign,
  titleColor = DEFAULT_TABBED_CARDS_STYLE.titleColor,
  descriptionColor = DEFAULT_TABBED_CARDS_STYLE.descriptionColor,
  tabTrack = DEFAULT_TABBED_CARDS_STYLE.tabTrack,
  tabActiveBg = DEFAULT_TABBED_CARDS_STYLE.tabActiveBg,
  tabActiveText = DEFAULT_TABBED_CARDS_STYLE.tabActiveText,
  tabIdleText = DEFAULT_TABBED_CARDS_STYLE.tabIdleText,
  cardRadius = DEFAULT_TABBED_CARDS_STYLE.cardRadius,
  cardGap = DEFAULT_TABBED_CARDS_STYLE.cardGap,
  cardBg = DEFAULT_TABBED_CARDS_STYLE.cardBg,
  nameColor = DEFAULT_TABBED_CARDS_STYLE.nameColor,
  bodyColor = DEFAULT_TABBED_CARDS_STYLE.bodyColor,
}) => {
  const { title, subtitle, tabs, hasContent } = getTabbedCardsContent(
    data,
    lang
  );
  const { activeTabIndex, setActiveTabIndex, activeCards } =
    useTabbedCards(tabs);

  if (!hasContent) {
    return null;
  }

  const visibleCards = showTabs
    ? activeCards
    : tabs.flatMap((tab) => tab.cards || []);

  return (
    <>
      <TabbedCardsHeader
        title={title}
        subtitle={subtitle}
        showTitle={showTitle}
        showDescription={showDescription}
        titleAlign={titleAlign}
        titleColor={titleColor}
        descriptionColor={descriptionColor}
      />
      {showTabs ? (
        <TabbedCardsTabs
          tabs={tabs}
          activeTabIndex={activeTabIndex}
          onTabChange={setActiveTabIndex}
          tabTrack={tabTrack}
          tabActiveBg={tabActiveBg}
          tabActiveText={tabActiveText}
          tabIdleText={tabIdleText}
        />
      ) : null}
      <TabbedCardsGrid
        key={showTabs ? activeTabIndex : "all"}
        cards={visibleCards}
        showImage={showImage}
        showCardTitle={showCardTitle}
        showCardDescription={showCardDescription}
        showCardBg={showCardBg}
        cardRadius={cardRadius}
        cardGap={cardGap}
        cardBg={cardBg}
        nameColor={nameColor}
        bodyColor={bodyColor}
      />
    </>
  );
};

export default TabbedCardsSection;
