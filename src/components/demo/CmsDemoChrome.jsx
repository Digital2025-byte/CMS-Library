"use client";

import LanguageSwitcher from "@/i18n/LanguageSwitcher";
import PageContentContainer from "@/components/layout/PageContentContainer";
import ComponentNav, { COMPONENT_NAV_ITEMS } from "@/components/ui/ComponentNav";
import IdeaNav from "./IdeaNav";

export default function CmsDemoChrome({
  sectionIds,
  overlay = true,
  children,
}) {
  const navItems = sectionIds
    ? COMPONENT_NAV_ITEMS.filter((item) => sectionIds.includes(item.id))
    : COMPONENT_NAV_ITEMS;

  return (
    <main className="relative">
      <div
        className={`${
          overlay
            ? "absolute inset-x-0 top-0 w-full pt-4"
            : "sticky top-0 border-b border-200 bg-background/95 py-3 backdrop-blur"
        } z-50`}
      >
        <PageContentContainer className="flex items-center justify-between gap-3">
          <IdeaNav tone={overlay ? "light" : "dark"} />
          <div className="flex shrink-0 items-center justify-end gap-2">
            <ComponentNav items={navItems} />
            <LanguageSwitcher />
          </div>
        </PageContentContainer>
      </div>
      {children}
    </main>
  );
}
