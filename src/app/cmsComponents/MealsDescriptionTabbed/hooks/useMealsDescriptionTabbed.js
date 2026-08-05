"use client";

import { useCallback, useState } from "react";

export function useMealsDescriptionTabbed(tabs = []) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [openSections, setOpenSections] = useState({});

  const safeTabIndex =
    tabs.length === 0 ? 0 : Math.min(activeTabIndex, tabs.length - 1);
  const activeTab = tabs[safeTabIndex] || {};
  const activeSections = Array.isArray(activeTab?.sections)
    ? activeTab.sections
    : [];

  const isSectionOpen = useCallback(
    (sectionIndex) => {
      const key = `${safeTabIndex}-${sectionIndex}`;
      return openSections[key] === undefined ? true : openSections[key];
    },
    [openSections, safeTabIndex]
  );

  const toggleSection = useCallback(
    (sectionIndex) => {
      const key = `${safeTabIndex}-${sectionIndex}`;
      setOpenSections((prev) => ({
        ...prev,
        [key]: prev[key] === undefined ? false : !prev[key],
      }));
    },
    [safeTabIndex]
  );

  const handleTabChange = useCallback((index) => {
    setActiveTabIndex(index);
  }, []);

  return {
    activeTabIndex: safeTabIndex,
    setActiveTabIndex: handleTabChange,
    activeTab,
    activeSections,
    isSectionOpen,
    toggleSection,
  };
}
