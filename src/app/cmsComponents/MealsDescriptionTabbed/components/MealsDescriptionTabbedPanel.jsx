"use client";

import { useId } from "react";
import PageContentContainer from "@/components/layout/PageContentContainer";
import { typography } from "@/styles/typography";
import MealsDescriptionImage from "./MealsDescriptionImage";
import MealsDescriptionSections from "./MealsDescriptionSections";
import MealsDescriptionTabs from "./MealsDescriptionTabs";

export default function MealsDescriptionTabbedPanel({
  lang = "en",
  title,
  tabs = [],
  notes = [],
  activeTabIndex = 0,
  onTabChange,
  activeSections = [],
  activeImage,
  isSectionOpen,
  onToggleSection,
}) {
  const baseId = useId();
  const isRtl = lang === "ar";
  const panelId = `${baseId}-panel-${activeTabIndex}`;

  return (
    <section
      className="w-full bg-white py-8 lg:py-12"
      dir={isRtl ? "rtl" : "ltr"}
      aria-labelledby={title ? `${baseId}-title` : undefined}
    >
      <PageContentContainer>
        {title ? (
          <h2
            id={`${baseId}-title`}
            className={`${typography.sectionTitle} mb-5 font-semibold text-primary-1`}
          >
            {title}
          </h2>
        ) : null}

        <MealsDescriptionTabs
          tabs={tabs}
          activeTabIndex={activeTabIndex}
          onTabChange={onTabChange}
          idPrefix={baseId}
          isRtl={isRtl}
        />

        <div className="mt-6 grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-8">
          <MealsDescriptionSections
            sections={activeSections}
            notes={notes}
            isSectionOpen={isSectionOpen}
            onToggleSection={onToggleSection}
            panelId={panelId}
            labelledBy={`${baseId}-tab-${activeTabIndex}`}
          />
          <MealsDescriptionImage
            image={activeImage}
            tabKey={`tab-${activeTabIndex}`}
          />
        </div>
      </PageContentContainer>
    </section>
  );
}
