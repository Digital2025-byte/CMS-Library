"use client";

import MealsDescriptionTabbedPanel from "./components/MealsDescriptionTabbedPanel";
import { useMealsDescriptionTabbed } from "./hooks/useMealsDescriptionTabbed";
import { getMealsDescriptionTabbedContent } from "./utils/helpers";
import { DEFAULT_MEALS_TABBED_STYLE } from "./utils/style";

const MealsDescriptionTabbed = ({
  lang = "en",
  data,
  showTitle = DEFAULT_MEALS_TABBED_STYLE.showTitle,
  showTabs = DEFAULT_MEALS_TABBED_STYLE.showTabs,
  showImage = DEFAULT_MEALS_TABBED_STYLE.showImage,
  showNotes = DEFAULT_MEALS_TABBED_STYLE.showNotes,
  showSectionBg = DEFAULT_MEALS_TABBED_STYLE.showSectionBg,
  showItemTitle = DEFAULT_MEALS_TABBED_STYLE.showItemTitle,
  showItemDescription = DEFAULT_MEALS_TABBED_STYLE.showItemDescription,
  sectionBg = DEFAULT_MEALS_TABBED_STYLE.sectionBg,
  sectionPadding = DEFAULT_MEALS_TABBED_STYLE.sectionPadding,
  titleAlign = DEFAULT_MEALS_TABBED_STYLE.titleAlign,
  titleColor = DEFAULT_MEALS_TABBED_STYLE.titleColor,
  tabActive = DEFAULT_MEALS_TABBED_STYLE.tabActive,
  tabIdle = DEFAULT_MEALS_TABBED_STYLE.tabIdle,
  tabBorder = DEFAULT_MEALS_TABBED_STYLE.tabBorder,
  accordionRadius = DEFAULT_MEALS_TABBED_STYLE.accordionRadius,
  headerBg = DEFAULT_MEALS_TABBED_STYLE.headerBg,
  headerText = DEFAULT_MEALS_TABBED_STYLE.headerText,
  bodyBg = DEFAULT_MEALS_TABBED_STYLE.bodyBg,
  groupTitleColor = DEFAULT_MEALS_TABBED_STYLE.groupTitleColor,
  itemTitleColor = DEFAULT_MEALS_TABBED_STYLE.itemTitleColor,
  groupItemTitleColor = DEFAULT_MEALS_TABBED_STYLE.groupItemTitleColor,
  itemBodyColor = DEFAULT_MEALS_TABBED_STYLE.itemBodyColor,
  itemBg = DEFAULT_MEALS_TABBED_STYLE.itemBg,
  stripeColor = DEFAULT_MEALS_TABBED_STYLE.stripeColor,
  notesColor = DEFAULT_MEALS_TABBED_STYLE.notesColor,
  imageRadius = DEFAULT_MEALS_TABBED_STYLE.imageRadius,
}) => {
  const { title, tabs, notes, hasContent } = getMealsDescriptionTabbedContent(
    data,
    lang
  );
  const {
    activeTabIndex,
    setActiveTabIndex,
    activeTab,
    activeSections,
    isSectionOpen,
    toggleSection,
  } = useMealsDescriptionTabbed(tabs);

  if (!hasContent) {
    return null;
  }

  return (
    <MealsDescriptionTabbedPanel
      lang={lang}
      title={title}
      tabs={tabs}
      notes={notes}
      activeTabIndex={activeTabIndex}
      onTabChange={setActiveTabIndex}
      activeSections={activeSections}
      activeImage={activeTab?.image}
      isSectionOpen={isSectionOpen}
      onToggleSection={toggleSection}
      showTitle={showTitle}
      showTabs={showTabs}
      showImage={showImage}
      showNotes={showNotes}
      showSectionBg={showSectionBg}
      showItemTitle={showItemTitle}
      showItemDescription={showItemDescription}
      sectionBg={sectionBg}
      sectionPadding={sectionPadding}
      titleAlign={titleAlign}
      titleColor={titleColor}
      tabActive={tabActive}
      tabIdle={tabIdle}
      tabBorder={tabBorder}
      accordionRadius={accordionRadius}
      headerBg={headerBg}
      headerText={headerText}
      bodyBg={bodyBg}
      groupTitleColor={groupTitleColor}
      itemTitleColor={itemTitleColor}
      groupItemTitleColor={groupItemTitleColor}
      itemBodyColor={itemBodyColor}
      itemBg={itemBg}
      stripeColor={stripeColor}
      notesColor={notesColor}
      imageRadius={imageRadius}
    />
  );
};

export default MealsDescriptionTabbed;
