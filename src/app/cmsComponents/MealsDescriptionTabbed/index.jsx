"use client";

import MealsDescriptionTabbedPanel from "./components/MealsDescriptionTabbedPanel";
import { useMealsDescriptionTabbed } from "./hooks/useMealsDescriptionTabbed";
import { getMealsDescriptionTabbedContent } from "./utils/helpers";

const MealsDescriptionTabbed = ({ lang = "en", data }) => {
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
    />
  );
};

export default MealsDescriptionTabbed;
