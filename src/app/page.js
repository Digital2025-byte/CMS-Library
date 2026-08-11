"use client";

import CmsDemoChrome from "@/components/demo/CmsDemoChrome";
import { CmsDemoSections } from "@/components/demo/CmsDemoSections";
import { HOME_SECTION_IDS } from "@/components/demo/ideaGroups";
import useCmsDemoData from "@/components/demo/useCmsDemoData";

export default function Home() {
  const ctx = useCmsDemoData();

  return (
    <CmsDemoChrome overlay sectionIds={HOME_SECTION_IDS}>
      <CmsDemoSections ids={HOME_SECTION_IDS} ctx={ctx} />
    </CmsDemoChrome>
  );
}
